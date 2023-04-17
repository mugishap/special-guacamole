import React from 'react'
import LeftSidebar from '../Sidebars/LeftSidebar'
import RightSidebar from '../Sidebars/RightSidebar'

interface Props {
    children?: React.ReactNode
}

const CommonComponent: React.FC<Props> = ({ children }) => {
    return (
        <div className='w-full min-h-screen'>
            <div className='flex justify-center items-center w-full'>
                <LeftSidebar />
                <div className='w-5/12'>
                    {children}
                </div>
                <RightSidebar />
            </div>
        </div>
    )
}

export default CommonComponent