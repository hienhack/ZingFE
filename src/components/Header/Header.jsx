import { FiUser } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import clsx from 'clsx';
import './style.scss';

function Header({ isSticky }) {
  return (
    <div className={clsx('header', isSticky && 'is-sticky')}>
      <div>
        <span className="text-white">a</span>
      </div>
      <div className="flex gap-3 flex-row-reverse">
        <button className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-slate-300">
          <FiUser className="text-slate-700" size={'1.1rem'}></FiUser>
        </button>
        <button className="w-[38px] h-[38px] rounded-full bg-slate-600 bg-opacity-25 flex items-center justify-center">
          <FiSettings className="text-slate-300" size={'1.1rem'}></FiSettings>
        </button>
        <a
          className="h-10 rounded-full w-fit px-5 bg-slate-800 bg-opacity-90 flex items-center"
          href="#"
        >
          <span className="text-purple-500 font-bold text-sm">Tải bản Windows dddi</span>
        </a>
        <a className="h-10 rounded-full w-fit px-5 flex items-center bg-purple-500" href="#">
          <span className="text-white font-bold text-sm">Nâng cấp tài khoản</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
