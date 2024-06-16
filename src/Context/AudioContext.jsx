import { createContext, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToQueue, setCurrentSong, setCurrentTime } from '../redux/slice/featureSlice';
import { setPlaying } from '../redux/slice/statusSlice';
const API = import.meta.env.VITE_API_URL;
const streamingURL = API + '/play/';

const AudioContext = createContext();

function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const { currentSong, queue } = useSelector((state) => state.feature);
  const { repeat, shuffle, repeatOne } = useSelector((state) => state.status);
  const isPlaying = useSelector((state) => state.status.isPlaying);
  const volume = useSelector((state) => state.feature.volume);
  const dispatch = useDispatch();

  function handleTimeUpdate(e) {
    dispatch(setCurrentTime(e.target.currentTime));
  }

  function handleEnded() {
    // call api to write history
    loadNextSong();
    dispatch(setPlaying(false));
  }

  function loadSong(song) {
    dispatch(setCurrentSong(song));
    dispatch(setCurrentTime(0));
    if (queue.findIndex((s) => s.id == song.id) == -1) {
      dispatch(addToQueue(song));
    }
    audioRef.current.load();
    play();
  }

  function play() {
    audioRef.current.play();
    dispatch(setPlaying(true));
  }

  function pause() {
    audioRef.current.pause();
    dispatch(setPlaying(false));
  }

  function skipForward() {
    loadNextSong();
  }

  function skipBackward() {
    loadNextSong();
  }

  function loadNextSong() {
    let nextSong = null;
    if (shuffle) {
      nextSong = Math.floor(Math.random() * (queue.length - 1));
    } else if (repeatOne) {
      nextSong = currentSong;
    } else {
      const index = queue.findIndex((s) => s.id == currentSong.id);
      nextSong = index == queue.length - 1 ? queue[0] : queue[index + 1];
    }
    loadSong(nextSong);
  }

  function setVolume(value) {
    dispatch(setVolume(value));
    audioRef.current.volume = value;
  }

  useLayoutEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <AudioContext.Provider
      value={{ audioRef, loadSong, play, pause, setVolume, skipForward, skipBackward }}
    >
      {children}
      <audio
        ref={audioRef}
        src={currentSong ? streamingURL + currentSong.mediaIds[0] : ''}
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
