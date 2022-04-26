import { NextApiRequest, NextApiResponse } from 'next'
import { generateId } from './utils'
import { redis } from '../../services/redis'

const language = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { name, nit, phone, address } = request.body

    const newCustomer = {
      name,
      nit,
      phone,
      address
    }

    const redisResponse = await redis.hset('customers', generateId(), JSON.stringify(newCustomer))
    console.log(redisResponse)
    return response.status(200).json({
      body: 'success'
    })
  }

  response.status(405).end()
}

export default language
