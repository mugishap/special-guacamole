import React from 'react'
import { BsSearch } from 'react-icons/bs'

const RightSidebar = () => {
  return (
    <div className='w-3/12 flex flex-col'>
        <div className='bg-white rounded-2xl px-6 py-3 p-2 flex items-center'>
          <BsSearch color='blue' size={20}  />
          <input type="text" className='outline-none bg-inherit w-4/5 px-3' placeholder='Search anything'/>
        </div>
    </div>
  )
}

export default RightSidebar