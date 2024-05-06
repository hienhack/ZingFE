import React from 'react';
import './style.scss';
import clsx from 'clsx';

const ToggleButton = React.forwardRef(function ({ size = 'w-6 h-[15px]', ...rest }, ref) {
  return (
    <label class="inline-flex items-center cursor-pointer toggle-btn">
      <input {...rest} type="checkbox" class="sr-only peer" ref={ref} />
      <div
        class={clsx(
          'relative bg-gray-500 rounded-full peer-checked:after:translate-x-2.5 peer-checked:bg-purple-700',
          "after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full  after:transition-all ",
          size
        )}
      ></div>
    </label>
  );
});

export default ToggleButton;
