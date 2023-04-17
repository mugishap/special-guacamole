import React, { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState<"feed" | "people" | "trending">("feed")
  return (
    <div className='bg-white shadow flex items-center justify-around rounded-2xl'>
      {
        ["feed", "people", "trending"].map((item, index) => (

          <div key={index} onClick={() => setActive(item as any)} className={`${active === item ? "bg-slate-100 border-b-2 border-[#0d6efd]" : "bg-white"} rounded w-full py-3 capitalize text-center`}>{item}</div>
        ))
      }
    </div>
  )
}

export default Navbar