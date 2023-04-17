import React from 'react'
import LeftSidebar from '../Sidebars/LeftSidebar'
import RightSidebar from '../Sidebars/RightSidebar'
import Navbar from '../Navbar'

interface Props {
    children?: React.ReactNode
}

const CommonComponent: React.FC<Props> = ({ children }) => {
    return (
        <div className='w-full min-h-screen bg-[#edf2f6]'>
            <div className='flex justify-center pt-16 items-start w-full h-full'>
                <LeftSidebar />
                <div className='w-5/12 px-4 flex h-full justify-start flex-col'>
                    <Navbar />
                    <div>
                        {children}
                    </div>
                </div>
                <RightSidebar />
            </div>
        </div>
    )
}

export default CommonComponent