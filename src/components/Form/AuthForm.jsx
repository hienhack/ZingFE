import { useState } from 'react';
import Modal from '../Modal/Modal';
import Login from './Login';
import Register from './Register';
import './style.scss';
import { set } from 'lodash';

function AuthForm({ open, handleOpen }) {
  const [isLogin, setLogin] = useState(true);

  return (
    <Modal open={open} handleOpen={handleOpen}>
      <div className="auth-modal">
        <div className="rounded-l-2xl bg-[--layout-bg] p-10">
          <h1 className="mt-5 text-gray-400 font-bold text-2xl">
            {isLogin ? 'Đăng nhập' : 'Đăng ký'}
          </h1>
          <h6 className="mt-5 text-gray-400 font-medium text-sm">
            {isLogin
              ? 'Nhập email và mật khẩu của bạn để đăng nhập'
              : 'Hãy nhập tất cả thông tin để có thể đăng ký'}
          </h6>
          {isLogin ? <Login /> : <Register onSuccess={() => setLogin(true)} />}
          <div className="flex items-center w-full gap-2 mt-4">
            <span className="text-gray-400 text-[13px]">
              {isLogin ? 'Bạn chưa có tài khoản?' : 'Ban đã có tài khoản?'}
            </span>
            <button
              className="text-[--purple-primary] text-[13px] font-semibold"
              onClick={() => setLogin(!isLogin)}
            >
              {isLogin ? 'Đăng ký' : 'Đăng nhập'}
            </button>
          </div>
        </div>
        <div className="cover">
          <div className="logo"></div>
          <div className="bg-[--layout-bg]">
            <div className="image"></div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AuthForm;
