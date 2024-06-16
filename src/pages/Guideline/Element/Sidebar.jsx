


import { NavLink } from 'react-router-dom'

const notActiveStyle = 'w-[192px] py-[15px] px-[20px] font-bold flex gap-[12px] items-center text-[16px] text-[#32323d] font-roboto'
const activeStyle = 'w-[192px] py-[8px] px-[20px] font-bold flex gap-[12px] items-center text-[16px] text-[#a845de] bg-[#ecf0f1] '

const element = [
    {
        path: 'about',
        text: 'GIỚI THIỆU',
        end: true

    },
    {
        path: 'copyright',
        text: 'BẢN QUYỀN',

    },
    {
        path: 'ad',
        text: 'QUẢNG CÁO',

    },
    {
        path: 'recruitment',
        text: 'TUYỂN DỤNG',

    },
    {
        path: 'contact',
        text: 'LIÊN HỆ',
        
    }
] 

const Sidebar= () => {
    return (
        <div className='bg-gray-100 flex flex-col'>
            
            <div className='flex flex-col bg-white w-[222px] '>

                {
                    element.map(item => (
                        <NavLink to={item.path}
                            key={item.path}
                            end={item.end}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                            
                            <span className='h-[21px]'>{item.text}</span>
                        </NavLink>
                    ))}





            </div>
        </div>
    )
}

export default Sidebar