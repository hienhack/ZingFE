import { memo, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { LiaMicrophoneAltSolid } from 'react-icons/lia';



import { FaPlay } from 'react-icons/fa';

function SongSearchItem({ songInfo }) {
   
   

    const [isHovered, setIsHovered] = useState(false);
    const artistsLength = songInfo?.artists?.length;

    const [showTooltip1, setShowTooltip1] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);
    const [showTooltip3, setShowTooltip3] = useState(false);

    return (
        <div
            // onDoubleClick={handleClickSong}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex justify-between select-none text-[#FFFFFF80] p-[10px] border-b-[1px] border-gray-900 rounded-[4px] group bg-[#180c24] hover:bg-[rgba(48,36,60,0.9)]`
            // ${
            //     songInfo?.encodeId === currentSongId
            //         ? 'bg-primary-color-8'
            //         : 'hover:bg-primary-color-8'
            // }`
        }
        >
            <div className="flex items-center flex-5">
                <div className="relative cursor-pointer mr-[10px]" /*onClick={handleClickSong}*/
                
                >
                    <div className="w-10 h-10">
                        <img
                            className="w-full h-full rounded-[4px] object-cover group-hover:opacity-30"
                            src={songInfo.thumbnail}
                            alt={songInfo.title}
                        />
                    </div>
                    <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white cursor-pointer hidden group-hover:block">
                            <FaPlay size={16} />
                    </span>
                    
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold leading-5 text-white">
                        {songInfo?.title.length > 30
                            ? `${songInfo?.title.slice(0, 30)}...`
                            : songInfo?.title}
                    </span>
                    <h3 className="text-xs font-medium leading-5 overflow-ellipsis-2-line">
                        {songInfo?.artists?.map((artist, index) => (
                            <Link
                                key={artist?.link}
                                to={artist?.link}
                                className="cursor-pointer hover:underline hover:text-purple-500"
                            >
                                {index === artistsLength - 1
                                    ? `${artist?.name}`
                                    : `${artist?.name}, `}
                            </Link>
                        ))}
                    </h3>
                </div>
            </div>
            <span className="text-xs font-medium leading-5 flex-4 hidden md:flex items-center">
                <Link
                    to={songInfo?.album?.link}
                    className="cursor-pointer hover:underline hover:text-purple-500"
                >
                    {songInfo?.album?.title.length > 35
                        ? `${songInfo?.album?.title.slice(0, 35)}...`
                        : songInfo?.album?.title}
                </Link>
            </span>
            <span className="text-xs font-medium leading-5 flex-1 flex justify-end items-center mr-1 text-slate-400">
                {isHovered ? (
                    <div className="flex space-x-4 items-center">
                        <div 
                            onMouseEnter={() => setShowTooltip1(true)}
                            onMouseLeave={() => setShowTooltip1(false)}
                            className="relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(72,60,76,1)]">
                            <div className="absolute  w-8 h-8   transition-all duration-300"></div>
                            <LiaMicrophoneAltSolid size={16} className=" z-10 text-white" />
                            {/* <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 min-w-[8rem] max-w-xs px-2 py-1 bg-[rgba(48,36,60,0.9)] text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                Phát cùng lời bài hát
                            </span> */}
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
                            className="relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(72,60,76,1)]">
                            <div className="absolute  w-8 h-8   transition-all duration-300"></div>
                            <FaRegHeart size={16} className=" z-10 text-white" />
                            {/* <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 min-w-[8rem] max-w-xs px-2 py-1 bg-[rgba(48,36,60,0.9)] text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                Thêm vào thư viện
                            </span> */}
                            <div
                                
                                className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
                                style={{ opacity: showTooltip2 ? 1 : 0 }}>
                                Thêm vào thư viện
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
                            </div>
                        </div>
                        <div 
                            onMouseEnter={() => setShowTooltip3(true)}
                            onMouseLeave={() => setShowTooltip3(false)}
                            className="relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(72,60,76,1)]">
                            <div className="absolute  w-8 h-8   transition-all duration-3000"></div>
                            <SlOptions size={16} className=" z-10 text-white" />
                            {/* <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 min-w-[1rem] max-w-xs px-2 py-1 bg-[rgba(48,36,60,0.9)] text-white text-xs rounded opacity-0  group-hover:opacity-100 whitespace-nowrap">
                                Khác
                            </span> */}
                            <div
                                
                                className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
                                style={{ opacity: showTooltip3 ? 1 : 0 }}>
                                Khác
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    moment.utc(songInfo?.duration * 1000).format('mm:ss')
                )}
            </span>
        </div>
    );
}

export default memo(SongSearchItem);