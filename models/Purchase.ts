export type Purchase = {
  id: string
  nit: string
  providerId: string
  total: number
  createdAt: string
  updatedAt: string
}

export interface PurchaseList {
  [prop: string]: Purchase
}
