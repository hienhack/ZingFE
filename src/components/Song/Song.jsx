import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { LiaMicrophoneAltSolid } from 'react-icons/lia';
import { SlOptions } from 'react-icons/sl';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMusic } from 'react-icons/fi';
import Tooltip from '../../components/Tooltip';

function Song({ song, index, isAlbum, isIcon }) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const artistsLength = song?.artist?.length;
  const titleLength = 100;

  return (
    <div
      // onDoubleClick={handleClickSong}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full border-b border-solid border-[hsla(0,0%,100%,0.05)] flex justify-between text-center items-center select-none p-[10px] rounded-[4px] group  hover:bg-[hsla(0,0%,80%,0.1)]`}
    >
      <div className="flex items-center flex-1 ">
        {/* <div className='text-[--text-secondary] mr-5'>{isIcon ? <FiMusic /> : (index + 1)}</div> */}
        <div
          className="relative cursor-pointer mr-[10px]"
          // onClick={handleClickSong}
        >
          <div className="w-10 h-10">
            <img
              className="w-full h-full rounded-[4px] object-cover group-hover:opacity-30"
              src={song?.thumbnail}
              alt={song?.title}
            />
          </div>
          <span className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]  cursor-pointer hidden group-hover:block">
            <FaPlay size={16} />
          </span>
        </div>
        <div className="flex flex-col ">
          <div className="flex row max-h-5">
            <span className="text-white text-sm font-semibold leading-5 hover:text-purple-500">
              {song?.title?.length > titleLength
                ? `${song?.title.slice(0, titleLength)}...`
                : song?.title}
            </span>
          </div>
          <h3 className="text-xs text-left font-medium leading-5  truncate max-w-[125px] overflow-ellipsis-2-line">
            {song?.artist?.map((item, index) => (
              <Link
                key={item?.link}
                to={item?.link}
                className=" text-[--text-secondary] cursor-pointer hover:underline hover:text-purple-500  "
              >
                {index === artistsLength - 1 ? `${item}` : `${item}, `}
              </Link>
            ))}
          </h3>
        </div>
      </div>
      {isAlbum === true && (
        <Link to={`/album/single/id`}>
          <div className="m-auto text-[--text-secondary] hover:underline hover:text-purple-500 text-[14px] cursor-pointer">
            album
          </div>
        </Link>
      )}

      <span className=" text-xs font-medium leading-5 flex-1 flex justify-end items-center mr-1 text-slate-400">
        {isHovered ? (
          <div className="flex space-x-2 items-center">
            <Tooltip content="Phát cùng lời bài hát">
              <button className=" flex items-center justify-center text-[--primary-text] rounded-full hover:filter-none">
                <LiaMicrophoneAltSolid size={20} />
              </button>
            </Tooltip>
            <Tooltip content="Thêm vào thư viện">
              <button className=" flex px-5 items-center justify-center text-[--primary-text] rounded-full hover:filter-none">
                <AiOutlineHeart size={20} />
              </button>
            </Tooltip>
            <Tooltip content="Khác">
              <button className=" flex items-center justify-center text-[--primary-text] rounded-full hover:filter-none">
                <SlOptions size={20} />
              </button>
            </Tooltip>
          </div>
        ) : (
          <p>02:48</p>
        )}
      </span>
    </div>
  );
}

export default memo(Song);
