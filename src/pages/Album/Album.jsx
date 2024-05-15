/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import playlistDetail from './album.json';
import { AlbumPlaylist } from '.';
import { BsPlayCircle } from 'react-icons/bs';
import { SlOptions } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { FaPlay } from 'react-icons/fa';


function likesDisplay(likes) {
    // Check if the likes count is less than 1000
    if (likes < 1000) {
        return `${likes} người yêu thích`;  // Display the actual number of likes
    } else {
        // Calculate the number in thousands and append 'K'
        return `${Math.round(likes / 1000)}K người yêu thích`;
    }
}


function Album() {
    const imgRef = useRef('');

    const [isHovered, setIsHovered] = useState(false);
    const [showTooltip1, setShowTooltip1] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);

    const handleMouseEnter = () => {
        imgRef.current.classList.remove('animate-scale-down-image');
        imgRef.current.classList.remove('animate-rotate-center-pause');
        imgRef.current.classList.add('animate-scale-up-image');
    };

    const handleMouseLeave = () => {
        imgRef.current.classList.remove('animate-scale-up-image');
        imgRef.current.classList.add('animate-scale-down-image');
    };
    
    const artistsLength = playlistDetail?.artists?.length;

    return (
        <div className='flex relative gap-8 h-100vh px-[59px] pt-10 mt-[70px] w-full h-[calc(100vh-160px)] overflow-x-hidden overflow-y-auto overflow-y-overlay scrollbar justify-center'>
            {/* {isLoading && (
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#180c24] z-20">
                    <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
                        <RotatingLinesLoading height={'50'} width={'50'} color={'#FFFFFF'} />
                    </div>
                </div>
            )} */}
            {playlistDetail.artistsNames && (
                <div className='flex-none max-w-[300px] flex-col '>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className='w-full relative overflow-hidden rounded-lg'
                    >
                        <div className='w-[300px] h-[300px] relative group'>
                            <div className='w-full h-full'>
                                <img
                                    ref={imgRef}
                                    className='w-full h-full object-cover shadow-lg cursor-pointer rounded-lg animate-rotate-center group-hover:brightness-50'
                                    src={playlistDetail?.thumbnailM || `https://avatar.talk.zdn.vn/default.jpg`}
                                    alt={playlistDetail?.artistsNames}
                                />
                            </div>
                            <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[4px] bg-overlay-40 cursor-pointer hidden group-hover:block">
                                <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white hover:text-gray-300">
                                    <BsPlayCircle size={40} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-center mt-3'>
                        <h3 className="text-[#FFFFFF] text-xl font-bold select-none truncate">
                            {playlistDetail?.title}
                        </h3>
                        {playlistDetail?.releasedAt === 0 ? (
                            <>
                                <span className="text-[#FFFFFF80] text-xs leading-5 select-none">
                                    {`Cập nhật: ${moment.unix(playlistDetail?.contentLastUpdate).format('DD/MM/YYYY')}`}
                                </span>
                                <span className="text-[#FFFFFF80] text-xs font-medium overflow-ellipsis-2-line">
                                    {playlistDetail?.artists?.map((artist, index) => (
                                        <Link
                                            key={artist?.link}
                                            to={artist?.link}
                                            className="cursor-pointer hover:underline hover:text-purple-500"
                                        >
                                            {index === artistsLength - 1 ? `${artist?.name}` : `${artist?.name}, `}
                                        </Link>
                                    ))}
                                </span>
                            </>
                                ) : (
                                    <span className="text-[#FFFFFF80] text-xs font-medium overflow-ellipsis-2-line pt-1">
                                        {playlistDetail?.artists?.map((artist, index) => (
                                            <Link
                                                key={artist?.link}
                                                to={artist?.link}
                                                className="cursor-pointer hover:underline hover:text-purple-500"
                                            >
                                                {index === artistsLength - 1 ? `${artist?.name}` : `${artist?.name}, `}
                                            </Link>
                                        ))}
                                        &nbsp;&middot;&nbsp;
                                        {`${moment.unix(playlistDetail?.contentLastUpdate).format('YYYY')}`}
                                    </span>
                                )}
                        <span className="text-[#FFFFFF80] text-xs leading-5 select-none pt-0.5">
                            {likesDisplay(playlistDetail?.like)}
                        </span>
                    </div>
                    <div className={playlistDetail?.objectType ? 'pl-20' : (playlistDetail?.releasedAt === 0 ? 'pl-16' : 'pl-20')}>
                        <span className=" py-2.5 cursor-pointer px-5 leading-[14px] mb-5 mt-[15px] inline-flex items-center justify-center outline-none text-center rounded-full border text-white text-xs border-purple-500 font-medium bg-purple-500 hover:text-[#DADADA] hover:bg-purple-600">
                            <span className="mr-1">
                                <FaPlay size={15} />
                            </span>
                            <span className='text-[13px]'>
                                {playlistDetail?.objectType 
                                    ? 'PHÁT BÀI HÁT' 
                                    : playlistDetail?.releasedAt === 0 
                                        ? 'PHÁT NGẪU NHIÊN' 
                                        : 'PHÁT TẤT CẢ'
                                }
                            </span>
                        </span>
                    </div>
                    <div className='flex flex-row space-x-4 justify-center'>
                        <div
                            onMouseEnter={() => setShowTooltip1(true)}
                            onMouseLeave={() => setShowTooltip1(false)}
                            className="relative group flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#272329] bg-[#2c252e]"
                        >
                            <FaRegHeart size={16} className="z-10 text-white" />
                            <div
                                className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
                                style={{ opacity: showTooltip1 ? 1 : 0 }}
                            >
                                Thêm vào thư viện
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
                            </div>
                        </div>
                        <div
                            onMouseEnter={() => setShowTooltip2(true)}
                            onMouseLeave={() => setShowTooltip2(false)}
                            className="relative group flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#272329] bg-[#2c252e]"
                        >
                            <SlOptions size={16} className="z-10 text-white" />
                            <div
                                className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
                                style={{ opacity: showTooltip2 ? 1 : 0 }}
                            >
                                Khác
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {playlistDetail.artistsNames && (
                <div className="flex-auto flex flex-col">
                    {playlistDetail?.sortDescription && (
                        <div className="mb-[10px]">
                            <span className="text-[#FFFFFF80] text-sm leading-5">Lời tựa{' '}</span>
                            <span className="text-[#FFFFFF] text-sm leading-5 font-medium">
                                {playlistDetail?.sortDescription}
                            </span>
                        </div>
                    )}
                    {playlistDetail?.objectType ? (
                        <AlbumPlaylist 
                            songs={playlistDetail} 
                            cont={playlistDetail?.releasedAt} 
                            type={playlistDetail?.objectType} 
                        />
                    ) : (
                        <AlbumPlaylist 
                            songs={playlistDetail?.song} 
                            cont={playlistDetail?.releasedAt} 
                            type={playlistDetail?.objectType} 
                        />
                    )}
                    
                </div>
            )}
            
        </div>
    );
}

export default Album;
