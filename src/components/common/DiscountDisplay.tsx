import React from 'react'

type disCountDisplay={
    text:string |number
}
const DiscountDisplay = ({text}:disCountDisplay) => {
  return (
    <div>
          <p className="text-sm text-green-600 ">{text}</p>
    </div>
  )
}

export default DiscountDisplay