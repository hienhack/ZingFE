import { FiFileText, FiSettings } from 'react-icons/fi';
import { Popover, PopoverContent, PopoverHandler } from '../Popover';
import Tooltip from '../Tooltip';
import { GoArrowUpRight, GoChevronRight } from 'react-icons/go';
import { HiOutlinePlayCircle } from 'react-icons/hi2';
import { PiPaintBrushBroad } from 'react-icons/pi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { TbBadgeAd, TbPhone } from 'react-icons/tb';
import { FaRegFlag } from 'react-icons/fa';

function SettingMenu() {
  return (
    <Popover offset={[0, 10]}>
      <PopoverHandler>
        <Tooltip content="Cài đặt">
          <button className="w-10 h-10 rounded-full bg-[--alpha-bg] bg-opacity-25 flex items-center justify-center mr-2.5">
            <FiSettings className="text-slate-300 size-[18px]"></FiSettings>
          </button>
        </Tooltip>
      </PopoverHandler>
      <PopoverContent>
        <div className="w-[300px] p-1.5 bg-[--primary-bg] rounded-lg">
          <ul>
            <li className="text-[--navigation-text] rounded hover:bg-[--alpha-bg]">
              <Popover trigger="mouseenter" placement="left-start" offset={[-8, -4]}>
                <PopoverHandler>
                  <button className="w-full flex items-center justify-between px-2.5 py-3 text-sm whitespace-nowrap hover:filter-none">
                    <div className="flex items-center">
                      <div className="size-5 flex items-center mr-2.5">
                        <HiOutlinePlayCircle className="text-[24px]" />
                      </div>
                      <span>Trình phát nhạc</span>
                    </div>
                    <GoChevronRight className="text-[16px]" />
                  </button>
                </PopoverHandler>
                <PopoverContent>
                  <div className="w-[300px] p-1.5 bg-[--primary-bg] h-20 rounded-lg"></div>
                </PopoverContent>
              </Popover>
            </li>
            <li className="text-[--navigation-text] rounded hover:bg-[--alpha-bg]">
              <Popover trigger="mouseenter" placement="left-start" offset={[-8, -4]}>
                <PopoverHandler>
                  <button className="w-full flex items-center justify-between px-2.5 py-3 text-sm whitespace-nowrap hover:filter-none">
                    <div className="flex items-center">
                      <div className="size-5 flex items-center mr-2.5">
                        <PiPaintBrushBroad className="text-[16px]" />
                      </div>
                      <span>Giao diện</span>
                    </div>
                    <GoChevronRight className="text-[16px]" />
                  </button>
                </PopoverHandler>
                <PopoverContent>
                  <div className="w-[300px] p-1.5 bg-[--primary-bg] h-20 rounded-lg"></div>
                </PopoverContent>
              </Popover>
            </li>
            <li className="mx-3 my-3 h-[2px] bg-[--border-primary]"></li>
            <li className="text-[--text-secondary] hover:text-[--navigation-text] rounded hover:bg-[--alpha-bg]">
              <button className="w-full flex items-center justify-between px-2.5 py-3 text-sm whitespace-nowrap hover:filter-none">
                <div className="flex items-center">
                  <div className="size-5 flex items-center mr-2.5">
                    <AiOutlineInfoCircle className="text-[20px]" />
                  </div>
                  <span>Giới thiệu</span>
                </div>
                {/* <GoChevronRight className="text-[16px]" /> */}
              </button>
            </li>
            <li className="text-[--text-secondary] hover:text-[--navigation-text] rounded hover:bg-[--alpha-bg]">
              <button className="w-full flex items-center justify-between px-2.5 py-3 text-sm whitespace-nowrap hover:filter-none">
                <div className="flex items-center">
                  <div className="size-5 flex items-center mr-2.5">
                    <FiFileText className="text-[18px]" />
                  </div>
                  <span>Thỏa thuận sử dụng</span>
                </div>
                <GoArrowUpRight className="text-[16px]" />
              </button>
            </li>

            <li className="text-[--text-secondary] hover:text-[--navigation-text] rounded hover:bg-[--alpha-bg]">
              <button className="w-full flex items-center justify-between px-2.5 py-3 text-sm whitespace-nowrap hover:filter-none">
                <div className="flex items-center">
                  <div className="size-5 flex items-center mr-2.5">
                    <FaRegFlag className="text-[16px]" />
                  </div>
                  <span>Báo cáo vi phạm bản quyền</span>
                </div>
                <GoArrowUpRight className="text-[16px]" />
              </button>
            </li>
            <li className="text-[--text-secondary] hover:text-[--navigation-text] rounded hover:bg-[--alpha-bg]">
              <button className="w-full flex items-center justify-between px-2.5 py-3 text-sm whitespace-nowrap hover:filter-none">
                <div className="flex items-center">
                  <div className="size-5 flex items-center mr-2.5">
                    <TbBadgeAd className="text-[20px]" />
                  </div>
                  <span>Quảng cáo</span>
                </div>
                <GoArrowUpRight className="text-[16px]" />
              </button>
            </li>
            <li className="text-[--text-secondary] hover:text-[--navigation-text] rounded hover:bg-[--alpha-bg]">
              <button className="w-full flex items-center justify-between px-2.5 py-3 text-sm whitespace-nowrap hover:filter-none">
                <div className="flex items-center">
                  <div className="size-5 flex items-center mr-2.5">
                    <TbPhone className="text-[20px]" />
                  </div>
                  <span>Liên hệ</span>
                </div>
                <GoArrowUpRight className="text-[16px]" />
              </button>
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default SettingMenu;
