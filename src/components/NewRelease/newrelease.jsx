import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SongItem } from '../SongItem/songitems'
import DataNewReLease from './data.json'
import classNames from 'classnames'
export const NewRelease = () => {
    const [isActived, setIsActived] = useState(0)
    const [songs, setSongs] = useState([])
/*
    useEffect(() => {
        isActived ? setSongs(DataNewReLease?.isWorldWide?.vPop) : setSongs(DataNewReLease?.isWorldWide?.others)
    }, [isActived, DataNewReLease])
*/
    return (
        <div></div>
/*
        <div className='mt-12 px-[59px] flex flex-col gap-5'>

            <div className='flex items-center justify-between'>

                <h3 className='text-[20px] font-bold'>{DataNewReLease?.title}</h3>
                <span className='text-xs'>TẤT CẢ</span>
            </div>
            <div className='flex items-center gap-5 text-xs'>
                <button
                    type='button'
                    onClick={() => setIsActived(0)}
                    className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${isActived === 0 && 'bg-main-500 text-white'}`}
                >
                    VIỆT NAM
                </button>
                <button
                    type='button'
                    onClick={() => setIsActived(1)}
                    className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${isActived === 1 && 'bg-main-500 text-white'}`}
                >
                    QUỐC TẾ
                </button>
            </div>
            <div className='flex flex-wrap w-full justify-between'>
                {songs?.map(item => (
                    <SongItem
                        key={item.encodeId}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        artists={item.artistsNames}
                        releaseDate={item.releaseDate}
                        sid={item.encodeId}
                    />
                ))}
            </div>

        </div>
*/
    )
}
 