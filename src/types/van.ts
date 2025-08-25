export interface Van {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: "simple" | "rugged" | "luxury"
}
