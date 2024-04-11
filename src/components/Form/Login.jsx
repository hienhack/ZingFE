import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { ErrorMessage } from '@hookform/error-message';

function Login({ toRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="rounded-l-2xl bg-[--layout-bg] p-10">
      <h1 className="mt-5 text-gray-400 font-bold text-2xl">Đăng nhập</h1>
      <h6 className="mt-5 text-gray-400 font-medium text-sm">
        Nhập email và mật khẩu của bạn để đăng nhập
      </h6>
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
        >
          Đăng nhập
        </button>
      </form>
      <div className="flex items-center w-full gap-2 mt-4">
        <span className="text-gray-400 text-[13px]">Bạn chưa có tài khoản?</span>
        <button className="text-[--purple-primary] text-[13px] font-semibold" onClick={toRegister}>
          Đăng ký
        </button>
      </div>
    </div>
  );
}

export default Login;
