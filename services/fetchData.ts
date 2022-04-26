import { redis } from './redis'

export const fetchData = async (collection: string) => {
  const data = (await redis.hgetall(collection))
  for (const key in data) {
    data[key] = JSON.parse(data[key])
    data[key].id = key
  }

  return data
}
