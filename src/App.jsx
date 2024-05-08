import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import HomePage from './pages/Home/HomePage';
import ZingChartPage from './pages/ZingChart/ZingChartPage';
import NewReleasePage from './pages/NewRelease/NewReleasePage';
import TopicPage from './pages/Topic/TopicPage';
import Top100Page from './pages/Top100/Top100Page';
import HistoryPage from './pages/History/HistoryPage';
import MyPlaylistPage from './pages/MyPlaylist/MyPLaylistPage';
import { MyMusicPage, FavoriteSong, Song } from './pages/MyMusic';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticate } from './redux/slice/userSlice';
import AuthForm from './components/Form/AuthForm';
import Search from './pages/Search/Search';
import { AllSearch } from './pages/Search/AllSearch';
import { SongsSearch } from './pages/Search/SongsSearch';
import { AlbumsSearch } from './pages/Search/AlbumsSearch';
import { SingersSearch } from './pages/Search/SingersSearch';

function App() {
  const authenticate = useSelector((state) => state.user.authenticate);
  const dispacth = useDispatch();

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/mymusic" element={<MyMusicPage />}>
            <Route path="/mymusic/song" element={<Song />}>
              <Route index path="/mymusic/song" element={<FavoriteSong />} />
              <Route path="/mymusic/song/favorite" element={<FavoriteSong />} />
            </Route>
            <Route path="/mymusic/mv" element={<MyMusicPage />} />
            <Route path="/mymusic/album" element={<MyMusicPage />} />
          </Route>
          <Route index={true} path="/" element={<HomePage />}></Route>
          <Route path="/zing-chart" element={<ZingChartPage />}></Route>
          <Route path="/moi-phat-hanh" element={<NewReleasePage />}></Route>
          <Route path="/hub" element={<TopicPage />}></Route>
          <Route path="/top100" element={<Top100Page />}></Route>
          <Route path="/mymusic/history" element={<HistoryPage />}></Route>
          {/* Bài hát yêu thích */}
          <Route path="/mymusic/song/favorite" element={<MyMusicPage />}></Route>
          <Route path="/mymusic/library/playlist" element={<MyPlaylistPage />}></Route>

          <Route path="/mymusic/album" element={<MyMusicPage />}></Route>
          <Route path="/" element={<MyMusicPage />}></Route>
          {/*Tìm kiếm*/}
          <Route path="/tim-kiem" element={<Search />}>
            <Route index path="tat-ca" element={<AllSearch />} />
            <Route path="bai-hat" element={<SongsSearch />} />
            <Route path="playlist" element={<AlbumsSearch />} />
            <Route path="artist" element={<SingersSearch />} />
          </Route>
        </Route>
      </Routes>
      <AuthForm open={authenticate} handleOpen={() => dispacth(setAuthenticate(false))} />
    </>
  );
}

export default App;
