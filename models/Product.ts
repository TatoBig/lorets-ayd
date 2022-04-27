export type Product = {
  id: string
  name: string
  stock: number
  price: number
  createdAt: string
  updatedAt: string
}

export interface ProductList {
  [prop: string]: Product
}
