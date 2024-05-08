import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

function Tab({ content, path, end, className }) {
  return (
    <div className={className ? className : 'mx-[20px]'}>
      <NavLink
        className={({ isActive }) =>
          clsx(
            "relative block py-[15px] leading-[normal] before:absolute before:block before:content-[''] text-sm font-medium text-[--navigation-text] hover:text-[--text-primary]",
            isActive &&
              'before:top-[100%] before:w-full before:h-[1.5px] before:bg-[--purple-primary] before:z-[10] text-[--text-primary]'
          )
        }
        to={path}
        end={end}
      >
        {content}
      </NavLink>
    </div>
  );
}

export default Tab;
