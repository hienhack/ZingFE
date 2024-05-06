import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticate } from '../../redux/slice/userSlice';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaylistItem from './PlaylistItem';
import SidebarItem from './SidebarItem';
import clsx from 'clsx';
import './style.scss';

import CreatePlaylist from './CreatePlaylist';
import { request } from '../../api';
import { setCreatedPlaylist } from '../../redux/slice/featureSlice';
import {
  AlbumIcon,
  DiscoveryIcon,
  FavoriteIcon,
  HistoryIcon,
  LibraryIcon,
  NewReleaseIcon,
  PlaylistIcon,
  Top100Icon,
  TopicIcon,
  UploadIcon,
  ZingChartIcon,
} from '../Icon';

function Sidebar() {
  const ref = useRef();
  const [isScrolled, setScrolled] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const createdPlatlist = useSelector((state) => state.feature.createdPlaylist);
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleMyMusic() {
    if (!isLoggedIn) {
      dispatch(setAuthenticate(true));
    } else {
      navigate('/mymusic');
    }
  }

  function handleCreatePlaylist() {
    if (!isLoggedIn) {
      dispatch(setAuthenticate(true));
    } else {
      setCreatePlaylist(true);
    }
  }

  useEffect(() => {
    const instance = ref.current;

    const handleScroll = () => {
      setScrolled(instance.scrollTop);
    };

    instance.addEventListener('scroll', handleScroll);
    return () => instance.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;

    request
      .get('/playlist/my-playlist')
      .then((res) => {
        dispatch(setCreatedPlaylist(res.data));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="sidebar h-full max-h-full w-full flex flex-col z-10 bg-[var(--sidebar-bg)]">
      <div className="h-[70px] min-h-[70px] pl-7 pt-3">
        <button>
          <div className="zing-logo"></div>
        </button>
      </div>
      <div className="flex flex-col mb-4">
        <SidebarItem path="/mymusic" isPlayable={isLoggedIn} handleClick={handleMyMusic}>
          <LibraryIcon />
          <span>Thư Viện</span>
        </SidebarItem>
        <SidebarItem path="/">
          <DiscoveryIcon />
          <span>Khám Phá</span>
        </SidebarItem>
        <SidebarItem path="/zing-chart" isPlayable={true}>
          <ZingChartIcon />
          <span>#zingchart</span>
        </SidebarItem>
      </div>
      <div className="min-h-[1px] bg-[--border-primary] w-[calc(100%-48px)] mx-auto"></div>
      <div
        className={clsx(
          'head h-[15px] min-h-[15px] w-[240px] relative z-0',
          isScrolled && 'scrolled'
        )}
      >
        <div className="bg-[--sidebar-bg] z-[2] absolute h-full w-full"></div>
      </div>
      <div className="scrollable-container h-full max-h-full overflow-y-auto" ref={ref}>
        <div>
          <SidebarItem path="/moi-phat-hanh" isPlayable={true}>
            <NewReleaseIcon />
            <span>BXH Nhạc Mới</span>
          </SidebarItem>
          <SidebarItem path="/hub">
            <TopicIcon />
            <span>Chủ Đề & Thể Loại</span>
          </SidebarItem>
          <SidebarItem path="/top100">
            <Top100Icon />
            <span>Top 100</span>
          </SidebarItem>
          {!isLoggedIn && (
            <div className="mx-5 my-4 rounded-lg p-4 bg-purple-600">
              <div className="text-center font-extrabold text-white text-xs mb-3 leading-normal">
                Đăng nhập để khám phá playlist dành riêng cho bạn
              </div>
              <div className="px-3">
                <button
                  className="border border-white p-1.5 text-white text-xs outline-1 rounded-full w-full font-bold hover:opacity-80"
                  onClick={() => dispatch(setAuthenticate(true))}
                >
                  ĐĂNG NHẬP
                </button>
              </div>
            </div>
          )}
          {isLoggedIn && (
            <div className="mx-5 my-4 rounded-lg p-4 premium-banner">
              <div className="text-center font-semibold text-white text-xs mb-3 leading-5">
                Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM
              </div>
              <div className="">
                <a
                  className="border-[0.8px] border-[#ffdb00] px-4 py-1.5 text-xs text-[--black] rounded-full w-full bg-[#ffdb00] font-semibold hover:opacity-80"
                  href="#"
                >
                  NÂNG CẤP TÀI KHOẢN
                </a>
              </div>
            </div>
          )}
          {isLoggedIn && (
            <nav className="mb-4">
              <ul>
                <li>
                  <SidebarItem path="/mymusic/history" active={false}>
                    <HistoryIcon />
                    <span>Nghe gần đây</span>
                  </SidebarItem>
                </li>
                <li>
                  <SidebarItem path="/mymusic/song/favorite" active={false} isPlayable>
                    <FavoriteIcon />
                    <span>Bài hát yêu thích</span>
                  </SidebarItem>
                </li>
                <li>
                  <SidebarItem path="/mymusic/library/playlist" active={false}>
                    <PlaylistIcon />
                    <span>Playlist</span>
                  </SidebarItem>
                </li>
                <li>
                  <SidebarItem path="/mymusic/album" active={false}>
                    <AlbumIcon />
                    <span>Album</span>
                  </SidebarItem>
                </li>
                <li>
                  <SidebarItem path="/mymusic/song/upload" active={false}>
                    <UploadIcon />
                    <span>Đã tải lên</span>
                  </SidebarItem>
                </li>
              </ul>
            </nav>
          )}
          {createdPlatlist.length > 0 && (
            <>
              <div className="min-h-[1px] bg-[--border-primary] w-[calc(100%-48px)] mx-auto"></div>
              <nav className="my-4">
                <ul>
                  {createdPlatlist.map((p) => (
                    <li>
                      <PlaylistItem path="/top100" title={p.name}></PlaylistItem>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>
      </div>
      <div className="h-[54px] min-h-[54px] border-t border-[--border-primary]">
        <button
          className="h-full w-full flex items-center gap-3 px-6 text-[--navigation-text] fill-[--navigation-text]"
          onClick={handleCreatePlaylist}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.5164 7.14319C1.32829 3.21545 3.8263 1.02782 7.72282 0.366909C10.6032 -0.121503 13.4847 -0.12767 16.3602 0.380652C20.3723 1.08984 22.7841 3.40504 23.5524 7.39215C24.1461 10.4736 24.1554 13.5879 23.5431 16.6663C22.7218 20.5669 20.1593 22.9747 16.2772 23.6331C13.3968 24.1215 10.5153 24.1277 7.63977 23.6193C3.62772 22.9102 1.20521 20.4794 0.436861 16.4923C-0.186982 13.3905 -0.126933 10.2566 0.5164 7.14319Z"
              fillOpacity="0.2"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.25 12.75L11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18L12.75 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H12.75L12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6L11.25 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H11.25Z"
              fill="#FEFFFF"
            ></path>
          </svg>
          <span className="font-medium text-sm">Tạo playlist mới</span>
        </button>
        <CreatePlaylist
          open={createPlaylist}
          handleOpen={() => setCreatePlaylist(false)}
        ></CreatePlaylist>
      </div>
    </div>
  );
}

export default Sidebar;
