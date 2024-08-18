import React from 'react'
import { icons } from '../../utils/assets'
import { textMessage } from '../../utils/constants'

const SeachBar = ({ placeholder = textMessage.searchbarPlaceholder }: { placeholder?: string }) => {
    return (
        <div className="flex md:flex-1 md:ml-10 md:mr-4">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full flex-grow py-2 px-2 md:px-4 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 rounded-r-md w-auto ">
                {icons.search}
            </button>
        </div>
    )
}

export default SeachBar