import React, { useEffect } from 'react'
import { useAppDispatch } from '../../customHooks/hooks'
import { removeItem, updateQuantity } from '../../redux/slices/cartSlice'
import { productType } from './ProductList'
import { useSnackbar } from 'notistack'
import { textMessage } from '../../utils/constants'
import ProductName from '../common/ProductName'
import ProductDecription from '../common/ProductDecription'
import ProductPrice from '../common/ProductPrice'
import DiscountDisplay from '../common/DiscountDisplay'
import ItemQuantity from './ItemQuantity'

type CartItem = {
  item: productType
  quantity: number
}

const CartItemCard = ({ item, quantity }: CartItem) => {

  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar();

  const onIncrease = () => {
    if (quantity >= item.maxQuantity) {
      enqueueSnackbar(textMessage.maxQuantity, { variant: 'warning' })
    }
    dispatch(updateQuantity({ id: item.id, qty: quantity + 1 }))
  }
  const onDecrease = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id: item.id, qty: quantity - 1 }))
    }

  }
  const onRemove = () => {
    dispatch(removeItem({ id: item.id }))
  }

  useEffect(() => {

  }, [quantity])

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 rounded-lg shadow-md mb-4">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-contain md:w-32 md:h-32"
      />
      {/* Product Details */}
      <div className="flex-1 ml-4 md:ml-6">
        <ProductName name={item.name} />
        <ProductDecription description={item.description} />
        <ProductPrice price={item.price} />
        <DiscountDisplay text={`${item.discount}${item.discountType === "percentage" ? "%" : "fixed"} Off | 1 offer applied`} />
      </div>
      {/* Quantity Controls and Remove */}
      <ItemQuantity quantity={quantity} handleAdd={onIncrease} handleDelete={onDecrease} onRemove={onRemove} />
    </div>
  )
}

export default CartItemCard