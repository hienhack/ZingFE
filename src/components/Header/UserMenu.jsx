import Tippy from '@tippyjs/react';
import { FiLogOut, FiUpload, FiUser } from 'react-icons/fi';
import { MdBlockFlipped } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticate, logout } from '../../redux/slice/userSlice';

function UserMenu() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(setAuthenticate(true));
  }

  function handleLogout() {
    // dispatch(logout());
    console.log('logout');
    localStorage.removeItem('token');
    location.reload();
  }

  return (
    <Tippy
      animation={false}
      trigger="click"
      placement="bottom-end"
      interactive
      render={(attrs) => (
        <div
          className="w-[300px] h-[495px] rounded-lg overflow-x-auto scrollable-container"
          tabIndex="-1"
          {...attrs}
        >
          <div className="w-full p-[6px] bg-[--primary-bg] flex-col">
            {!isLoggedIn && (
              <button
                className="w-[calc(100%-20px)] mx-2.5 mt-[10px] mb-[20px] rounded-[20px] text-sm font-bold text-white bg-[--purple-primary] py-3"
                onClick={handleLogin}
              >
                Đăng nhập
              </button>
            )}
            {isLoggedIn && (
              <div className="p-2.5 mb-2.5">
                <div className="flex items-center gap-2 mb-4">
                  <img className="w-[64px] rounded-full aspect-square bg-white"></img>
                  <div>
                    <p className="leading-[19px] font-bold text-[--text-primary] mb-1.5">Hien</p>
                    <div className="px-1 rounded-sm font-black tracking-[2px] bg-teal-600 text-gray-100 text-[11px] ">
                      BASIC
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="block bg-[--alpha-bg] text-[--text-primary] text-center rounded-[22px] text-[13px] leading-5 align-middle py-1.5 font-medium"
                >
                  Nâng cấp tài khoản
                </a>
              </div>
            )}
            <div className="px-2.5">
              <h3 className="text-[--text-primary] font-bold mb-2">Đăng ký gói</h3>
              {/* <h3 className="text-[--text-primary] font-bold mb-2">Nâng cấp gói</h3> */}
              <div className="w-full mb-3 bg-cyan-200 py-4 px-5 rounded-xl">
                <h2 className="flex items-center gap-1">
                  <span className="text-[--plus-package] text-2xl font-bold">Zing MP3</span>
                  <div className="rounded-md px-2 text-white font-bold bg-[--plus-package] text-sm -tracking-tighter">
                    PLUS
                  </div>
                </h2>
                <h3 className="font-semibold text-sm text-[#141414] mb-1">Chỉ từ 13.000 đ/tháng</h3>
                <h3 className="text-sm text-[rgba(20,20,20,.8)] mb-4">
                  Nghe nhạc chất lượng cao nhất, không quảng cáo
                </h3>
                <a
                  className="bg-[--plus-package] text-[--text-primary] px-6 py-1.5 font-bold text-[13px] leading-5 block rounded-full w-fit"
                  href="/"
                >
                  Tìm hiểu thêm
                </a>
              </div>
              <div className="w-full mb-3 bg-yellow-100 py-4 px-5 rounded-xl">
                <h2 className="flex items-center gap-1">
                  <span className="text-[--premium-package] text-2xl font-bold">Zing MP3</span>
                  <div className="rounded-md px-2 text-white font-bold bg-[--premium-package] text-sm -tracking-tighter">
                    PREMIUM
                  </div>
                </h2>
                <h3 className="font-semibold text-sm text-[#141414] mb-1">Chỉ từ 41.000 đ/tháng</h3>
                <h3 className="text-sm text-[rgba(20,20,20,.8)] mb-4">
                  Toàn bộ đặc quyền Plus cùng kho nhạc premium
                </h3>
                <a
                  className="bg-[--premium-package] text-[--text-primary] px-6 py-1.5 font-bold text-[13px] leading-5 block rounded-full w-fit"
                  href="/"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            {isLoggedIn && (
              <>
                <div className="h-[1px] bg-[--border-primary] w-[calc(100%-24px)] my-2.5 mx-auto"></div>
                <h3 className="text-[--text-primary] font-bold mb-2 ps-2.5">Cá nhân</h3>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="/">
                      <button className="flex items-center h-11 px-2.5 py-3 gap-3">
                        <MdBlockFlipped className="w-5 h-5" />
                        <span>Danh sách chặn</span>
                      </button>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/">
                      <button className="flex items-center h-11 px-2.5 py-3 gap-3">
                        <FiUpload className="w-5 h-5" />
                        <span>Tải lên</span>
                      </button>
                    </a>
                  </li>
                  <li>
                    <div className="h-[1px] bg-[--border-primary] w-[calc(100%-24px)] my-2.5 mx-auto"></div>
                  </li>
                  <li className="menu-item">
                    <button
                      className="flex items-center h-11 px-2.5 py-3 gap-3 w-full"
                      onClick={handleLogout}
                    >
                      <FiLogOut className="w-5 h-5" />
                      <span>Đăng xuất</span>
                    </button>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    >
      <button className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-slate-300">
        <img
          src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.10.21/static/media/user-default.3ff115bb.png"
          className="rounded-full"
        />
      </button>
    </Tippy>
  );
}

export default UserMenu;
