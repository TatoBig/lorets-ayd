import useProducts from './useProducts'

const url = '/api/saleDetails'

const useSaleDetails = () => {
  const { decrementProduct } = useProducts()
  const newSaleDetail = async (data: any) => {
    await decrementProduct(data.productId, data.quantity)

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
    newSaleDetail
  }
}

export default useSaleDetails
