export type User = {
  id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface UserList {
  [prop: string]: User
}
