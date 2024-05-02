import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

function DurationBar({ valueRef, handleSeeking, limitPos }) {
  const [background, setBackground] = useState();
  const timer = useRef(0);
  const barRef = useRef();
  const [dragging, setDragging] = useState(false);
  const current = useSelector((state) => state.feature.currentTime);
  const duration = useSelector((state) => state.feature.songDuration);

  useEffect(() => {
    const newBackground =
      `linear-gradient(to right, var(--progressbar-active-bg) 0%, var(--progressbar-active-bg) ` +
      `${(current / duration) * 100}%, var(--progressbar-player-bg) ` +
      `${(current / duration) * 100}%, var(--progressbar-player-bg) 100%)`;
    setBackground(newBackground);
  }, [current]);

  function resolveBackground(current, duration) {
    return (
      `linear-gradient(to right, var(--progressbar-active-bg) 0%, var(--progressbar-active-bg) ` +
      `${(current / duration) * 100}%, var(--progressbar-player-bg) ` +
      `${(current / duration) * 100}%, var(--progressbar-player-bg) 100%)`
    );
  }

  function resolveHandlerPos(current, duration) {
    return `calc(${(current / duration) * 100}% - 6px)`;
  }

  useEffect(() => {
    // setInterval(() => {
    //   setCurrent(timer.current + 1);
    //   timer.current = timer.current + 1;
    // }, 1000);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        updateCurrentTime(e);
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  const handleMouseDown = (e) => {
    e.stopPropagation();
    setDragging(true);
    updateCurrentTime(e);
  };

  const updateCurrentTime = (e) => {
    const rect = barRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const clickedPercentage = x / rect.width;
    let newCurrentTime = duration * clickedPercentage;
    newCurrentTime = Math.max(newCurrentTime, 0);
    newCurrentTime = Math.min(newCurrentTime, duration);
    handleSeeking(Math.round(newCurrentTime));
  };

  return (
    <div className="duration-bar" ref={barRef} onMouseDown={handleMouseDown}>
      <div
        className="slider-bar"
        style={{
          background: resolveBackground(current, duration),
        }}
      ></div>
      {limitPos && <div className="limit"></div>}
      <div className="handler" style={{ left: resolveHandlerPos(current, duration) }}></div>
    </div>
  );
}

export default DurationBar;
