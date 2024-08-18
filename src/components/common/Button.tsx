import React from 'react'

type btnType={
    isdisabled?:boolean,
    text:string,
    onClick?:()=>void
}

const Button = ({isdisabled=false,text,onClick}:btnType) => {
  return (
    <div>
          <button
              disabled={isdisabled}
              onClick={onClick}
              className={`${isdisabled ? "bg-orange-400" : "bg-orange-500 hover:bg-orange-600 "}   text-white px-4 py-2 rounded-md  transition-colors duration-300 w-full  
                  }`}
          >
              {text}
          </button>
    </div>
  )
}

export default Button

// ${ bounce ? 'animate-bounce ease-in-out transition-all' : ''