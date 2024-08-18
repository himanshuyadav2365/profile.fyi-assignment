import { productType } from '../feautures/ProductList'

type productPrice = Pick<productType, "price">

const ProductPrice = ({price}:productPrice) => {
  return (
    <div>
          <p className="text-gray-800 text-xl font-bold">₹{price.toFixed(2)}</p> 
    </div>
  )
}

export default ProductPrice