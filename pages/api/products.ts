import { NextApiRequest, NextApiResponse } from 'next'
import { generateId } from './utils'
import { redis } from '../../services/redis'

const products = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { name, price, stock } = request.body

    const newProduct = {
      name,
      price,
      stock,
      updatedAt: new Date(),
      createdAt: new Date()
    }

    await redis.hset('products', generateId(), JSON.stringify(newProduct))
    return response.status(200).json({
      body: 'success'
    })
  }

  if (request.method === 'PUT') {
    const { id, quantity } = request.body
    const redisProduct = await redis.hget('products', id)
    if (redisProduct) {
      const product = JSON.parse(redisProduct)
      const newProduct = {
        ...product,
        stock: parseInt(product.stock) + parseInt(quantity)
      }
      redis.hset('products', id, JSON.stringify(newProduct))
      return response.status(200).json({
        body: 'success'
      })
    }
    return response.status(200).json({
      body: 'error'
    })
  }

  if (request.method === 'DELETE') {
    const { id } = request.body

    await redis.hdel('products', id)
    return response.status(200).json({
      body: 'success'
    })
  }

  response.status(405).end()
}

export default products
