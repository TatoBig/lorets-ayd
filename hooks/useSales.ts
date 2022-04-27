import { ProductList } from 'models/Product'
import useSaleDetails from './useSaleDetails'

const url = '/api/sales'

const useSales = () => {
  const { newSaleDetail } = useSaleDetails()

  const newSale = async (data: any, products: ProductList, saleLength: number) => {
    if (saleLength > 0) {
      console.log(data)

      const details = []
      for (let i = 0; i < saleLength; i++) {
        details.push({
          total: products[data[`productId${i}`]].price * data[`quantity${i}`],
          productId: data[`productId${i}`],
          quantity: data[`quantity${i}`]
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
        total: saleTotal
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
    } else {
      return 'error'
    }
  }

  return {
    newSale
  }
}

export default useSales
