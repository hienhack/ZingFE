import { memo,useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
// import { setCurrSongId } from '../../../store/actions';
import PremiumIcon from './PremiumIcon';
import { FiTriangle } from "react-icons/fi";
import { TbTriangleInverted } from "react-icons/tb";
function ZingChartSongSmall({ songInfo, index }) {
    // const { currentSongId } = useSelector((state) => state.music);
    // const { screenWidthRedux } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);

    // const handleClickSong = () => {
    //     dispatch(setCurrSongId(songInfo.encodeId));
        
    // };

    const artistsLength = songInfo?.artists?.length;
    const titleLength = 9;

    return (
        <div
            // onDoubleClick={handleClickSong}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex justify-between select-none p-[10px] rounded-[4px] group  hover:bg-[rgba(61,45,76,1)]`}
        >
            <div className="flex items-center flex-5 ">
                <span className="text-shadow-4 mr-[5px] w-[25px] flex items-center justify-center text-[32px] text-[rgba(139,57,121,0.9)] ">
                    {index + 1}
                </span>
                <div className="flex flex-col justify-center items-center px-2 text-lg text-gray-400">
                    {songInfo?.rakingStatus > 0 ? (
                    <div className="text-green-500 flex flex-col items-center font-inter text-xs">
                        <FiTriangle className='fill-green-500' />
                        <div> {songInfo?.rakingStatus} </div>
                    </div>
                    ) : songInfo?.rakingStatus === 0 ? (
                        <span className="mx-1">-</span>
                    ) : (
                    <div className=" text-red-500 flex flex-col items-center font-inter text-xs">
                        <TbTriangleInverted className='fill-red-500'/>
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
                <div className="flex flex-col ">
                    <div className='flex row max-h-5'>
                        <span className="text-sm font-semibold leading-5 text-text-color-2 ">
                            {songInfo?.title.length > titleLength
                                ? `${songInfo?.title.slice(0, titleLength)}...`
                                : songInfo?.title}
                        </span>
                        <span className='flex  ml-1 mt-1'>
                            {songInfo?.isWorldWide === false && <PremiumIcon/>}
                        </span>
                    </div>
                    <h3 className="text-xs font-medium leading-5 text-text-color-3 truncate max-w-[125px] overflow-ellipsis-2-line">
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
                <div> 
                    
                </div>
                
            </div>
            <span className="text-xs font-medium leading-5 flex-1 flex justify-end items-center mr-1 text-slate-400">
                {isHovered ? (
                    <div className="flex space-x-2 items-center">
                        <div className="relative group flex items-center justify-center w-8 h-8">
                            <div className="absolute  w-4 h-4 rounded-full group-hover:bg-[rgba(72,60,76,1)] transition-all duration-300"></div>
                            <LiaMicrophoneAltSolid size={16} className=" z-10 text-text-color-2" />
                        </div>
                        <div className="relative group flex items-center justify-center w-8 h-8">
                        <div className="absolute  w-4 h-4 rounded-full group-hover:bg-[rgba(72,60,76,1)] transition-all duration-3000"></div>
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

export default memo(ZingChartSongSmall);
