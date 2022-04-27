export type Provider = {
  id: string
  nit: string
  name: string
  phone: string
  address: string
  createdAt: string
  updatedAt: string
}

export interface ProviderList {
  [prop: string]: Provider
}
