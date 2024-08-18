import React, { useState } from 'react';
import { cartItem, getCartItems } from '../../redux/slices/cartSlice';
import { useAppSelector } from '../../customHooks/hooks';
import { constanValue } from '../../utils/constants';
import DiscountDisplay from '../common/DiscountDisplay';

const CartSummary = () => {
  const items = useAppSelector(getCartItems);


  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDiscount = (total: number, item: cartItem) => {

    if (item.discountType === 'fixed') {
      return total + item.discount;
    }

    else {
      return total + (item.price * item.quantity * item.discount) / 100;
    }

  };

  const subtotal = Math.round(calculateSubtotal());
  const discountAmount = Math.floor(items.reduce(calculateDiscount, 0));
  const total = subtotal - discountAmount;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md  mx-auto ">
      <h2 className="text-lg font-bold">PRICE DETAILS</h2>
      <div className="flex justify-between mt-2">
        <span>Price ({items.length} items)</span>
        <span>₹{subtotal}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Discount</span>
        <DiscountDisplay text={`₹ ${discountAmount}`} />
      </div>
      <div className="flex justify-between mt-2">
        <span>Platform Fee</span>
        <span>₹0</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Delivery Charges</span>
        <DiscountDisplay text={total < 100 ? `₹${constanValue.delivery_charges}` : 'Free'} />
      </div>
      <hr className="my-4" />
      <div className="flex justify-between font-bold">
        <span>Total Amount</span>
        <span>₹{total < 100 ? total + constanValue.delivery_charges : total}</span>
      </div>
      <DiscountDisplay text={`You will save ₹${discountAmount} on this order`} />
    </div>

  );
};

export default CartSummary;
