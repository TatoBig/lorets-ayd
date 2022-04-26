import { Customer } from 'models/Customer'

const url = '/api/customer'

const useCustomers = () => {
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
  return {
    newCustomer
  }
}

export default useCustomers
