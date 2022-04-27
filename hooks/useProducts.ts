import { useToast } from '@chakra-ui/react'
import { Product } from 'models/Product'
import { useRouter } from 'next/router'

const url = '/api/products'

const useProducts = () => {
  const toast = useToast()
  const router = useRouter()

  const newProduct = async (data: Product) => {
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

  const deleteProduct = async (id: string) => {
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
        title: 'Producto eliminado correctamente',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
    }

    router.reload()
  }

  const incrementProduct = async (id: string, quantity: string) => {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        quantity
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { body } = await response.json()
    console.log(body)

    if (body === 'success') {
      toast({
        title: 'Producto incrementado correctamente',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
    }
  }

  const decrementProduct = async (id: string, quantity: string) => {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        quantity: parseInt(quantity) * -1
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { body } = await response.json()
    console.log(body)

    if (body === 'success') {
      toast({
        title: 'Producto decrementado correctamente',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
    }
  }

  return {
    newProduct,
    deleteProduct,
    incrementProduct,
    decrementProduct
  }
}

export default useProducts
