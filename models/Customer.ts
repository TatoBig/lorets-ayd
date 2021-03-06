export type Customer = {
  id: string
  nit: string
  name: string
  phone: string
  address: string
  createdAt: string
  updatedAt: string
}

export interface CustomerList {
  [prop: string]: Customer
}
