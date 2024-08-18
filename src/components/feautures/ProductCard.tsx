import React, { useState } from 'react'
import { useAppDispatch } from '../../customHooks/hooks'
import { addItem } from '../../redux/slices/cartSlice'
import ProductName from '../common/ProductName'
import ProductDecription from '../common/ProductDecription'
import ProductPrice from '../common/ProductPrice'
import { productType } from './ProductList'
import Button from '../common/Button'

type productCard={
  item:productType,
  disable:boolean
}
const ProductCard = ({item,disable}: productCard) => {
  const dispatch = useAppDispatch()
  // const [addedToCart, setAddedToCart] = useState(false);
  const [hover, setHover] = useState(false)
  // const [bounce,setBounce]=useState(false)

  const addToCart = () => {
    // setAddedToCart(true)
    dispatch(addItem({ ...item,quantity:1}))
    // setTimeout(() => setAddedToCart(false), 500);
  }

  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col items-center space-y-4 relative pb-16"
      onMouseEnter={() => {setHover(true) 
        // setBounce(true)
      // setTimeout(()=>setBounce(false),500) 
      }
      }
      onMouseLeave={() => setHover(false)}
    >
      <img src={item.image} alt={item.name} className="w-full h-96 object-contain rounded-md" />
      <div className=' items-center justify-between w-full p-1 '>
        <ProductName name={item.name}/>
        <ProductDecription description={item.description}/>
        <ProductPrice price={item.price}/>
      </div>
      <div
        className={`absolute -bottom-0 overflow-hidden left-0 right-0 transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'
          } pb-4 px-2 w-full`}
      >
        <Button  onClick={addToCart} isdisabled={disable} text='Add to cart'/>
      </div>
    </div>
  )
}

export default ProductCard