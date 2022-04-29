import { NextApiRequest, NextApiResponse } from 'next'
import { redis } from '../../services/redis'

const purchases = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { providerId, nit, total, id } = request.body

    const newPurchase = {
      nit,
      providerId,
      total,
      updatedAt: new Date(),
      createdAt: new Date()
    }

    await redis.hset('purchases', id, JSON.stringify(newPurchase))
    return response.status(200).json({
      body: 'success'
    })
  }

  if (request.method === 'DELETE') {
    const { id } = request.body

    await redis.hdel('purchases', id)
    return response.status(200).json({
      body: 'success'
    })
  }

  response.status(405).end()
}

export default purchases
