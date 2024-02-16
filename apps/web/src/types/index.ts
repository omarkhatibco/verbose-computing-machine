export type Forcast = {
  forecasted_sales: number
  createdAt: string
  updatedAt: string
  id: number
  location: string
  date: string
}

export type Inventory = {
  quantity: number | null
  createdAt: string
  updatedAt: string
  id: number
  location: string
  date: string
  currentStock: number
  incomingStock: number
  productName: string
}
