import { useToast } from '@chakra-ui/react'
import { ProductList } from 'models/Product'
import { generateId } from 'pages/api/utils'
import useSaleDetails from './useSaleDetails'

const url = '/api/sales'

const useSales = () => {
  const { newSaleDetail } = useSaleDetails()
  const toast = useToast()

  const newSale = async (data: any, products: ProductList, saleLength: number) => {
    if (saleLength > 0) {
      try {
        console.log(data)

        const details = []
        const saleId = generateId()

        for (let i = 0; i < saleLength; i++) {
          if (data[`quantity${i}`] > products[data[`productId${i}`]].stock) {
            throw new Error('error')
          }

          details.push({
            total: products[data[`productId${i}`]].price * data[`quantity${i}`],
            productId: data[`productId${i}`],
            quantity: data[`quantity${i}`],
            saleId
          })
        }

        const saleTotal = details.reduce(
          (prev, curr) => prev + curr.total, 0
        )

        details.forEach(detail => {
          newSaleDetail(detail)
        })

        const newSale = {
          nit: data.nit,
          providerId: data.providerId,
          total: saleTotal,
          id: saleId
        }

        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(newSale),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const { body } = await response.json()
        return body
      } catch (error: any) {
        toast({
          title: 'No es hay suficientes unidades del producto en el inventario',
          status: error.message,
          duration: 2000
        })
      }
    } else {
      return 'error'
    }
  }

  return {
    newSale
  }
}

export default useSales
