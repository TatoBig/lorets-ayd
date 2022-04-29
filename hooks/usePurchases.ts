import { ProductList } from 'models/Product'
import { generateId } from 'pages/api/utils'
import usePurchaseDetails from './usePurchaseDetails'

const url = '/api/purchases'

const usePurchases = () => {
  const { newPurchaseDetail } = usePurchaseDetails()

  const newPurchase = async (data: any, products: ProductList, purchaseLength: number) => {
    if (purchaseLength > 0) {
      console.log(data)

      const details = []
      const purchaseId = generateId()

      for (let i = 0; i < purchaseLength; i++) {
        details.push({
          total: products[data[`productId${i}`]].price * data[`quantity${i}`],
          productId: data[`productId${i}`],
          quantity: data[`quantity${i}`],
          purchaseId
        })
      }

      const purchaseTotal = details.reduce(
        (prev, curr) => prev + curr.total, 0
      )

      details.forEach(detail => {
        newPurchaseDetail(detail)
      })

      const newPurchase = {
        nit: data.nit,
        providerId: data.providerId,
        total: purchaseTotal,
        id: purchaseId
      }

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newPurchase),
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
    newPurchase
  }
}

export default usePurchases
