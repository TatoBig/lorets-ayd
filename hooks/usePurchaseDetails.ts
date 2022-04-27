import useProducts from './useProducts'

const url = '/api/purchaseDetails'

const usePurchaseDetails = () => {
  const { incrementProduct } = useProducts()
  const newPurchaseDetail = async (data: any) => {
    await incrementProduct(data.productId, data.quantity)

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

  return {
    newPurchaseDetail
  }
}

export default usePurchaseDetails
