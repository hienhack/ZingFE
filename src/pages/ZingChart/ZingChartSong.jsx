import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
// import { setCurrSongId } from '../../../store/actions';
import { FiTriangle } from "react-icons/fi";
import { TbTriangleInverted } from "react-icons/tb";


function createIcon(Icon, label, tooltipText) {
    return (
        <div className="relative group">
            <div className="absolute inset-0 bg-white bg-opacity-30 rounded-full scale-0 group-hover:scale-100 transition-all duration-300"></div>
            <Icon size={16} className="relative z-10 text-text-color-2" />
            <div className="absolute -top-10 w-auto p-2 text-sm text-white bg-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                {tooltipText}
            </div>
        </div>
    );
}



function ZingChartSong({ songInfo, index = "Gợi ý" }) {
    // const { currentSongId } = useSelector((state) => state.music);
    const dispatch = useDispatch();
    const displayIndex = typeof index === 'number' ? index + 1 : index;
    // const handleClickSong = () => {
    //     dispatch(setCurrSongId(songInfo.encodeId));
        
    // };
    const [isHovered, setIsHovered] = useState(false);
    const artistsLength = songInfo?.artists?.length;

    return (
        <div
            // onDoubleClick={handleClickSong}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex justify-between select-none p-[10px] border-b-[.25px] border-b-purple-950 rounded-[4px]  transition-opacity duration-300  hover:bg-[rgba(48,36,60,0.9)]`}
        >
            <div className="flex items-center flex-5 w-6/12 justify-items-center ">
                <span
                    className={`mr-[5px] w-[60px] flex items-center justify-center    ${
                        index === 0
                            ? 'text-[32px] text-[#411636] font-roboto text-shadow-1'
                            : index === 1
                            ? 'text-[32px] text-[#411636] font-roboto text-shadow-2'
                            : index === 2
                            ? 'text-[32px] text-[#411636] font-roboto text-shadow-3'
                            : index ==="Gợi ý"
                            ? 'text-[14px] text-slate-500 font-inter'
                            : 'text-[32px] text-[#411636] font-roboto text-shadow-4'
                    }`}
                >
                    {displayIndex}
                </span>
                <div className="flex flex-col justify-center items-center px-2 text-lg text-gray-400">
                    {songInfo?.rakingStatus > 0 ? (
                    <div className="text-green-500 flex flex-col items-center font-inter text-xs">
                        <FiTriangle className='fill-green-500'  />
                        <div> {songInfo?.rakingStatus} </div>
                    </div>
                    ) : songInfo?.rakingStatus === 0 ? (
                        <span className="mx-1">-</span>
                    ) : (
                    <div className="text-red-500 flex flex-col items-center font-inter text-xs">
                        <TbTriangleInverted className='fill-red-500' />
                        <div> {Math.abs(songInfo?.rakingStatus)} </div>
                    </div>
                    )}
                </div>
                <div className="relative cursor-pointer mr-[10px]" 
                // onClick={handleClickSong}
                >
                    <div className="w-10 h-10">
                        <img
                            className="w-full h-full rounded-[4px] object-cover group-hover:opacity-30"
                            src={songInfo.thumbnail}
                            alt={songInfo.title}
                        />
                    </div>
                    
                    <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-text-color-2 cursor-pointer hidden group-hover:block">
                            <FaPlay size={16} />
                    </span>
                </div>
                {/* <div className="flex items-center ">
                    <div className="pt-2 px-2 text-lg text-gray-400">
                        {songInfo?.rakingStatus > 0 ? (
                    <div className="relative">
                        <FaArrowUp className="text-green-500" />
                        {songInfo?.rakingStatus}
                    </div>
                    ) : songInfo?.rakingStatus === 0 ? (
                        <span>-</span>
                    ) : (
                    <div className="relative">
                        <FaArrowDown className="text-red-500" />
                        {Math.abs(songInfo?.rakingStatus)}
                    </div>
                    )}
                    </div>
                </div> */}

                <div className="flex flex-col">
                    <span className="text-sm font-semibold leading-5 text-text-color-2">
                        {songInfo?.title.length > 30
                            ? `${songInfo?.title.slice(0, 30)}...`
                            : songInfo?.title}
                    </span>
                    <h3 className="text-xs font-medium leading-5 text-text-color-3 overflow-ellipsis-2-line">
                        {songInfo?.artists?.map((artist, index) => (
                            <Link
                                key={artist?.link}
                                to={artist?.link}
                                className="cursor-pointer hover:underline hover:text-text-color-primary-2 text-slate-400"
                            >
                                {index === artistsLength - 1
                                    ? `${artist?.name}`
                                    : `${artist?.name}, `}
                            </Link>
                        ))}
                    </h3>
                </div>
                {/* <span className='flex ml-4 mb-5'>
                    {songInfo?.isWorldWide === false && <RiVipLine className='w-5 h-5 fill-yellow-300'/>}
                </span> */}
            </div>
            <span className="text-xs font-medium leading-5 flex-4 hidden md:flex items-center ">
                <Link
                    to={songInfo?.album?.link}
                    className="cursor-pointer text-slate-400 hover:underline hover:text-text-color-primary-2 "
                >
                    {songInfo?.album?.title.length > 35
                        ? `${songInfo?.album?.title.slice(0, 35)}...`
                        : songInfo?.album?.title}
                </Link>
            </span>
            {/* <span className="text-xs font-medium leading-5 flex-1 flex justify-end items-center mr-1 text-text-color-3">
                {moment.utc(songInfo?.duration * 1000).format('mm:ss')}
            </span> */}
            <span className="text-xs font-medium leading-5 flex-1 flex justify-end items-center mr-1 text-slate-400">
                {isHovered ? (
                    <div className="flex space-x-10 items-center">
                        <div className="relative group flex items-center justify-center w-10 h-10">
                            <div className="absolute  w-8 h-8 rounded-full group-hover:bg-[rgba(72,60,76,1)] transition-all duration-300"></div>
                            <LiaMicrophoneAltSolid size={16} className=" z-10 text-text-color-2" />
                        </div>
                        <div className="relative group flex items-center justify-center w-10 h-10">
                            <div className="absolute  w-8 h-8 rounded-full group-hover:bg-[rgba(72,60,76,1)] transition-all duration-300"></div>
                            <FaRegHeart size={16} className=" z-10 text-text-color-2" />
                        </div>
                        <div className="relative group flex items-center justify-center w-10 h-10">
                            <div className="absolute  w-8 h-8 rounded-full group-hover:bg-[rgba(72,60,76,1)] transition-all duration-3000"></div>
                            <SlOptions size={16} className=" z-10 text-text-color-2" />
                        </div>
                    </div>
                ) : (
                    moment.utc(songInfo?.duration * 1000).format('mm:ss')
                )}
            </span>
        </div>
    );
}

export default memo(ZingChartSong);
