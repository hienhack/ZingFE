import { memo } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

import { AlbumSong } from '../Album';
import { LuArrowUpDown } from "react-icons/lu";



function formatDuration(durationSeconds) {
    const duration = moment.duration(durationSeconds * 1000);
    if (duration.asHours() < 1) {
        // Less than one hour: show minutes and seconds
        return `${duration.minutes()} phút ${duration.seconds()} giây`;
    } else {
        // One hour or more: show hours, minutes, and seconds
        return `${Math.floor(duration.asHours())} giờ ${duration.minutes()} phút ${duration.seconds()} giây`;
    }
}

function AlbumPlaylist({ songs, cont, type }) {
    
    return (
        <div
            className={`w-full flex flex-col text-[#FFFFFF] `
            // ${
            //     screenWidthRedux > 1200 ? '' : 'mt-4'
            // }
        }
        >
            {!type && songs && (
                <div className="flex p-[10px] border-b-[1px] border-[hsla(0,0%,100%,0.05)]">
                    <div className="flex flex-5">
                        {songs?.total > 1 && (
                            <span className="mr-[10px] cursor-pointer hover:opacity-70">
                                <LuArrowUpDown />
                            </span>
                        )}
                        <span className="text-xs text-gray-400 font-semibold leading-5 select-none">BÀI HÁT</span>
                    </div>
                    {/* <span className="text-xs text-gray-400 font-medium leading-5 select-none flex-4 hidden md:block">
                        ALBUM
                    </span> */}
                    {cont === 0 && (
                        <span className="text-xs text-gray-400 font-medium leading-5 select-none flex-4 hidden md:block">
                            ALBUM
                        </span>
                    )}
                    <span className="text-xs text-gray-400 font-medium text-end truncate leading-5 select-none flex-1 flex justify-end">
                        THỜI GIAN
                    </span>
                </div>
            )}
            {songs && (
                <div className="flex flex-col mb-[10px]">
                    {type ? (
                        <AlbumSong key={songs.encodeId} songInfo={songs} />
                    ) : (
                        songs.items.map((song) => (
                            <AlbumSong key={song.encodeId} songInfo={song} />
                        ))
                    )}
                </div>
            )}

            {songs?.total > 20 ? (
                        <div className="flex text-xs font-medium mb-[30px]">
                            <h3 className="mr-2">{`${songs?.total} bài hát`}</h3>•
                            <h3 className="ml-2">
                                {formatDuration(songs?.totalDuration)}
                            </h3>
                        </div>
                    ) : (
                        !type && (
                            <table className="w-full text-[13px] font-semibold mb-[30px]">
                                <thead>
                                    <tr>
                                        <th colSpan="2" className="text-[14px] leading-4 font-bold mb-[10px] text-left p-1">
                                            Thông tin
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ minWidth: '10px', width: '10%' }} className="text-gray-500 p-1">Số bài hát</td>
                                        <td style={{ minWidth: '20px', width: '60%' }} className="p-1">{songs.total}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ minWidth: '10px', width: '10%' }} className="text-gray-500 p-1">Ngày phát hành</td>
                                        <td style={{ minWidth: '20px', width: '60%' }} className="p-1">{songs.items[0].album.releaseDate}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ minWidth: '10px', width: '10%' }} className="text-gray-500 p-1">Cung cấp bởi</td>
                                        <td style={{ minWidth: '20px', width: '60%' }} className="p-1">{songs.items[0].distributor}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    )}
        </div>
    );
}

export default memo(AlbumPlaylist);
