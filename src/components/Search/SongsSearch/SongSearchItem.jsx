import { memo } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';




import { FaPlay } from 'react-icons/fa';

function SongSearchItem({ songInfo }) {
   
   

    const artistsLength = songInfo?.artists?.length;

    return (
        <div
            // onDoubleClick={handleClickSong}
            className={`flex justify-between select-none text-[#FFFFFF80] p-[10px] border-b-[1px] border-border-color-2 rounded-[4px] group bg-[#542D4A]`
            // ${
            //     songInfo?.encodeId === currentSongId
            //         ? 'bg-primary-color-8'
            //         : 'hover:bg-primary-color-8'
            // }`
        }
        >
            <div className="flex items-center flex-5">
                <div className="relative cursor-pointer mr-[10px]" onClick={handleClickSong}>
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
                                className="cursor-pointer hover:underline hover:text-[#E9638F]"
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
                    className="cursor-pointer hover:underline hover:text-[#E9638F]"
                >
                    {songInfo?.album?.title.length > 35
                        ? `${songInfo?.album?.title.slice(0, 35)}...`
                        : songInfo?.album?.title}
                </Link>
            </span>
            <span className="text-xs font-medium leading-5 flex-1 flex justify-end items-center mr-1">
                {moment.utc(songInfo?.duration * 1000).format('mm:ss')}
            </span>
        </div>
    );
}

export default memo(SongSearchItem);