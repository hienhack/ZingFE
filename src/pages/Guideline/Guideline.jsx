import React from 'react'
import Sidebar from './Element/Sidebar'
import { Outlet } from 'react-router-dom'
import About from './Element/About'
import Copyright from './Element/Copyright'
import Contact from './Element/Contact'
import SidebarItem from '../../components/Sidebar/SidebarItem'

const Guideline = () => {
  return (
    <div className='w-[1000px] mx-auto  flex pt-[15px]	px-[12px] '>
        <div className='flex flex-col mr-[28px] w-[192px]'>
            <Sidebar />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
    

  )
}

export default Guideline