import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { ErrorMessage } from '@hookform/error-message';
import { authRequest } from '../../api';
import { useState } from 'react';
import { login, setAuthenticate } from '../../redux/slice/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  function onSubmit(data) {
    setProcessing(true);
    authRequest
      .post('/auth/token', {
        client_id: 'user-service',
        client_secret: 'jSLIfcd5eq2t6e0CzNid3QKUaQNP1m0x',
        grant_type: 'password',
        username: data.email,
        password: data.password,
      })
      .then((res) => {
        dispatch(login(res.data.access_token));
        dispatch(setAuthenticate(false));
      })
      .catch((error) => {
        if (error.response.status == 401) {
          setError('Email hoặc mật khẩu không đúng');
        }
      })
      .finally(() => {
        setProcessing(false);
      });
  }

  return (
    <div>
      <small className="text-red-600 italic block my-1">{error}</small>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 flex flex-col gap-5">
          <div>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <small className="text-red-600 italic block mb-2">{message}</small>
              )}
            />
            <FormInput
              {...register('email', {
                required: { value: true, message: 'Email không được bỏ trống' },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Email không hợp lệ',
                },
              })}
              error={errors.email}
              placeholder="Email"
            ></FormInput>
          </div>
          <div>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <small className="text-red-600 italic block mb-2">{message}</small>
              )}
            />
            <FormInput
              {...register('password', {
                required: {
                  value: true,
                  message: 'Mật khẩu không được bỏ trống',
                },
                minLength: {
                  value: 8,
                  message: 'Mật khẩu phải chứa ít nhất 8 kí tự',
                },
              })}
              error={errors.password}
              placeholder="Mật khẩu"
              type="password"
            ></FormInput>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button type="button" className="text-gray-400 text-xs">
            Quên mật khẩu?
          </button>
        </div>
        <button
          type="submit"
          className="mt-5 bg-[--purple-primary] text-gray-300 font-bold text-sm w-full p-3 rounded-md"
          disabled={processing}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default Login;
