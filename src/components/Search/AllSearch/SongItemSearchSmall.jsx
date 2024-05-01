import { memo,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';


import { FaPlay } from 'react-icons/fa';

function SongItemSearchSmall({ data }) {
    

    const [showTooltip1, setShowTooltip1] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);
    const [showTooltip3, setShowTooltip3] = useState(false);

    const artistsLength = data?.artists?.length;

    return (
        <div
            // onDoubleClick={handleClickSong}
            className={`w-[90%] lg:w-[45%] flex-auto select-none p-[10px] gap-[10px] flex rounded-[4px] border-b-[1px] border-gray-900 group bg-[rgba(32,15,53,0.9)]`
            // ${
            //     data?.encodeId === currentSongId ? 'bg-primary-color-8' : 'hover:bg-primary-color-8'
            // }
            }
        >
            <div 
            // onClick={handleClickSong} 
            className="relative">
                <div className="w-[40px] h-[40px]">
                    <img
                        className="w-full h-full rounded object-cover"
                        src={data?.thumbnail}
                        alt={data?.artistsNames}
                    />
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[4px] bg-overlay-40 cursor-pointer hidden group-hover:block">
                        <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white">
                            <FaPlay size={14} />
                        </span>
                </div>
                
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-white text-sm font-semibold">
                        {data?.title?.length > 28 ? `${data?.title.slice(0, 28)}...` : data?.title}
                    </span>
                    <span className="text-#FFFFFF80 text-xs overflow-ellipsis-2-line">
                        {data?.artists?.map((artist, index) => (
                            <Link
                                key={artist?.link}
                                to={artist?.link}
                                className="cursor-pointer hover:underline hover:text-purple-500 text-gray-400"
                            >
                                {index === artistsLength - 1
                                    ? `${artist?.name}`
                                    : `${artist?.name}, `}
                            </Link>
                        ))}
                    </span>
                </div>
                <span className="text-xs font-medium leading-5 text-#FFFFFF80">
                    {moment.utc(data?.duration * 1000).format('mm:ss')}
                </span>
            </div>
        </div>
    );
}

export default memo(SongItemSearchSmall);