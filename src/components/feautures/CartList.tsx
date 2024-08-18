import { useAppSelector } from '../../customHooks/hooks'
import { getCartItems } from '../../redux/slices/cartSlice'
import CartItemCard from './CartItemCard'


const CartList = () => {

    let cartItems = useAppSelector(getCartItems)

    return (
        <div className="flex flex-col space-y-4">
            {cartItems.map((item) => (
                <CartItemCard key={item.id} item={item} quantity={item.quantity}/>
            ))}
        </div>
        )
    
}

export default CartList