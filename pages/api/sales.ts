import { NextApiRequest, NextApiResponse } from 'next'
import { generateId } from './utils'
import { redis } from '../../services/redis'

const sales = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { customerId, nit, total } = request.body

    const newPurchase = {
      nit,
      customerId,
      total,
      updatedAt: new Date(),
      createdAt: new Date()
    }

    await redis.hset('sales', generateId(), JSON.stringify(newPurchase))
    return response.status(200).json({
      body: 'success'
    })
  }

  if (request.method === 'DELETE') {
    const { id } = request.body

    await redis.hdel('sales', id)
    return response.status(200).json({
      body: 'success'
    })
  }

  response.status(405).end()
}

export default sales
