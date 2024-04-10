import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { useEffect, useRef, useState } from 'react';
import { Player } from '../components/Player';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

function DefaultLayout() {
  const isPlaying = useSelector((state) => state.status.isPlaying);
  const currentSong = useSelector((state) => state.feature.currentSong);
  const [isScrolled, setScrolled] = useState(false);
  const main = useRef(null);

  useEffect(() => {
    const instance = main.current;

    const handleScroll = () => {
      setScrolled(instance.scrollTop);
    };

    instance.addEventListener('scroll', handleScroll);
    return () => instance.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen">
      <div
        className={clsx(
          'flex bg-[var(--layout-bg)]',
          currentSong != null ? 'h-[calc(100vh-90px)]' : 'h-full'
        )}
      >
        <div className="w-[240px] min-w-[240px] z-50">
          <Sidebar />
        </div>
        <div
          className="scrollable-container h-screen overflow-y-scroll w-full relative z-10"
          ref={main}
        >
          <Header isSticky={isScrolled}></Header>
          <div className="mt-[70px]">
            <Outlet />
          </div>
        </div>
      </div>
      {currentSong != null && <Player />}
    </div>
  );
}

export default DefaultLayout;
