import clsx from 'clsx';
import React from 'react';

function IconButton({ className, hover, onClick, children, active }, ref) {
  hover = hover != undefined ? hover : true;
  return (
    <button
      ref={ref}
      className={clsx(
        'rounded-full p-2 text-[--player-text] flex items-center',
        className,
        hover && 'hover:bg-[--alpha-bg]',
        active && '!text-[--link-text-hover]'
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-center">{children}</div>
    </button>
  );
}

export default React.forwardRef(IconButton);
