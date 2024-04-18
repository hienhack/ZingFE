import { memo } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
// import { setCurrSongId } from '../../../store/actions';
import { RiVipLine } from "react-icons/ri";

function ZingChartSongSmall({ songInfo, index }) {
    // const { currentSongId } = useSelector((state) => state.music);
    // const { screenWidthRedux } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    // const handleClickSong = () => {
    //     dispatch(setCurrSongId(songInfo.encodeId));
        
    // };

    const artistsLength = songInfo?.artists?.length;
    const titleLength = 10;

    return (
        <div
            // onDoubleClick={handleClickSong}
            className={`flex justify-between select-none p-[10px] rounded-[4px] group bg-[hsla(0,0%,100%,0.1)] `}
        >
            <div className="flex items-center flex-5">
                <span className="text-shadow-4 mr-[15px] w-[40px] flex items-center justify-center text-[32px] text-[rgba(139,57,121,0.9)]">
                    {index + 1}
                </span>
                <div className="flex flex-col justify-center items-center px-2 text-lg text-gray-400">
                    {songInfo?.rakingStatus > 0 ? (
                    <div className="text-green-500 flex flex-col items-center ">
                        <FaArrowUp  />
                        <div> {songInfo?.rakingStatus} </div>
                    </div>
                    ) : songInfo?.rakingStatus === 0 ? (
                        <span className="mx-1">-</span>
                    ) : (
                    <div className="text-red-500 flex flex-col items-center">
                        <FaArrowDown />
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
                    
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold leading-5 text-text-color-2">
                        {songInfo?.title.length > titleLength
                            ? `${songInfo?.title.slice(0, titleLength)}...`
                            : songInfo?.title}
                    </span>
                    <h3 className="text-xs font-medium leading-5 text-text-color-3 truncate max-w-[125px] overflow-ellipsis-2-line">
                        {songInfo?.artists?.map((artist, index) => (
                            <Link
                                key={artist?.link}
                                to={artist?.link}
                                className="cursor-pointer hover:underline hover:text-text-color-primary-2"
                            >
                                {index === artistsLength - 1
                                    ? `${artist?.name}`
                                    : `${artist?.name}, `}
                            </Link>
                        ))}
                    </h3>
                </div>
                <span className='flex  mb-5'>
                    {songInfo?.isWorldWide === false && <RiVipLine className='w-5 h-5 fill-yellow-300'/>}
                </span>
            </div>
            <span className="text-xs font-medium leading-5 flex-1 flex justify-end items-center mr-1 text-text-color-3">
                {moment.utc(songInfo?.duration * 1000).format('mm:ss')}
            </span>
        </div>
    );
}

export default memo(ZingChartSongSmall);
