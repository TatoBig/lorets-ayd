import { NextApiRequest, NextApiResponse } from 'next'
import { generateId } from './utils'
import { redis } from '../../services/redis'

const users = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { name, email } = request.body

    const newCustomer = {
      name,
      email,
      updatedAt: new Date(),
      createdAt: new Date()
    }

    await redis.hset('users', generateId(), JSON.stringify(newCustomer))
    return response.status(200).json({
      body: 'success'
    })
  }

  if (request.method === 'DELETE') {
    const { id } = request.body

    await redis.hdel('users', id)
    return response.status(200).json({
      body: 'success'
    })
  }

  response.status(405).end()
}

export default users
