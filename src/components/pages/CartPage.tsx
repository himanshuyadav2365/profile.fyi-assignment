import React from 'react'
import Header from '../feautures/Header'
import CartList from '../feautures/CartList'
import CartSummary from '../feautures/Summary'
// import PlaceOrderButton from '../feautures/PlaceOrderBtn'
import { useAppSelector } from '../../customHooks/hooks'
import { getCartItems } from '../../redux/slices/cartSlice'
import Button from '../common/Button'

const CartPage = () => {
    let cartItems = useAppSelector(getCartItems)
    console.log(cartItems)
    return (
        <>
        <Header />
            <div className="container p-4 flex flex-col md:flex-row ">
            {cartItems.length === 0?(<div>
                    <p>Your cart is empty! Explore our wide selection and find something you like</p>
                </div>):(<>
                <div className="flex relative flex-col md:w-2/3 shadow-md ">
                <CartList />
                {/* <PlaceOrderButton /> */}
                <div className="w-full right-0 fixed bottom-0  bg-white p-4 shadow-lg">
                    <Button text='Place Order' />
                </div>
                </div>
                <div className="md:w-1/3 md:ml-4  md:fixed max-h-screen right-8 md:mx-4">
                <CartSummary/>
                </div></>
            )}
            </div>
        </>
    )
}

export default CartPage