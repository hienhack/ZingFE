import clsx from 'clsx';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { Children } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from '../../redux/slice/featureSlice';
import { setPlaying } from '../../redux/slice/statusSlice';
import './style.scss';

function SidebarItem({ path, className, isPlayable, children }) {
  const components = Children.toArray(children);
  const dispacth = useDispatch();
  const currentSong = useSelector((state) => state.feature.currentSong);

  function handlePlay() {
    dispacth(setPlaying());
    // For layout testing only
    dispacth(setCurrentSong({ id: 1 }));
  }

  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <div className={clsx('sidebar-item', isActive && 'active', className)}>
          <div className="content-wrapper">
            <div className="icon">{components[0]}</div>
            {components[1]}
          </div>
          {isPlayable && (
            <button className="play-btn" onClick={handlePlay}>
              <IoPlayCircleOutline className="text-white size-6 fill" />
            </button>
          )}
        </div>
      )}
    </NavLink>
  );
}

export default SidebarItem;
