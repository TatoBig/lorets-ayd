import { useToast } from '@chakra-ui/react'
import { Customer } from 'models/Customer'
import { useRouter } from 'next/router'

const url = '/api/customers'

const useCustomers = () => {
  const toast = useToast()
  const router = useRouter()

  const newCustomer = async (data: Customer) => {
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

  const deleteCustomer = async (id: string) => {
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
    newCustomer,
    deleteCustomer
  }
}

export default useCustomers
