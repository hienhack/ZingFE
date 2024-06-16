import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { useEffect, useRef, useState } from 'react';
import { Player } from '../components/Player';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { PlayerQueue } from '../components/PlayerQueue';

function DefaultLayout() {
  const isPlaying = useSelector((state) => state.status.isPlaying);
  const currentSong = useSelector((state) => state.feature.currentSong);
  const [isScrolled, setScrolled] = useState(false);
  const showQueue = useSelector((state) => state.layout.showQueue);
  const main = useRef(null);

  useEffect(() => {
    const instance = main.current;

    const handleScroll = () => {
      setScrolled(instance.scrollTop);
    };

    instance.addEventListener('scroll', handleScroll);
    return () => instance.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    main.current.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <div className="h-screen">
      <div
        className={clsx(
          'flex bg-[var(--layout-bg)]',
          currentSong != null ? 'h-[calc(100vh-90px)]' : 'h-full'
        )}
      >
        <div className="w-[240px] min-w-[240px]">
          <Sidebar />
        </div>
        <div
          id="main"
          className="scrollable-container overflow-y-scroll w-full relative z-10"
          ref={main}
        >
          <Header isSticky={isScrolled}></Header>
          <div className="mt-[70px]">
            <Outlet />
          </div>

          {showQueue && (
            <div
              className={clsx(
                'w-[330px] top-0 right-0 fixed z-10',
                currentSong != null ? 'h-[calc(100vh-90px)]' : 'h-full'
              )}
            >
              <PlayerQueue />
            </div>
          )}
        </div>
      </div>
      <div className="bg-black">{currentSong != null && <Player />}</div>
    </div>
  );
}

export default DefaultLayout;
