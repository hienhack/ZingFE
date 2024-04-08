import classNames from 'classnames/bind';
// import styles from './style.module.css';
// const cx = classNames.bind(styles);

function Header() {
  return (
    <div className="h-[70px] bg-[var(--layout-header-bg)] w-full flex items-center justify-between px-[59px]">
      <div></div>
      <div className="flex gap-3 flex-row-reverse">
        <div className="w-[38px] h-[38px] rounded-full bg-white"></div>
        <div className="w-[38px] h-[38px] rounded-full bg-white"></div>
        <a
          className="h-10 rounded-full w-fit px-6 flex items-center border-purple-500 border"
          href="#"
        >
          <span className="text-purple-500 font-bold capitalize text-sm">Tải bản window đd</span>
        </a>
        <a className="h-10 rounded-full w-fit px-6 flex items-center bg-purple-500" href="#">
          <span className="text-white font-bold capitalize text-sm">Nâng cấp tài khoản</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
