import React from 'react'
import { FaTractor } from 'react-icons/fa'

function IconPriceTitleGenerator({data,Icon}) {
  return (
        <div className='flex px-10  md:m-0 '>
          <div className="flex justify-center items-center w-12">
          <Icon className="text-[#810102]" size={50}/>
          </div>
          <div className="flex-col pl-3">
            <h1 className='font-bold text-xl font-sans'>{data.price}</h1>
            <p className='font-[roboto condenced] leading-2 tracking-wide'>{data.title}</p>
          </div>
        </div>
      
  )
}

export default IconPriceTitleGenerator