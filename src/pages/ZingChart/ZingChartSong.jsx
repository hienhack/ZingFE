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






function ZingChartSong({ songInfo, index = "Gợi ý" }) {
    // const { currentSongId } = useSelector((state) => state.music);
    const dispatch = useDispatch();
    const displayIndex = typeof index === 'number' ? index + 1 : index;
    // const handleClickSong = () => {
    //     dispatch(setCurrSongId(songInfo.encodeId));
        
    // };
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
            className={` group flex justify-between select-none p-[10px] border-b-[.25px] border-[hsla(0,0%,100%,0.05)] rounded-[4px]  transition-opacity duration-300  hover:bg-[rgba(48,36,60,0.9)]`}
        >
            <div className="flex items-center flex-5 w-6/12 justify-items-center ">
                <span
                    className={`mr-[5px] w-[60px] flex items-center justify-center    ${
                        index === 0
                            ? 'text-[32px] text-[#411636] font-roboto text-shadow-1 font-extrabold'
                            : index === 1
                            ? 'text-[32px] text-[#411636] font-roboto text-shadow-2 font-extrabold'
                            : index === 2
                            ? 'text-[32px] text-[#411636] font-roboto text-shadow-3 font-extrabold'
                            : index ==="Gợi ý"
                            ? 'text-[14px] text-slate-500 font-inter font-semibold'
                            : 'text-[32px] text-[#411636] font-roboto text-shadow-4 font-extrabold'
                    }`}
                >
                    {displayIndex}
                </span>
                <div className="flex flex-col justify-center items-center px-2 text-lg text-gray-400">
                    {songInfo?.rakingStatus > 0 ? (
                    <div className="text-white flex flex-col items-center font-inter text-xs font-extrabold">
                        <FiTriangle className='fill-green-500 text-green-500 '  />
                        <div> {songInfo?.rakingStatus} </div>
                    </div>
                    ) : songInfo?.rakingStatus === 0 ? (
                        <span className="mx-1">-</span>
                    ) : (
                    <div className="text-white flex flex-col items-center font-inter text-xs font-extrabold">
                        <TbTriangleInverted className='fill-red-500 text-red-500 ' />
                        <div> {Math.abs(songInfo?.rakingStatus)} </div>
                    </div>
                    )}
                </div>
                <div className="relative cursor-pointer mr-[10px]" 
                // onClick={handleClickSong}
                >
                    <div className=" w-10 h-10">
                        <img
                            className="w-full h-full rounded-[4px] object-cover group-hover:opacity-30"
                            src={songInfo.thumbnail}
                            alt={songInfo.title}
                            
                        />
                    </div>
                    
                    <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]  cursor-pointer hidden group-hover:block">
                            <FaPlay size={16} />
                    </span>
                </div>

                <div className="flex flex-col">
                    <span className="text-sm font-semibold leading-5  hover:text-purple-500">
                        {songInfo?.title.length > 30
                            ? `${songInfo?.title.slice(0, 30)}...`
                            : songInfo?.title}
                    </span>
                    <h3 className="text-xs font-medium leading-5  overflow-ellipsis-2-line">
                        {songInfo?.artists?.map((artist, index) => (
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
                    </h3>
                </div>
                {/* <span className='flex ml-4 mb-5'>
                    {songInfo?.isWorldWide === false && <RiVipLine className='w-5 h-5 fill-yellow-300'/>}
                </span> */}
            </div>
            <span className="text-xs font-medium leading-5 flex-4 hidden md:flex items-center ">
                <Link
                    to={songInfo?.album?.link}
                    className="cursor-pointer text-slate-400 hover:underline hover:text-purple-500 "
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

export default memo(ZingChartSong);
