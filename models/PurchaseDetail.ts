export type PurchaseDetail = {
  id: string
  productId: string
  quantity: number
  total: number
  createdAt: string
  updatedAt: string
}

export interface PurchaseDetailList {
  [prop: string]: PurchaseDetail
}
