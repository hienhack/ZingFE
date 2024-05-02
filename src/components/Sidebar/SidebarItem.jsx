import clsx from 'clsx';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { Children } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from '../../redux/slice/featureSlice';
import { setPlaying } from '../../redux/slice/statusSlice';
import './style.scss';

const testSong = {
  id: 1,
  thumbnail:
    'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/5/f/a/2/5fa229dc30ca9b5e680f1755afdab812.jpg',
  name: 'Chua Quen Nguoi Yeu Cũ',
  singers: [
    {
      id: 1,
      name: 'Ha Nhi',
    },
  ],
  isPremium: false,
  streaming: {
    url128kps:
      'https://vnso-pt-15-tf-a320-z3.zmdcdn.me/36459e2c7ad6a02e2bc1e8a53e6115a9?authen=exp=1714761594~acl=/36459e2c7ad6a02e2bc1e8a53e6115a9/*~hmac=6142947c35d97e9e285032482738a7e7',
  },
  duration: 302,
};

function SidebarItem({ path, className, isPlayable, active, handleClick, children }) {
  active = active != undefined ? active : true;
  const components = Children.toArray(children);
  const dispacth = useDispatch();
  const currentSong = useSelector((state) => state.feature.currentSong);

  function handlePlay() {
    // dispacth(setPlaying());

    dispacth(setCurrentSong(testSong));
  }

  function onClick(e) {
    if (handleClick) {
      e.preventDefault();
      handleClick();
    }
  }

  return (
    <NavLink to={path} onClick={onClick}>
      {({ isActive }) => (
        <div className={clsx('sidebar-item', isActive && active && 'active', className)}>
          <div className="content-wrapper">
            <div className="icon">{components[0]}</div>
            {components[1]}
          </div>
          {isPlayable && (
            <button className="play-btn" onClick={handlePlay}>
              <IoPlayCircleOutline className="text-white size-6" />
            </button>
          )}
        </div>
      )}
    </NavLink>
  );
}

export default SidebarItem;
