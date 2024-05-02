import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime } from '../../redux/slice/featureSlice';
import { SliderBar } from '../SliderBar';
import { useContext, useEffect, useState } from 'react';
import { AudioContext } from '../../Context/AudioContext';

function DurationBar() {
  const dispatch = useDispatch();
  const currentTime = useSelector((state) => state.feature.currentTime);
  const [seekValue, setSeekValue] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const currentSong = useSelector((state) => state.feature.currentSong);
  const duration = currentSong.duration;
  const { audioRef } = useContext(AudioContext);

  function handleSeek(value) {
    audioRef.current.currentTime = value;
    setSeeking(false);
  }

  function handleChange(value) {
    setSeeking(true);
    setSeekValue(value);
  }

  function getTime(value) {
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value) % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return (
    <div className="flex items-center">
      <span className="text-[--player-text] opacity-50 font-medium min-w-[45px] text-[12px] text-right h-[18px] mr-2.5">
        {seeking ? getTime(seekValue) : getTime(currentTime)}
      </span>
      <SliderBar value={currentTime} max={duration} onSeek={handleSeek} onChange={handleChange} />
      <span className="text-[--player-text] font-medium min-w-[45px] text-[12px] text-left h-[18px] ml-2.5">
        {getTime(duration)}
      </span>
    </div>
  );
}

export default DurationBar;
