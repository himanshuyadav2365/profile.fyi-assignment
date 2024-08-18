import React from 'react'
import productData from "../../data/products"
import ProductCard from './ProductCard'
import { useAppSelector } from '../../customHooks/hooks'
import { getCartItems } from '../../redux/slices/cartSlice'

export type productType = {
    id: number,
    name: string,
    image: string,
    price: number,
    description:string,
    discount:number,
    discountType:"percentage" |"fixed",
    maxQuantity:number
}

const ProductList = () => {
    const cartItems = useAppSelector(getCartItems)

    const isIteminCart = (p_id: number) => {
        let bool = false
        cartItems.forEach((item) => {
            if (item.id === p_id) {
                bool = true
            }
        })
        return bool
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto p-2 shadow-md">
            {productData.map((item: productType) => {
                let disable = isIteminCart(item.id)
                return <ProductCard
                    key={item.id}
                    item={item}
                    disable={disable}
                />
            })}
        </div>
    )
}

export default ProductList