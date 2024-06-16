import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { ErrorMessage } from '@hookform/error-message';
import { authRequest } from '../../api';
import { useState } from 'react';

function Register({ onSuccess }) {
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
      .post('/users/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        clientId: 'user-service',
        clientSecret: 'jSLIfcd5eq2t6e0CzNid3QKUaQNP1m0x',
      })
      .then((data) => {
        reset();
        onSuccess();
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status == 409) {
          setError('Email đã được sử dụng');
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
    </div>
  );
}

export default Register;
