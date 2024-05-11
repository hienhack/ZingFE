import Tippy from '@tippyjs/react';
import { Popover, PopoverContent, PopoverHandler } from '../Popover';
import { GoDownload } from 'react-icons/go';
import { RiPlayList2Fill } from 'react-icons/ri';
import { FiLink } from 'react-icons/fi';

function PlaylistMenu({ playlist, onShow, onHide, children }) {
  function addToQueue(playlist) {}

  return (
    <Popover autoClose={true} onHide={onHide} onShow={onShow}>
      <PopoverHandler>
        <Tippy content="Khác" theme="root">
          {children}
        </Tippy>
      </PopoverHandler>
      <PopoverContent>
        <div className="w-[250px] rounded-lg bg-[--primary-bg]">
          <div className="py-2.5 text-[--navigation-text]">
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
                <GoDownload className="size-4" />
              </div>
              <h3 className="text-sm">Tải xuống</h3>
            </div>
            <div className="px-[15px] py-2.5 hover:bg-[--alpha-bg] hover:text-[--text-item-hover] flex items-center cursor-pointer">
              <div className="size-4 mr-[15px]">
                <FiLink className="size-4" />
              </div>
              <h3 className="text-sm grow">Sao chép link</h3>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default PlaylistMenu;
