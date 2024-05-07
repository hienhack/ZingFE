import { useRef, memo,useState } from 'react';
import { Link } from 'react-router-dom';
import { SlOptions } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";


import { BsPlayCircle } from 'react-icons/bs';

function PlaylistSectionSearchItem({ item }) {
    const imgRef = useRef('');

    const handleMouseEnter = () => {
        imgRef.current.classList.remove('animate-scale-down-image');
        imgRef.current.classList.add('animate-scale-up-image');
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        imgRef.current.classList.remove('animate-scale-up-image');
        imgRef.current.classList.add('animate-scale-down-image');
        setIsHovered(false);
    };

    const artistsLength = item?.artists?.length;

    const [isHovered, setIsHovered] = useState(false);
    const [showTooltip1, setShowTooltip1] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);

    return (
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col gap-1 px-[14px] select-none group">
            <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full relative overflow-hidden rounded-[5px]"
                to={item?.link}
            >
                <img
                    ref={imgRef}
                    className="w-full h-auto object-cover mb-1 group-hover:brightness-50"
                    src={item?.thumbnail}
                    alt={item?.title}
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 cursor-pointer group hover:bg-overlay-50">
                    <div
                        className={
                            'absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white opacity-0 group-hover:opacity-100'
                        }
                    >
                        {/* <span className="hover:text-[#DADADA]">
                            <BsPlayCircle size={45} />
                        </span> */}
                        <span className="text-xs font-medium leading-5 flex-1 flex justify-end items-center mr-1 text-slate-400">
                {isHovered ? (
                    <div className="flex space-x-4 items-center group:">
                        <div 
                            onMouseEnter={() => setShowTooltip1(true)}
                            onMouseLeave={() => setShowTooltip1(false)}
                            className="relative flex items-center justify-center w-7 h-7 rounded-full hover:bg-[hsla(0,0%,100%,0.3)]">
                            <div className="absolute  w-8 h-8   transition-all duration-300"></div>
                            <FaRegHeart size={16} className=" z-10 text-white" />
                            
                            <div
                                
                                className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
                                style={{ opacity: showTooltip1 ? 1 : 0 }}>
                                Thêm vào thư viện
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
                            </div>

                        </div>
                        <span className="hover:text-[#DADADA]">
                            <BsPlayCircle size={45} className='text-white'/>  
                        </span>
                            
                        
                        <div 
                            onMouseEnter={() => setShowTooltip2(true)}
                            onMouseLeave={() => setShowTooltip2(false)}
                            className="relative flex items-center justify-center w-7 h-7 rounded-full hover:bg-[hsla(0,0%,100%,0.3)]">
                            <div className="absolute  w-8 h-8   transition-all duration-300"></div>
                            <SlOptions size={16} className=" z-10 text-white" />
                            
                            <div
                                
                                className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(60,60,52,0.9)] text-white text-xs rounded whitespace-nowrap"
                                style={{ opacity: showTooltip2 ? 1 : 0 }}>
                                Khác
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-9px] w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-[rgba(60,60,52,0.9)]"></div>
                            </div>

                        </div>
                    </div>
                ) : (
                    ''
                )}
            </span>
                    </div>
                </div>
            </Link>
            {item?.title && (
                <Link
                    to={item?.link}
                    title={item?.title}
                    className="text-white text-sm font-bold cursor-pointer hover:text-purple-500"
                >
                    {item?.title?.length > 22 ? `${item?.title?.slice(0, 22)}...` : item?.title}
                </Link>
            )}
            <span className="text-[#FFFFFF80] text-sm font-medium overflow-ellipsis-2-line">
                {item?.artists?.map((artist, index) => (
                    <Link
                        key={artist?.link}
                        to={artist?.link}
                        className="cursor-pointer hover:underline hover:text-purple-500"
                    >
                        {index === artistsLength - 1 ? `${artist?.name}` : `${artist?.name}, `}
                    </Link>
                ))}
            </span>
        </div>
    );
}

export default memo(PlaylistSectionSearchItem);