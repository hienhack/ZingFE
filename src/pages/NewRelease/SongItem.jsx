import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/vi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaPlay } from "react-icons/fa";
// import { setCurrentSongId, setIsPlaying } from '../../redux/actions';
// import { AudioLoading } from '../../assets/icons/dynamicIcons';
import PremiumIcon from '../ZingChart/PremiumIcon';
import { SlOptions } from "react-icons/sl";

export function SongItem({ data }) {
    // const { currentSongId, isPlaying } = useSelector((state) => state.music);
    const dispatch = useDispatch();
    const [showTooltip, setShowTooltip] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    // const handleClickSong = () => {
    //     dispatch(setCurrentSongId(data?.encodeId));
    //     dispatch(setIsPlaying(true));
    // };

    const artistsLength = data?.artists?.length;
    return (
        <div
            // onDoubleClick={handleClickSong}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group w-full md:w-1/2 xl:w-1/3 select-none px-[14px]"
        >
            <div
                className={`p-[10px] gap-[10px] flex rounded-[4px] group hover:bg-[#26202b]`
                // ${
                //     data?.encodeId === currentSongId
                //         ? 'bg-primary-color-8'
                //         : 'hover:bg-primary-color-8'
                // }
                }
            >
                <div 
                // onClick={handleClickSong} 
                className="relative">
                    <div className="w-[60px] h-[60px]">
                        <img
                            className="w-full h-full rounded object-cover group-hover:opacity-40"
                            src={data?.thumbnail}
                            alt={data?.artistsNames}
                        />
                    </div>
                    {/* {data?.encodeId !== currentSongId && ( */}
                        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[4px] bg-overlay-40 cursor-pointer hidden group-hover:block">
                            <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white">
                                <FaPlay size={16} />
                            </span>
                        </div>
                    {/* )} */}
                    {/* {data?.encodeId === currentSongId ? (
                        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[4px] bg-overlay-40 cursor-pointer">
                            <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-text-color-2">
                                {isPlaying ? (
                                    <AudioLoading height={'25'} width={'25'} color={'#FFFFFF'} />
                                ) : (
                                    <FaPlay size={16} />
                                )}
                            </span>
                        </div>
                    ) : (
                        ''
                    )} */}
                </div>
                <div className="flex flex-col justify-between">
                    <div className='flex flex-row'>
                        <span className="text-white text-sm font-semibold">
                            {data?.title.length > 20 ? `${data?.title.slice(0, 20)}...` : data?.title}
                        </span>
                        <span className='flex  ml-1 mt-1'>
                                {data?.streamingStatus === 2 && <PremiumIcon/>}
                        </span>
                    </div>
                    <span className="text-text-color-3 text-xs font-semibold overflow-ellipsis-2-line hover:text-purple-500">
                        {data?.artists?.map((artist, index) => (
                            <Link
                                key={artist?.link}
                                to={artist?.link}
                                className="cursor-pointer hover:underline hover:text-purple-500 text-slate-400"
                            >
                                {index === artistsLength - 1
                                    ? `${artist?.name}`
                                    : `${artist?.name}, `}
                            </Link>
                        ))}
                    </span>
                    <span className="text-slate-500 text-xs font-semibold">
                        {moment(data?.releaseDate * 1000).locale('vi').fromNow()}
                        
                    </span>
                </div>
                <span className="text-xs font-medium leading-5 flex-1 flex justify-end items-center mr-1 text-slate-400">
                {isHovered ? (
                    <div className="flex space-x-2 items-center">
                        
                        <div 
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                            className="relative group flex items-center justify-center w-7 h-7 rounded-full hover:bg-[#403f44]">
                            <div className="absolute  w-8 h-8   transition-all duration-300"></div>
                            <SlOptions size={16} className=" z-10 text-white" />
                            <div
                                
                                className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
                                style={{ opacity: showTooltip ? 1 : 0 }}>
                                Khác
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </span>
            </div>
        </div>
    );
}

// export default SongItem;