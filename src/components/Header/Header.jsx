import { FiSettings } from 'react-icons/fi';
import clsx from 'clsx';
import './style.scss';
import UserMenu from './UserMenu';
import { MdOutlineInstallDesktop, MdOutlineWest } from 'react-icons/md';
import { GoArrowLeft, GoArrowRight, GoSearch } from 'react-icons/go';

function Header({ isSticky }) {
  return (
    <div className={clsx('header', isSticky && 'is-sticky')}>
      <div className="grow text-[--text-primary] flex items-center">
        <button className="min-w-11">
          <GoArrowLeft className="size-6" />
        </button>
        <button className="min-w-11 disabled">
          <GoArrowRight className="size-6" />
        </button>
        <form className="w-full">
          <div className="flex items-center w-full max-w-[440px] h-10 rounded-full bg-[--alpha-bg] mr-2">
            <button className="px-2 text-[--text-placeholder]">
              <GoSearch className="size-6" />
            </button>
            <div className="w-full">
              <input
                className="bg-transparent outline-none text-sm w-full placeholder:text-[--text-placeholder] text-[--search-text]"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
              ></input>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-row-reverse">
        <UserMenu></UserMenu>
        <button className="w-10 h-10 rounded-full bg-[--alpha-bg] bg-opacity-25 flex items-center justify-center mr-2.5">
          <FiSettings className="text-slate-300 size-[18px]"></FiSettings>
        </button>
        <a
          className="h-10 rounded-full w-fit px-6 bg-[--alpha-bg] bg-opacity-90 flex items-center text-[--link-text-hover] gap-1 mr-3"
          href="#"
        >
          <MdOutlineInstallDesktop className="size-5" />
          <span className="font-semibold text-sm">Tải bản Windows</span>
        </a>
        <a
          className="h-10 rounded-full w-fit px-5 py-2.5 flex items-center bg-purple-500 hover:opacity-90 mr-3"
          href="#"
        >
          <span className="text-white font-bold text-sm">Nâng cấp tài khoản</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
