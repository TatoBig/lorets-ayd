export type SaleDetail = {
  id: string
  productId: string
  quantity: number
  total: number
  createdAt: string
  updatedAt: string
}

export interface SaleDetailList {
  [prop: string]: SaleDetail
}
