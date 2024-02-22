export interface Idproduct {
    id: number ,
    name: string ,
    price: number ,
    description: string ,
    image: string ,
    favorite: number ,
    oldprice: number ,
    category: string ,
    discount: number,
    new: string ,
}
export interface discount {
    id: number ,
    name: string ,
    price: number ,
    category: string ,
    oldprice: number ,
    image: string
}
export interface category {
    id: number ,
    name: string ,
    description: string
}