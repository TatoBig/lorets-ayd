export type Customer = {
  id: string
  nit: string
  name: string
  phone: string
  address: string
  createdAt: Date
  updatedAt: Date
}

export interface CustomerList {
  [prop: string]: Customer
}
