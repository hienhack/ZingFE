import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { ErrorMessage } from '@hookform/error-message';
import { authRequest } from '../../api';
import { useState } from 'react';

function Register({ toSignin }) {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  function onSubmit(data) {
    setProcessing(true);
    authRequest
      .post('/register', {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((data) => {
        reset();
        toSignin();
      })
      .catch((e) => {
        if (e.response.status == 401) {
          setError('Email đã được sử dụng');
        }
      })
      .finally(() => {
        setProcessing(false);
      });
  }

  return (
    <div className="rounded-l-2xl bg-[--layout-bg] p-10">
      <h1 className="mt-5 text-gray-400 font-bold text-2xl">Đăng ký</h1>
      <h6 className="mt-5 text-gray-400 font-medium text-sm">
        Hãy nhập tất cả thông tin để có thể đăng ký
      </h6>
      <small className="text-red-600 italic block my-1">{error}</small>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 flex flex-col gap-5">
          <div>
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <small className="text-red-600 italic block mb-2">{message}</small>
              )}
            />
            <FormInput
              {...register('name', {
                required: { value: true, message: 'Tên người đùng không được bỏ trống' },
              })}
              error={errors.name}
              placeholder="Tên người dùng"
              readOnly={processing}
            ></FormInput>
          </div>
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
              readOnly={processing}
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
              readOnly={processing}
            ></FormInput>
          </div>
          <div>
            <ErrorMessage
              errors={errors}
              name="confirm"
              render={({ message }) => (
                <small className="text-red-600 italic block mb-2">{message}</small>
              )}
            />
            <FormInput
              {...register('confirm', {
                required: {
                  value: true,
                  message: 'Xác nhận mật khẩu không được bỏ trống',
                },
                validate: (value) => {
                  if (watch('password') != value) return 'Mật khẩu không khớp';
                },
              })}
              error={errors.confirm}
              placeholder="Xác nhận mật khẩu"
              type="password"
              readOnly={processing}
            ></FormInput>
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 bg-[--purple-primary] text-gray-300 font-bold text-sm w-full p-3 rounded-md"
          disabled={processing}
        >
          Đăng ký
        </button>
      </form>
      <div className="flex items-center w-full gap-2 mt-4">
        <span className="text-gray-400 text-[13px]">Bạn đã có tài khoản?</span>
        <button className="text-[--purple-primary] text-[13px] font-semibold" onClick={toSignin}>
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Register;
