import { productType } from "../feautures/ProductList"

type productDecription = Pick<productType,"description">

const ProductDecription = ({description}:productDecription) => {
    return (
    <div className="text-gray-400 text-sm">
        <p>{description}</p>
    </div>
  )
}

export default ProductDecription