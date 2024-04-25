/*
import React from 'react'
import moment from 'moment'


export const SongItem = ({ thumbnail, title, artists, sid, releaseDate, order, percent }) => {
    console.log({ order, percent });
    return (
        <div
            className={`w-full flex p-[10px] gap-[10px] justify-between items-center rounded-md cursor-pointer ${order ? 'text-white bg-[hsla(0,0%,100%,.07)] hover:bg-[#945EA7]' : 'text-black hover:bg-main-200'}`}
        >
            <div className='flex gap-4'>
                {order && <span className={`${order === 1 ? '' : ''} text-white drop-shadow-md text-[32px] m-auto`}>{order}</span>}
                <img src={thumbnail} alt="thumbnail" className='w-[60px] h-[60px] object-cover rounded-md' />
                <div className='flex flex-col'>
                    <span className='text-sm font-semibold'>{title}</span>
                    <span className='text-xs opacity-70'>{artists}</span>
                    <span className='text-xs opacity-70'>{releaseDate}</span>
                </div>
            </div>
            {percent && <span>{`${percent}%`}</span>}
        </div>
    )
}
//default memo(SongItem)

*/