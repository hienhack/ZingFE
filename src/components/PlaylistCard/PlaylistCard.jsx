import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoIosAddCircleOutline, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { RiPlayFill, RiPlayList2Fill } from 'react-icons/ri';
import { LoadingIndicator, PlayingIndicator } from '../Indicator';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Popover, PopoverContent, PopoverHandler } from '../Popover';
import { GoDownload } from 'react-icons/go';
import { FiLink } from 'react-icons/fi';
import clsx from 'clsx';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { PlaylistMenu } from '../Menu';

function PlaylistCard({
  playlist,
  title = false,
  description = false,
  artist = false,
  isOnwer = false,
  year = false,

}) {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);

  function addToQueue(playlist) {
    // call api here to get all playlist song info
  }

  function handleFavClick(playlist) {
    // call api to save to fav list
  }

  function handleRemove(playlist) {}

  return (
    <div className={`w-full`}>
      <div
        className="relative w-full rounded-md overflow-hidden group cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img
          className="w-full aspect-square group-[:hover]:scale-110 transition-all duration-500"
          src={playlist.thumbnail}
        ></img>
        <div
          className={clsx(
            'absolute top-0 left-0 w-full aspect-square items-center',
            'justify-center z-[1] bg-[--dark-alpha-50]',
            focus ? 'flex' : 'hidden group-[:hover]:flex'
          )}
        >
          <div className="max-w-[80%] grow flex items-center justify-around">
            {!isOnwer && (
              <Tippy content="Thêm vào thư viện" theme="root">
                <button
                  className="size-[30px] min-w-[30px] flex items-center justify-center text-white rounded-full hover:bg-[--hover-tooltip-opacity]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavClick(playlist);
                  }}
                >
                  <IoMdHeartEmpty className="size-[20px]" />
                  {/* Display when the playlist is in fav list */}
                  {/* <IoMdHeart className="size-[20px] text-[--purple-primary]" /> */}
                </button>
              </Tippy>
            )}
            {isOnwer && (
              <Tippy content="Xóa" theme="root">
                <button
                  className="size-[30px] min-w-[30px] flex items-center justify-center text-white rounded-full hover:bg-[--hover-tooltip-opacity]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(playlist);
                  }}
                >
                  <IoCloseOutline className="size-6" />
                </button>
              </Tippy>
            )}
            <button className="size-[45px] min-w-[45px] rounded-full border border-white flex items-center justify-center text-white">
              <RiPlayFill className="size-8" />

              {/* Display playing loading */}
              {/* <PlayingIndicator /> */}

              {/* Display when loading */}
              {/* <LoadingIndicator /> */}
            </button>
            <PlaylistMenu
              playlist={playlist}
              onShow={() => setFocus(true)}
              onHide={() => setFocus(false)}
            >
              <button
                className="size-[30px] min-w-[30px] flex items-center justify-center text-white rounded-full hover:bg-[--hover-tooltip-opacity]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <HiOutlineDotsHorizontal className="size-5" />
              </button>
            </PlaylistMenu>
          </div>
        </div>
      </div>
      <div className="mt-3">
        {title && (
          <Link to="/">
            <h4
              className={clsx(
                'text-sm font-bold leading-[1.36]  text-[--text-primary]',
                'tracking-normal hover:text-[--link-text-hover] mb-1',
                !artist && !description ? 'line-clamp-2' : 'line-clamp-1'
              )}
            >
              {playlist.title}
            </h4>
          </Link>
        )}
        {artist && (
          <h3 className="text-sm text-[--text-secondary] font-normal leading-[1.33] line-clamp-2">
            {playlist.artists.slice(0, 3).map((a, index) => (
              <span key={index}>
                <Link to="/" className="hover:text-[--link-text-hover]">
                  {a.name}
                </Link>
                {index != playlist.artists.length - 1 && <span>,</span>}
              </span>
            ))}
            <span>...</span>
          </h3>
        )}
        {description && (
          <h3 className="text-sm text-[--text-secondary] font-normal leading-[1.33] line-clamp-2">
            {playlist.description}
          </h3>
        )}
        {year && (
          <h3 className="text-sm text-[--text-secondary] font-normal leading-[1.33] line-clamp-2">
            {playlist.year}
          </h3>
        )}
      </div>
    </div>
  );
}

PlaylistCard.propTypes = {
  playlist: PropTypes.object,
  titile: PropTypes.bool,
  description: PropTypes.bool,
  artist: PropTypes.bool,
  year: PropTypes.bool,

};

export default PlaylistCard;
