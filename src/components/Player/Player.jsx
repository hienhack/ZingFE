import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GoHeart } from 'react-icons/go';
import { IconButton } from '../Button';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { RxShuffle } from 'react-icons/rx';
import { IoPlay, IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5';
import { PiMicrophoneStage, PiRepeat, PiRepeatOnce } from 'react-icons/pi';
import { MdPause, MdQueueMusic } from 'react-icons/md';
import { useContext, useEffect, useRef, useState } from 'react';
import { TbPictureInPicture } from 'react-icons/tb';
import { setCurrentSong } from '../../redux/slice/featureSlice';
import { AudioContext } from '../../Context/AudioContext';
import { setShowQueue } from '../../redux/slice/layoutSlice';
import { PremiumIcon } from '../Icon';
import DurationBar from './DurationBar';
import VolumeBar from './VolumeBar';
import clsx from 'clsx';
import './style.scss';
import { setPlaying, setRepeat, setRepeatOne, setShuffle } from '../../redux/slice/statusSlice';
import { SiSongkick } from 'react-icons/si';

function Player() {
  const isPlaying = useSelector((state) => state.status.isPlaying);
  // const audioRef = useRef(null);
  const { audioRef } = useContext(AudioContext);
  const showQueue = useSelector((state) => state.layout.showQueue);
  const currentSong = useSelector((state) => state.feature.currentSong);
  const { repeat, repeatOne, shuffle } = useSelector((state) => state.status);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setCurrentSong('http://localhost:8080/api/play/media/1'));
  // }, []);

  function handlePlayClick() {
    dispatch(setPlaying(!isPlaying));
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }

  function handleShowQueue() {
    dispatch(setShowQueue(!showQueue));
  }

  return (
    <div className="player">
      {/* <div className="absolute w-full h-8 bg-[--premium-package] z-[10] top-[-30px]">
        <div className="flex h-full items-center justify-center text-white font-semibold text-sm gap-2 leading-5 tracking-[.1]">
          <span>Nâng cấp tài khoản Premium để nghe trọn vẹn bài hát.</span>
          <a href="/" target="_blank" className="underline">
            Tìm hiểu thêm
          </a>
        </div>
      </div> */}
      <div className="wrapper">
        <div className="w-[30%] grow-0">
          <div className="flex items-center ">
            <div className="size-16 rounded-sm overflow-hidden mr-2.5 min-w-16">
              <img className="size-16 object-cover" src={currentSong.thumbnail} />
            </div>
            <div className="mr-2.5">
              <Link to="/">
                <span className="text-sm font-medium text-clip overflow-visible text-[--player-text] flex items-center hover:text-[--link-text-hover]">
                  {currentSong.name}
                  <i className="ml-2">
                    <PremiumIcon />
                  </i>
                </span>
              </Link>
              <Link to={'/'}>
                <h3 className="text-[--text-secondary] mt-[1px] text-[12px]">
                  <span className="hover:text-[--link-text-hover] hover:underline">
                    {currentSong.singers[0].name}
                  </span>
                </h3>
              </Link>
            </div>
            <div className="ml-2.5 flex items-center justify-between w-[72px]">
              <IconButton>
                <GoHeart></GoHeart>
              </IconButton>
              <IconButton>
                <HiOutlineDotsHorizontal></HiOutlineDotsHorizontal>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="grow-1 max-w-[40vw] w-full">
          <div className="h-[50px flex items-center justify-center">
            <IconButton
              className="mx-[7px]"
              active={shuffle}
              onClick={() => dispatch(setShuffle(true))}
            >
              <RxShuffle></RxShuffle>
            </IconButton>
            <IconButton className="mx-[7px]">
              <IoPlaySkipBackSharp />
            </IconButton>
            <button
              className="rounded-full flex items-center justify-center size-10 border-2 border-[--player-text] text-[--player-text] hover:text-[--link-text-hover] hover:border-[--link-text-hover]"
              onClick={handlePlayClick}
            >
              {!isPlaying && <IoPlay className="ml-0.5 size-5" />}
              {isPlaying && <MdPause className="size-6" />}
            </button>
            <IconButton className="mx-[7px]">
              <IoPlaySkipForwardSharp />
            </IconButton>
            {!repeatOne && (
              <IconButton
                className="mx-[7px]"
                active={repeat}
                onClick={() => {
                  if (repeat) {
                    dispatch(setRepeat(false));
                    dispatch(setRepeatOne(true));
                  } else {
                    dispatch(setRepeat(true));
                  }
                }}
              >
                <PiRepeat className="size-5" />
              </IconButton>
            )}
            {repeatOne && (
              <IconButton className="mx-[7px]">
                <PiRepeatOnce
                  className="size-5 text-[--link-text-hover]"
                  onClick={() => dispatch(setRepeatOne(false))}
                />
              </IconButton>
            )}
          </div>

          <DurationBar />
        </div>
        <div className="w-[30%] grow-0">
          <div className="flex items-center justify-end">
            <IconButton>
              <PiMicrophoneStage />
            </IconButton>
            <IconButton>
              <TbPictureInPicture size="1.2rem" />
            </IconButton>
            <VolumeBar />
            <div className="mx-5 h-[33px] w-[1px] bg-[--border-player]"></div>
            <button
              className={clsx(
                'rounded flex items-center justify-center',
                'size-[30px] text-[--player-text]',
                'hover:bg-[hsla(0,0%,100%,.2)]',
                showQueue ? 'bg-[--purple-primary]' : 'bg-[hsla(0,0%,100%,.1)]'
              )}
              onClick={handleShowQueue}
            >
              <MdQueueMusic size="1.15rem" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
