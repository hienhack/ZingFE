import { IconButton } from '../Button';
import './style.scss';
import { IoIosAddCircleOutline, IoMdAlarm } from 'react-icons/io';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { GoChevronRight, GoDownload, GoHeart, GoTrash } from 'react-icons/go';
import clsx from 'clsx';
import { PremiumIcon } from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { QueueTab, setShowQueue, showHistory, showSongQueue } from '../../redux/slice/layoutSlice';
import Thumbnail from '../Media/Thumbnail';
import Tippy from '@tippyjs/react';
import { setCurrentSong, setQueue } from '../../redux/slice/featureSlice';
import { setPlaying } from '../../redux/slice/statusSlice';
import { useContext } from 'react';
import { AudioContext } from '../../Context/AudioContext';

function Media({ song, active }) {
  return (
    <div className="hover:bg-[--alpha-bg]">
      <div
        className={clsx(
          'p-2 flex items-center rounded-[5px] group',
          active && 'bg-[--purple-primary]'
        )}
      >
        {/* <div className="size-[40px] min-w-[40px]"> */}
        <Thumbnail song={song} active={active} />
        {/* </div> */}
        <div className="flex flex-col justify-center overflow-hidden w-full">
          <Link to="/">
            <div className="text-white font-semibold text-sm hover:text-[--link-text-hover] text-ellipsis align-text-top truncate">
              <span>{song.title}</span>
              {song.isPremium && <PremiumIcon className="ml-[5px] inline" />}
            </div>
          </Link>
          <div className="truncate text-[hsla(0,0%,100%,.6)] leading-[1.33] p-0 mt-[3px] text-xs">
            {song.artists.map((s, index) => (
              <>
                <Link
                  key={index}
                  className={clsx(
                    'hover:underline text-xs inline-block p-0',
                    !active && 'hover:text-[--link-text-hover]'
                  )}
                  to={'/nghe-si/' + s.id}
                >
                  {s.name}
                </Link>
                {index < song.artists.length - 1 && ', '}
              </>
            ))}
          </div>
        </div>
        <div className="items-center ml-2.5 justify-between hidden group-[:hover]:flex">
          <div className="grow flex items-center">
            <IconButton className="mx-1 text-[--text-primary]">
              <GoHeart />
            </IconButton>
          </div>
          <div className="grow flex items-center">
            <IconButton className="mx-1 text-[--text-primary]">
              <HiOutlineDotsHorizontal />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayerQueue() {
  const dispatch = useDispatch();
  const { currentSong, queue } = useSelector((state) => state.feature);
  const queueTab = useSelector((state) => state.layout.queueTab);
  const currentPlaylist = useSelector((state) => state.feature.currentPlaylist);
  const { pause } = useContext(AudioContext);

  function removeQueue() {
    pause();
    dispatch(setShowQueue(false));
    dispatch(setQueue([]));
    dispatch(setCurrentSong(null));
  }

  return (
    <div className="player-queue">
      <div className="py-[14px]">
        <div className="flex items-center px-2">
          <div className="navigation w-full p-[3px] bg-[--alpha-bg] flex rounded-full">
            <div
              className={clsx(
                'py-[5px] cursor-pointer text-[--navigation-text] rounded-full grow',
                queueTab == QueueTab.SONG_QUEUE && 'active'
              )}
              onClick={() => dispatch(showSongQueue())}
            >
              <h6 className="text-center text-[12px]">Danh sách phát</h6>
            </div>
            <div
              className={clsx(
                'py-[5px] cursor-pointer text-[--navigation-text] rounded-full grow',
                queueTab == QueueTab.HISTORY && 'active'
              )}
              onClick={() => dispatch(showHistory())}
            >
              <h6 className="text-center text-[12px]">Nghe gần đây</h6>
            </div>
          </div>
          <IconButton className="ml-2 my-[5px] bg-[--alpha-bg]">
            <IoMdAlarm />
          </IconButton>
          <Tippy
            render={(attrs) => (
              <div className="w-[240px] rounded-lg bg-[--primary-bg]">
                <div className="py-2.5 text-[--navigation-text]">
                  <div
                    className="px-[15px] py-2.5 hover:bg-[--alpha-bg] hover:text-[--text-item-hover] flex items-center cursor-pointer"
                    onClick={removeQueue}
                  >
                    <div className="size-4 mr-[15px]">
                      <GoTrash className="size-4" />
                    </div>
                    <h3 className="text-sm">Xóa danh sách phát</h3>
                  </div>
                  <div className="px-[15px] py-2.5 hover:bg-[--alpha-bg] hover:text-[--text-item-hover] flex items-center cursor-pointer">
                    <div className="size-4 mr-[15px]">
                      <GoDownload className="size-4" />
                    </div>
                    <h3 className="text-sm">Tải xuống danh sách phát</h3>
                  </div>
                  <div className="px-[15px] py-2.5 hover:bg-[--alpha-bg] hover:text-[--text-item-hover] flex items-center cursor-pointer">
                    <div className="size-4 mr-[15px]">
                      <IoIosAddCircleOutline className="size-4" />
                    </div>
                    <h3 className="text-sm grow">Thêm vào playlist</h3>
                    <button className="block w-fit">
                      <GoChevronRight className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
            animation={false}
            trigger="click"
            placement="bottom-end"
            interactive
            offset={[0, -10]}
          >
            <IconButton className="ml-2 my-[5px] bg-[--alpha-bg]">
              <HiOutlineDotsHorizontal />
            </IconButton>
            {/* <button className="text-white">adsf</button> */}
          </Tippy>
        </div>
      </div>
      <div className="h-full overflow-y-scroll relative scrollable-container px-2">
        {queueTab == QueueTab.SONG_QUEUE &&
          queue.map((song, index) => (
            <div
              key={index}
              className={clsx(
                song.id == currentSong.id && 'sticky top-0 bg-[--queue-player-popup-bg] z-10'
              )}
            >
              <Media song={song} active={song.id == currentSong.id} />
              {song.id == currentSong.id && (
                <div className="mt-[15px] mx-2 pb-[5px]">
                  <h3 className="font-bold text-sm text-[--text-primary]">Tiếp theo</h3>
                  {currentPlaylist && (
                    <h3 className="flex text-[--text-muted] text-sm font-normal gap-1">
                      <span>Từ playlist</span>
                      <Link className="text-[--link-text-hover] font-medium">Today</Link>
                    </h3>
                  )}
                </div>
              )}
            </div>
          ))}
        {queueTab == QueueTab.HISTORY &&
          queue.map((song, index) => (
            <div key={index}>
              <Media song={song} active={song.id == currentSong.id} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default PlayerQueue;
