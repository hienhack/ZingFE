import DiscoveryBtn from '../DiscoveryBtn/DiscoveryBtn';
import { BsThreeDots, BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { useState, useRef } from 'react';

function PlaylistCard({ playlist, num, title, istitle, isdescribe, isartist }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const imageRefs = useRef([]);

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
        {<ul className='flex flex-wrap justify-between	  '>
          {playlist.slice(0, 5).map((item, index) =>
            <li key={index} className="w-[11rem]">
              <div 
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleLeave(index)}
                className='w-full relative overflow-hidden rounded-lg'>
                {hoveredIndex === index && <div className='absolute top-0 bottom-0 z-40 left-0 right-0 bg-overlay-30 rounded-lg text-white flex items-center justify-center gap-3 hover:bg-[rgba(0,0,0,0.3)]'>
                  <span><AiOutlineHeart size={25} /></span>
                  <span
                    className='p-1 border border-white rounded-full'
                  >
                    <BsFillPlayFill size={35} />
                  </span>
                  <span><BsThreeDots size={25} /></span>
                </div>}
                <img ref={el => imageRefs.current[index] = el} src={item.thumbnail}  className='w-full h-auto rounded-lg' />
              </div>
              <p className="text-white truncate ...">
                {istitle ? item.title : null}
              </p>
              <p className="text-gray-500">
                {isdescribe ? item.describe : null}
              </p>
              <p className="text-gray-500 line-clamp-2">
                {isartist ? item.artist : null}
              </p>
            </li>
          )}
        </ul>}
      </div>
    </div>
  );
}

export default PlaylistCard;
