import { FiSettings } from 'react-icons/fi';
import clsx from 'clsx';
import './style.scss';
import UserMenu from './UserMenu';
import { MdOutlineInstallDesktop, MdOutlineWest } from 'react-icons/md';
import { GoArrowLeft, GoArrowRight, GoSearch } from 'react-icons/go';
import Search from './Search';
import { authRequest, request } from '../../api';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Header({ isSticky }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;
    authRequest
      .post('/auth/token/introspect', {
        client_id: 'user-service',
        client_secret: 'jSLIfcd5eq2t6e0CzNid3QKUaQNP1m0x',
        grant_type: 'password',
      })
      .then((res) => {})
      .catch((error) => {});
  }, []);

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
        <UserMenu></UserMenu>
        <button className="w-10 h-10 rounded-full bg-[--alpha-bg] bg-opacity-25 flex items-center justify-center mr-2.5">
          <FiSettings className="text-slate-300 size-[18px]"></FiSettings>
        </button>
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
