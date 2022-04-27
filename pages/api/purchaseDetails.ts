import { NextApiRequest, NextApiResponse } from 'next'
import { generateId } from './utils'
import { redis } from '../../services/redis'

const purchaseDetails = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { productId, total, quantity } = request.body

    const newPurchaseDetail = {
      productId,
      total,
      quantity,
      updatedAt: new Date(),
      createdAt: new Date()
    }

    await redis.hset('purchaseDetails', generateId(), JSON.stringify(newPurchaseDetail))
    return response.status(200).json({
      body: 'success'
    })
  }

  if (request.method === 'DELETE') {
    const { id } = request.body

    await redis.hdel('purchaseDetails', id)
    return response.status(200).json({
      body: 'success'
    })
  }

  response.status(405).end()
}

export default purchaseDetails
