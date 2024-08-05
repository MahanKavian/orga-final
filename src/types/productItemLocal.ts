export interface ProductItem {
    productId: number,
    title: string,
    price: number,
    sale_price?: number
    img?: string,
    quantity: number
}