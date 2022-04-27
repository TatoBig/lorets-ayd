import { NextApiRequest, NextApiResponse } from 'next'
import { generateId } from './utils'
import { redis } from '../../services/redis'

const providers = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { name, nit, phone, address } = request.body

    const newProvider = {
      name,
      nit,
      phone,
      address,
      updatedAt: new Date(),
      createdAt: new Date()
    }

    await redis.hset('providers', generateId(), JSON.stringify(newProvider))
    return response.status(200).json({
      body: 'success'
    })
  }

  if (request.method === 'DELETE') {
    const { id } = request.body

    await redis.hdel('providers', id)
    return response.status(200).json({
      body: 'success'
    })
  }

  response.status(405).end()
}

export default providers
