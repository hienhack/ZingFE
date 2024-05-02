import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

function SliderBar({ value, max, limitValue, onSeek, onChange, handleLimitReached }) {
  const barRef = useRef();
  const [dragging, setDragging] = useState(false);
  const [current, setCurrent] = useState(value);

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
    if (!dragging) return;
    const handleMouseMove = (e) => {
      if (dragging) {
        const newValue = calculateValue(e);
        setCurrent(newValue);
        try {
          onChange(newValue);
        } catch (e) {
          // ignore
        }
      }
    };

    const handleMouseUp = (e) => {
      try {
        onSeek(calculateValue(e));
        window.removeEventListener('mousemove', handleMouseMove);
      } catch (e) {
        //ignore
      }
      setTimeout(() => setDragging(false), 130);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  const handleMouseDown = (e) => {
    e.stopPropagation();
    setDragging(true);
    setCurrent(calculateValue(e));
  };

  function calculateValue(e) {
    const rect = barRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickedPercentage = x / rect.width;
    let result = max * clickedPercentage;
    result = Math.max(result, 0);
    result = Math.min(result, max);
    return Math.round(result);
  }

  return (
    <div className="slider-bar" ref={barRef} onMouseDown={handleMouseDown}>
      <div
        className="background"
        style={{
          background: dragging ? resolveBackground(current, max) : resolveBackground(value, max),
        }}
      ></div>
      {limitValue && <div className="limit"></div>}
      <div
        className="handler"
        style={{ left: dragging ? resolveHandlerPos(current, max) : resolveHandlerPos(value, max) }}
      ></div>
    </div>
  );
}

export default SliderBar;
