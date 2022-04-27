import { useToast } from '@chakra-ui/react'
import { Provider } from 'models/Provider'
import { useRouter } from 'next/router'

const url = '/api/providers'

const useProviders = () => {
  const toast = useToast()
  const router = useRouter()

  const newProvider = async (data: Provider) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { body } = await response.json()
    return body
  }

  const deleteProvider = async (id: string) => {
    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({
        id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { body } = await response.json()
    console.log(body)

    if (body === 'success') {
      toast({
        title: 'Cliente eliminado correctamente',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
    }

    router.reload()
  }

  return {
    newProvider,
    deleteProvider
  }
}

export default useProviders
