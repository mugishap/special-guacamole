import React from 'react'
import { Logo } from '../../assets'
import { ISidebarLink } from '../../types'
import { sidebarLinks } from '../../constants'
import { Link } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'

const LeftSidebar: React.FC = ({ }) => {
  const [active, setActive] = React.useState<"feed" | "profile" | "explore" | "language" | "logout" | "pages" | "pages" | "trending">("feed")
  return (
    <div className='w-3/12 flex flex-col justify-center'>
      <div className='w-flex pl-20'>
        <img src={Logo} className='w-12 mb-6' alt="" />
      </div>
      {
        sidebarLinks.map((link: ISidebarLink, index: number) => (
          <Link to={link.path} key={index} className='w-full duration-0 '>
            <div onClick={() => setActive(link.name)} className={`relative flex duration-0 w-7/12 py-3 my-2 m-auto hover:text-black items-center text-slate-600 px-4 rounded hover:bg-white ${active === link.name && "bg-white"}`}>
              <link.icon size={20} />
              <span className='ml-2 capitalize'>{link.name}</span>
              {link.hasSubmenu && (<BsChevronDown className='absolute right-2' />)}
            </div>
          </Link>
        ))
      }
      <button className='mt-6 bg-[#0d6efd] w-7/12 m-auto text-white px-5 py-3 rounded-xl cursor-pointer'>
        SIGN IN
      </button>
    </div>
  )
}

export default LeftSidebar