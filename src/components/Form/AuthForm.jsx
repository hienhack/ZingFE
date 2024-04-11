import { useState } from 'react';
import Modal from '../Modal/Modal';
import Login from './Login';
import Register from './Register';
import './style.scss';

function AuthForm({ open, handleOpen }) {
  const [formType, setFormType] = useState('login');

  return (
    <Modal open={open} handleOpen={handleOpen}>
      <div className="auth-modal">
        {formType == 'login' && <Login toRegister={() => setFormType('register')} />}
        {formType == 'register' && <Register toSignin={() => setFormType('login')} />}
        <div className="cover">
          <div className="logo"></div>
          <div className="image"></div>
        </div>
      </div>
    </Modal>
  );
}

export default AuthForm;
