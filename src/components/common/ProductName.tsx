import { productType } from "../feautures/ProductList"

type productName = Pick<productType, "name">

const ProductName = ({name}:productName) => {
  return (
    <div className="mx-auto">
          <h2 className="text-lg font-normal text-gray-800">{name}</h2>
    </div>
  )
}

export default ProductName