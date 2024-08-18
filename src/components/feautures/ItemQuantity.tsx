
const ItemQuantity = ({quantity,handleAdd,handleDelete,onRemove}:any) => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
      <div className="flex items-center">
        <button
          className="px-3 py-1 bg-gray-200 disabled:bg-gray-200 hover:bg-gray-300 rounded-full"
          onClick={handleDelete}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          className="px-3 py-1 bg-gray-200 disabled:bg-gray-200 hover:bg-gray-300  rounded-full"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <button
        className="text-sm text-black hover:text-red-800 ml-4 md:ml-6 mt-2 md:mt-0"
        onClick={onRemove}
      >
        REMOVE
      </button>
    </div>
  )
}

export default ItemQuantity