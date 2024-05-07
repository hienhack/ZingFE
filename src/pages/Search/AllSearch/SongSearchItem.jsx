import { memo,useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SlOptions } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";


import { FaPlay } from 'react-icons/fa';

function SongSearchItem({ data }) {
    
    const artistsLength = data?.artists?.length;

    const [isHovered, setIsHovered] = useState(false);
    const [showTooltip1, setShowTooltip1] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);

    return (
        <div
            // onDoubleClick={handleClickSong}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-[90%] mb-2 md:w-[45%] md:mb-2 lg:w-[30%] lg:mb-0 select-none flex-auto p-[10px] gap-4 flex rounded-[4px] group bg-[#FEFFFF0D] hover:bg-[hsla(0,0%,80%,0.1)]"
        >
            <div 
                // onClick={handleClickSong} 
                className="relative">
                <div className="w-[84px] h-[84px]">
                    <img
                        className=" w-full h-full rounded object-cover group-hover:brightness-50"
                        src={data?.thumbnail}
                        alt={data?.artistsNames}
                    />
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[4px] bg-overlay-40 cursor-pointer hidden group-hover:block">
                        <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white">
                            <FaPlay size={16} />
                        </span>
                </div>
                
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-[#FFFFFF80] text-xs font-normal mb-1.5">Bài hát</span>
                <span className="text-white text-sm font-extrabold mb-0.5 overflow-ellipsis-2-line">
                    {data?.title}
                </span>
                <span className="text-[#FFFFFF80] text-xs font-normal overflow-ellipsis-2-line">
                    {data?.artists?.map((artist, index) => (
                        <Link
                            key={artist?.link}
                            to={artist?.link}
                            className="cursor-pointer hover:underline hover:text-purple-500"
                        >
                            {index === artistsLength - 1 ? `${artist?.name}` : `${artist?.name}, `}
                        </Link>
                    ))}
                </span>
            </div>
            <span className="text-xs font-medium leading-5 flex-1 flex justify-end items-center mr-1 text-slate-400">
                {isHovered ? (
                    <div className="flex space-x-2 items-center">
                        <div 
                            onMouseEnter={() => setShowTooltip1(true)}
                            onMouseLeave={() => setShowTooltip1(false)}
                            className="relative group flex items-center justify-center w-7 h-7 rounded-full hover:bg-[rgba(72,60,76,1)]">
                            <div className="absolute  w-8 h-8   transition-all duration-300"></div>
                            <FaRegHeart size={16} className=" z-10 text-white" />
                            
                            <div
                                
                                className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
                                style={{ opacity: showTooltip1 ? 1 : 0 }}>
                                Phát cùng lời bài hát
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
                            </div>

                        </div>
                        <div 
                            onMouseEnter={() => setShowTooltip2(true)}
                            onMouseLeave={() => setShowTooltip2(false)}
                            className="relative group flex items-center justify-center w-7 h-7 rounded-full hover:bg-[rgba(72,60,76,1)]">
                            <div className="absolute  w-8 h-8   transition-all duration-300"></div>
                            <SlOptions size={16} className=" z-10 text-white" />
                            
                            <div
                                
                                className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
                                style={{ opacity: showTooltip2 ? 1 : 0 }}>
                                Khác
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
                            </div>

                        </div>
                    </div>
                ) : (
                    ''
                )}
            </span>
        </div>
    );
}

export default memo(SongSearchItem);