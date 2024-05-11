import Tippy from '@tippyjs/react';
import { Popover, PopoverContent, PopoverHandler } from '../Popover';
import { RiPlayList2Fill } from 'react-icons/ri';
import { GoChevronRight, GoDownload, GoPlus, GoPlusCircle } from 'react-icons/go';
import { FiLink, FiPlus } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import { resolveCountDisplay } from '../../util';
import { VscInsert } from 'react-icons/vsc';
import { BsDisc } from 'react-icons/bs';

function AddToPlaylistMenu() {
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div
      className="w-[240px] rounded-lg py-2.5 bg-[--primary-bg]"
      onClick={() => console.log('Clicked clicked')}
    >
      <div className="px-[15px]">
        <input
          className="h-[35px] align-middle text-sm text-[--text-primary] px-[15px] block bg-[--alpha-bg] outline-none rounded-full border border-[--border-primary]"
          placeholder="Tìm playlist"
          onClick={handleClick}
          onFocus={(e) => e.stopPropagation()}
        ></input>
      </div>
      <div className="hover:bg-[--alpha-bg] px-[15px] py-2.5 text-[--text-primary] flex items-center mt-2.5">
        <div className="flex items-center justify-center rounded-full size-6 bg-[--purple-primary] mr-2.5">
          <FiPlus className="" />
        </div>
        <span className="text-sm">Tạo playlist mới</span>
      </div>
      <ul className="h-[150px] overflow-scroll scrollable-container flex flex-col ">
        <li className="text-center text-sm h-full flex flex-col items-center justify-center">
          <BsDisc className="text-[--text-secondary] size-6" />
          <h3 className="text-xs font-light text-[--text-secondary] mt-2">Không có playlist</h3>
        </li>
      </ul>
    </div>
  );
}

function SongMenu({ song, onHide, onShow, children }) {
  return (
    <Popover autoClose={true} onHide={onHide} onShow={onShow}>
      <PopoverHandler>
        <Tippy content="Khác" theme="root">
          {children}
        </Tippy>
      </PopoverHandler>
      <PopoverContent>
        <div className="w-[280px] rounded-lg bg-[--primary-bg] text-[--navigation-text]">
          <Popover trigger="mouseenter" placement="left" offset={[-10, -5]}>
            <PopoverHandler>
              <div className="px-[15px] pt-[15px] flex items-center select-none">
                <div className="mr-2.5 size-10 min-w-10">
                  <img
                    className="size-10 object-cover object-center rounded"
                    src={song.thumbnail}
                  ></img>
                </div>
                <div className="w-[200px]">
                  <h3 className="text-sm font-medium truncate">{song.title}</h3>
                  <div className="flex items-center text-[--text-secondary] font-light text-xs space-x-2">
                    <div className="flex items-center">
                      <IoMdHeartEmpty size={15} />
                      <span className="leading-3">{resolveCountDisplay(song.liked)}</span>
                    </div>
                    <div className="flex items-center">
                      <FaHeadphonesSimple />
                      <span className="leading-3">{resolveCountDisplay(song.played)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverHandler>
            <PopoverContent>
              <div className="w-[200px] h-[300px] rounded-lg bg-[--primary-bg]"></div>
            </PopoverContent>
          </Popover>
          <div className="border-t border-[--border-primary] mx-[15px] my-2.5"></div>
          <div
            className="px-[15px] py-2.5 hover:bg-[--alpha-bg] hover:text-[--text-item-hover] flex items-center cursor-pointer"
            onClick={(e) => {
              addToQueue(playlist);
            }}
          >
            <div className="size-4 mr-[15px]">
              <RiPlayList2Fill className="size-4" />
            </div>
            <h3 className="text-sm">Thêm vào danh sách phát</h3>
          </div>
          <div className="px-[15px] py-2.5 hover:bg-[--alpha-bg] hover:text-[--text-item-hover] flex items-center cursor-pointer">
            <div className="size-4 mr-[15px]">
              <VscInsert className="size-4" />
            </div>
            <h3 className="text-sm">Phát kế tiếp</h3>
          </div>
          <div className="px-[15px] py-2.5 hover:bg-[--alpha-bg] hover:text-[--text-item-hover] flex items-center cursor-pointer">
            <div className="size-4 mr-[15px]">
              <GoDownload className="size-4" />
            </div>
            <h3 className="text-sm">Tải xuống</h3>
          </div>
          <Popover trigger="mouseenter" placement="right">
            <PopoverHandler>
              <div className="px-[15px] py-2.5 hover:bg-[--alpha-bg] hover:text-[--text-item-hover] flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                  <div className="size-4 mr-[15px]">
                    <GoPlusCircle className="size-4" />
                  </div>
                  <h3 className="text-sm grow">Thêm vào playlist</h3>
                </div>
                <GoChevronRight className="size-5" />
              </div>
            </PopoverHandler>
            <PopoverContent>
              <AddToPlaylistMenu />
            </PopoverContent>
          </Popover>

          <div className="px-[15px] py-2.5 hover:bg-[--alpha-bg] hover:text-[--text-item-hover] flex items-center cursor-pointer">
            <div className="size-4 mr-[15px]">
              <FiLink className="size-4" />
            </div>
            <h3 className="text-sm grow">Sao chép link</h3>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default SongMenu;
