// import { memo, useState } from 'react';
// import moment from 'moment';
// import { Link } from 'react-router-dom';
// import { FaRegHeart, FaPlay } from 'react-icons/fa';
// import { SlOptions } from 'react-icons/sl';
// import { LiaMicrophoneAltSolid } from 'react-icons/lia';
// import PremiumIcon from '../ZingChart/PremiumIcon';
// import { PiMusicNotesSimpleBold } from "react-icons/pi";
// function AlbumSong({ songInfo }) {
//     const [isHovered, setIsHovered] = useState(false);
//     const [showTooltip1, setShowTooltip1] = useState(false);
//     const [showTooltip2, setShowTooltip2] = useState(false);
//     const [showTooltip3, setShowTooltip3] = useState(false);
//     const artistsLength = songInfo?.artists?.length;

//     return (
//         <div
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             className={`relative flex justify-between select-none p-[10px] border-b-[1px] border-[hsla(0,0%,100%,0.05)] rounded-[4px] group hover:bg-[hsla(0,0%,80%,0.1)]`}
//         >
//             <div className="flex items-center flex-5">
//                 <span className="mr-[10px] text-gray-400">
//                     <PiMusicNotesSimpleBold size={15} />
//                 </span>
//                 <div className="relative cursor-pointer mr-[10px]">
//                     <div className="w-10 h-10">
//                         <img
//                             className="w-full h-full rounded-[4px] object-cover group-hover:opacity-30"
//                             src={songInfo.thumbnail}
//                             alt={songInfo.title}
//                         />
//                     </div>
//                     <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[4px] bg-overlay-40 cursor-pointer hidden group-hover:block">
//                         <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white">
//                             <FaPlay size={14} />
//                         </span>
//                     </div>
//                 </div>
//                 <div className="flex flex-col">
//                     <div className='flex row max-h-5'>
//                         <span className="text-sm font-semibold leading-5 hover:text-purple-500">
//                             {songInfo?.title.length > 30
//                                 ? `${songInfo?.title.slice(0, 30)}...`
//                                 : songInfo?.title}
//                         </span>
//                         <span className='flex  ml-1 mt-1'>
//                             {songInfo?.streamingStatus === 2 && <PremiumIcon/>}
//                         </span>
//                     </div>
//                     <h3 className="text-xs font-medium leading-5 truncate max-w-[200px] overflow-ellipsis-2-line">
//                         {songInfo?.artists?.map((artist, index) => (
//                             <Link
//                                 key={artist?.link}
//                                 to={artist?.link}
//                                 className="cursor-pointer hover:underline hover:text-purple-500 text-gray-400"
//                             >
//                                 {index === artistsLength - 1
//                                     ? artist?.name
//                                     : `${artist?.name}, `}
//                             </Link>
//                         ))}
//                     </h3>
//                 </div>
//             </div>
//             <span className="text-xs font-medium leading-5 flex-4 items-center hidden md:flex">
//                 <Link
//                     to={songInfo?.album?.link}
//                     className="cursor-pointer hover:underline hover:text-purple-500 text-gray-400"
//                 >
//                     {songInfo?.album?.title.length > 35
//                         ? `${songInfo?.album?.title.slice(0, 35)}...`
//                         : songInfo?.album?.title}
//                 </Link>
//             </span>
//             <div className="relative flex-1 flex justify-end items-center mr-1 text-slate-400">
//                 <span className="text-xs font-medium leading-5">
//                     {!isHovered && moment.utc(songInfo?.duration * 1000).format('mm:ss')}
//                 </span>
//                 <div
//                     className={`absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2 items-center transition-opacity duration-300 ${
//                         isHovered ? 'opacity-100' : 'opacity-0'
//                     }`}
//                 >
//                     <div
//                         onMouseEnter={() => setShowTooltip1(true)}
//                         onMouseLeave={() => setShowTooltip1(false)}
//                         className="relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(72,60,76,1)]"
//                     >
//                         <LiaMicrophoneAltSolid size={16} className="z-10 text-white" />
//                         <div
//                             className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
//                             style={{ opacity: showTooltip1 ? 1 : 0 }}
//                         >
//                             Phát cùng lời bài hát
//                             <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
//                         </div>
//                     </div>
//                     <div
//                         onMouseEnter={() => setShowTooltip2(true)}
//                         onMouseLeave={() => setShowTooltip2(false)}
//                         className="relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(72,60,76,1)]"
//                     >
//                         <FaRegHeart size={16} className="z-10 text-white" />
//                         <div
//                             className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
//                             style={{ opacity: showTooltip2 ? 1 : 0 }}
//                         >
//                             Thêm vào thư viện
//                             <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
//                         </div>
//                     </div>
//                     <div
//                         onMouseEnter={() => setShowTooltip3(true)}
//                         onMouseLeave={() => setShowTooltip3(false)}
//                         className="relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(72,60,76,1)]"
//                     >
//                         <SlOptions size={16} className="z-10 text-white" />
//                         <div
//                             className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
//                             style={{ opacity: showTooltip3 ? 1 : 0 }}
//                         >
//                             Khác
//                             <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default memo(AlbumSong);



import { memo, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaPlay } from 'react-icons/fa';
import { SlOptions } from 'react-icons/sl';
import { LiaMicrophoneAltSolid } from 'react-icons/lia';
import PremiumIcon from '../ZingChart/PremiumIcon';
import { PiMusicNotesSimpleBold } from "react-icons/pi";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // This line is important, don't forget to import the CSS

function AlbumSong({ songInfo }) {
    const [isHovered, setIsHovered] = useState(false);
    const artistsLength = songInfo?.artists?.length;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative flex justify-between select-none p-[10px] border-b-[1px] border-[hsla(0,0%,100%,0.05)] rounded-[4px] group hover:bg-[hsla(0,0%,80%,0.1)]`}
        >
            <div className="flex items-center flex-5">
                <span className="mr-[10px] text-gray-400">
                    <PiMusicNotesSimpleBold size={15} />
                </span>
                <div className="relative cursor-pointer mr-[10px]">
                    <div className="w-10 h-10">
                        <img
                            className="w-full h-full rounded-[4px] object-cover group-hover:opacity-30"
                            src={songInfo.thumbnail}
                            alt={songInfo.title}
                        />
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[4px] bg-overlay-40 cursor-pointer hidden group-hover:block">
                        <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white">
                            <FaPlay size={14} />
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className='flex row max-h-5'>
                        <span className="text-sm font-semibold leading-5 hover:text-purple-500">
                            {songInfo?.title.length > 30
                                ? `${songInfo?.title.slice(0, 30)}...`
                                : songInfo?.title}
                        </span>
                        <span className='flex ml-1 mt-1'>
                            {songInfo?.streamingStatus === 2 && <PremiumIcon/>}
                        </span>
                    </div>
                    <h3 className="text-xs font-medium leading-5 truncate max-w-[200px] overflow-ellipsis-2-line">
                        {songInfo?.artists?.map((artist, index) => (
                            <Link
                                key={artist?.link}
                                to={artist?.link}
                                className="cursor-pointer hover:underline hover:text-purple-500 text-gray-400"
                            >
                                {index === artistsLength - 1
                                    ? artist?.name
                                    : `${artist?.name}, `}
                            </Link>
                        ))}
                    </h3>
                </div>
            </div>
            <span className="text-xs font-medium leading-5 flex-4 items-center hidden md:flex">
                <Link
                    to={songInfo?.album?.link}
                    className="cursor-pointer hover:underline hover:text-purple-500 text-gray-400"
                >
                    {songInfo?.album?.title.length > 35
                        ? `${songInfo?.album?.title.slice(0, 35)}...`
                        : songInfo?.album?.title}
                </Link>
            </span>
            <div className="relative flex-1 flex justify-end items-center mr-1 text-slate-400">
                <span className="text-xs font-medium leading-5">
                    {!isHovered && moment.utc(songInfo?.duration * 1000).format('mm:ss')}
                </span>
                <div
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2 items-center transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Tippy className='text-[11px]' content="Phát cùng lời bài hát">
                        <div className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(72,60,76,1)]">
                            <LiaMicrophoneAltSolid size={16} className="z-10 text-white" />
                        </div>
                    </Tippy>
                    <Tippy className='text-[11px]' content="Thêm vào thư viện">
                        <div className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(72,60,76,1)]">
                            <FaRegHeart size={16} className="z-10 text-white" />
                        </div>
                    </Tippy>
                    <Tippy className='text-[11px]' content="Khác">
                        <div className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-[rgba(72,60,76,1)]">
                            <SlOptions size={16} className="z-10 text-white" />
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default memo(AlbumSong);

