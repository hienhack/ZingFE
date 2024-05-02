import { createContext, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, setCurrentTime } from '../redux/slice/featureSlice';
import { setPlaying } from '../redux/slice/statusSlice';

const AudioContext = createContext();

function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const currentSong = useSelector((state) => state.feature.currentSong);
  const isPlaying = useSelector((state) => state.status.isPlaying);
  const volume = useSelector((state) => state.feature.volume);
  const dispatch = useDispatch();

  function handleTimeUpdate(e) {
    dispatch(setCurrentTime(e.target.currentTime));
  }

  function handleEnded() {
    // call api to write history

    dispatch(setPlaying(false));
  }

  function loadSong(song) {
    dispatch(setCurrentSong(song));
    dispatch(setCurrentTime(0));
    audioRef.current.load();
  }

  function play() {
    audioRef.current.play();
    dispatch(setPlaying(true));
  }

  function setVolume(value) {
    dispatch(setVolume(value));
    audioRef.current.volume = value;
  }

  useLayoutEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <AudioContext.Provider value={{ audioRef, loadSong, play, setVolume }}>
      {children}
      <audio
        ref={audioRef}
        src={currentSong ? currentSong.streaming.url128kps : ''}
        onTimeUpdate={handleTimeUpdate}
        autoPlay={isPlaying}
        hidden
        controls
        onEnded={handleEnded}
      />
    </AudioContext.Provider>
  );
}

export default AudioProvider;
export { AudioContext };
