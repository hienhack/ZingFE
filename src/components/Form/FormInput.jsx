import clsx from 'clsx';
import React from 'react';

function FormInput({ error, className, ...rest }, ref) {
  return (
    <input
      className={clsx(
        'w-full bg-[--sidebar-bg] p-3 rounded-md outline-none border text-sm text-gray-400',
        error ? 'border-red-700' : 'border-transparent focus:border-slate-600',
        className
      )}
      ref={ref}
      {...rest}
    ></input>
  );
}

export default React.forwardRef(FormInput);
