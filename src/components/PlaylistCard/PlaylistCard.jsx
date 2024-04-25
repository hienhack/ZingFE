import DiscoveryBtn from '../DiscoveryBtn/DiscoveryBtn';
import { BsThreeDots, BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { useState, useRef } from 'react';

import { Link } from 'react-router-dom';


function PlaylistCard({ playlist, num, title, istitle, isdescribe, isartist }) {
    console.log(playlist[0].artist?.[0]); // In ra "Alan Walker"
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const imageRefs = useRef([]);
    const [showTooltip1, setShowTooltip1] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);
    
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleHover = (index) => {
        const imageRef = imageRefs.current[index];
        console.log(imageRef)
        imageRef.classList?.remove('animate-scale-down-image');
        imageRef.classList?.add('animate-scale-up-image');
        setHoveredIndex(index);
    }

    const handleLeave = (index) => {
        const imageRef = imageRefs.current[index];
        console.log(imageRef)
        imageRef.classList?.remove('animate-scale-up-image');
        imageRef.classList?.add('animate-scale-down-image');
        setHoveredIndex(null);
        setShowMenu(false);
    }

    return (
        <div>
            <div className="w-full  m-auto mt-[20px]">
                <div className='flex '>
                    <h1 className="font-bold text-[20px] text-white mb-5">
                        {title}
                    </h1>
                    <h1 className="text-gray-500 font-semibold !text-xs mb-5 ml-auto">
                        <DiscoveryBtn />
                    </h1>
                </div>
                {<ul className='flex justify-between'>
                    {playlist.slice(0, 5).map((item, index) =>
                        <li key={index} className="w-[179px] h-auto relative">
                            {/* <Link to={`/album/${item.id}`}> */}
                                <div
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={() => handleLeave(index)}
                                    className='w-full  overflow-hidden rounded-[4px] cursor-pointer'>
                                    {hoveredIndex === index && 
                                    <div className='absolute top-0 bottom-0 z-40 left-0 right-0 bg-overlay-30 rounded-[4px] text-white flex items-center justify-center gap-3 hover:bg-[rgba(0,0,0,0.3)]'>
                                        {/* <span className='hover:bg-[hsla(0,0%,100%,.3)] border-transparent hover:border-current rounded-full p-1'><AiOutlineHeart size={25} className='' /></span> */}
                                        <span onMouseEnter={() => setShowTooltip1(true)}
                                            onMouseLeave={() => setShowTooltip1(false)}
                                            className='relative group inline-block'
                                        >
                                            <span style={{ opacity: showTooltip1 ? 1 : 0 }} className='absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(48,36,60,0.9)] text-white text-xs rounded whitespace-nowrap z-100'>
                                                Thêm vào thư viện
                                            </span>
                                            <div className='hover:bg-[hsla(0,0%,100%,.3)] border-transparent hover:border-current rounded-full p-1'>
                                                <AiOutlineHeart size={25} />
                                            </div>
                                        </span>
                                        <span
                                            className='p-1 border rounded-full 	'
                                        >
                                            <BsFillPlayFill size={33} className='pl-0.5' />
                                        </span>
                                        <span onMouseEnter={() => setShowTooltip2(true)}
                                            onMouseLeave={() => setShowTooltip2(false)}
                                            className='relative inline-block'
                                        >
                                            <span style={{ opacity: showTooltip2 ? 1 : 0 }} className='absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[rgba(48,36,60,0.9)] text-white text-xs rounded whitespace-nowrap'>
                                                Khác
                                            </span>
                                            <div className='hover:bg-[hsla(0,0%,100%,.3)] border-transparent hover:border-current rounded-full p-1' onClick={toggleMenu}>
                                                <BsThreeDots size={25} />
                                            </div>
                                        </span>
                                        {showMenu && 
                                        <div className='absolute right-0 top-[40px] bg-white text-black p-2 rounded shadow'>
                                            {/* Menu items */}
                                            <p>Menu Item 1</p>
                                            <p>Menu Item 2</p>
                                            <p>Menu Item 3</p>
                                        </div>}
                                        {/* <span className='hover:bg-[hsla(0,0%,100%,.3)] border-transparent hover:border-current rounded-full p-1'><BsThreeDots size={25} className='' /></span> */}
                                    </div>}
                                    <img ref={el => imageRefs.current[index] = el} src={item.thumbnail} className='w-full h-auto  ' />
                                </div>
                            {/* </Link> */}
                            {istitle ? <p className="text-white mt-2 truncate ... text-[14px] cursor-pointer hover:text-[--link-text-hover] font-bold	">
                                {item.title}
                            </p> : null}
                            {isdescribe ? <p className="mt-2 text-[--text-secondary] text-[14px]">
                                {item.describe}
                            </p> : null}
                            {isartist ? (
                                <div className="flex flex-wrap w-[200px]">
                                    {item.artist?.map((artist, index) => (
                                        <div key={index}>
                                            <span className=" text-[--text-secondary] text-[14px] cursor-pointer hover:text-[--link-text-hover]">
                                                {artist}
                                            </span>
                                            {index !== item.artist.length - 1 && <span className="text-[--text-secondary]">,&nbsp;</span>}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </li>
                    )}
                </ul>}
            </div>
        </div>
    );
}

export default PlaylistCard;