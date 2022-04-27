export type Sale = {
  id: string
  nit: string
  customerId: string
  saleType: string
  total: number
  createdAt: string
  updatedAt: string
}

export interface SaleList {
  [prop: string]: Sale
}
