import clsx from 'clsx';
import { getChildByTypeDeep, getChildrenByType } from 'react-nanny';
import Tab from './Tab';

function Navbar({ title, className, children }) {
  return (
    <nav className={clsx('border-b border-[--border-primary] w-full', className)}>
      <div className="flex items-center">
        {title && (
          <h3 className="text-2xl leading-[normal] text-[--text-primary] font-bold pr-5 border-r border-[--border-primary]">
            {title}
          </h3>
        )}
        <ul className="flex">
          {getChildrenByType(children, [Tab]).map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
