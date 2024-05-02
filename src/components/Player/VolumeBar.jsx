import { useContext, useRef, useState } from 'react';
import { AudioContext } from '../../Context/AudioContext';
import { IconButton } from '../Button';
import { SlVolume2, SlVolumeOff } from 'react-icons/sl';
import { SliderBar } from '../SliderBar';
import { useDispatch, useSelector } from 'react-redux';
import { setVolume } from '../../redux/slice/featureSlice';

function VolumeBar() {
  const { audioRef } = useContext(AudioContext);
  const volume = useSelector((state) => state.feature.volume);
  const volumeRef = useRef();
  const dispatch = useDispatch();

  function handleChangeVolume(value) {
    audioRef.current.volume = value / 100;
  }

  function handleSeek(value) {
    dispatch(setVolume(value / 100));
  }

  function handleClick() {
    if (volume > 0) {
      volumeRef.current = volume;
      dispatch(setVolume(0));
    } else {
      dispatch(setVolume(volumeRef.current));
    }
  }

  return (
    <div className="flex items-center">
      <IconButton className="mr-1" onClick={handleClick}>
        {volume != 0 && <SlVolume2 />}
        {volume == 0 && <SlVolumeOff />}
      </IconButton>
      <div className="w-[70px]">
        <SliderBar
          value={volume * 100}
          onSeek={handleSeek}
          onChange={handleChangeVolume}
          max={100}
        />
      </div>
    </div>
  );
}

export default VolumeBar;
