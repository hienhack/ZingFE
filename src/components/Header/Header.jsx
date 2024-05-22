import clsx from 'clsx';
import './style.scss';
import UserMenu from './UserMenu';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Search from './Search';
import SettingMenu from './SettingMenu';

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
        <div className="max-w-[440px] w-full mr-2">
          <Search></Search>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <UserMenu />
        <SettingMenu />
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
