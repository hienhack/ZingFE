import './style.css';
import { IoPlayCircleOutline } from 'react-icons/io5';

function Sidebar() {
  return (
    <div className="h-screen w-full bg-[var(--sidebar-bg)]">
      <div className="h-[70px] pl-7 pt-3">
        <button>
          <div className="zing-logo"></div>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="border-l-[3px] border-transparent px-[21px] py-[12px] flex items-center">
          <div className="w-6 h-6 mr-3 flex items-center"></div>
          <span className="text-sm font-medium text-gray-50">Thư Viện</span>
        </div>
        <div className="border-l-[3px] border-purple-700 px-[21px] py-[12px] flex items-center bg-slate-200 bg-opacity-20">
          <div className="w-6 h-6 mr-3"></div>
          <span className="text-sm font-medium text-gray-50">Khám Phá</span>
        </div>
        <div className="border-l-[3px] border-transparent px-[21px] py-[12px] flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3"></div>
            <span className="text-sm font-medium text-gray-50">#zingchart</span>
          </div>
          <div className="h-6 w-6 flex items-center justify-end">
            <IoPlayCircleOutline className="text-white size-6" />
          </div>
        </div>
        <div className="border-l-[3px] border-transparent px-[21px] py-[12px] flex items-center">
          <div className="w-6 h-6 mr-3 flex items-center"></div>

          <span className="text-sm font-medium text-gray-50">Radio</span>
          <div className="ml-2">
            <img src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg"></img>
          </div>
        </div>
        <div className="sidebar-divider px-6 py-4">
          <hr></hr>
        </div>
        <div className="mx-4 my-6 rounded-lg p-4 bg-purple-600">
          <p className="text-center font-bold text-white text-xs leading-5">
            Đăng nhập để khám phá playlist dành riêng cho bạn
          </p>
          <div className="px-4 mt-3">
            <button className="border border-white p-1 text-white text-xs outline-1 rounded-full w-full font-bold hover:opacity-80">
              ĐĂNG NHẬP
            </button>
          </div>
        </div>
        <div className="sidebar-divider">
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
