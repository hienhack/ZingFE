import { useState } from 'react';
import NewRelease from '../NewRelease/NewReleasePage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Radio_Live } from '../Radio/RadioSection';
import { Slider } from '../../components/Slider/Slider';
import { ChartHome } from './ChartHome';
import { HiChevronRight } from 'react-icons/hi2';

const title1 = 'Nghe Gần đây';
const title2 = 'Tâm Trạng Tan Chậm';
const title3 = 'Album Hot';
const playlist = [
  {
    id: 1,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/7/b/7e7b8f07e9af15dc2fa3424d237bfff7.jpg',
    describe: 'Lắc lư cùng những giai điệu cực cuốn',
    artist: ['Alan Walker', 'K-391', 'Emelie', 'Hollow'],
  },
  {
    id: 2,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/1/3/8/f138a02472481738a6660e97421ceff2.jpg',
    describe: 'Lắc lư cùng những giai điệu cực cuốn',
    artist: ['Alan Walker', 'K-391', 'Emelie', 'Hollow'],
  },
  {
    id: 3,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/4/7/9/64797af5fc5fa8aee8660d85a8cb3816.jpg',
    describe: 'Lắc lư cùng những giai điệu cực cuốn',
    artist: ['Alan Walker', 'K-391', 'Emelie', 'Hollow'],
  },
  {
    id: 4,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/5/f/a/55fa8c513461bef6c8e37f188347e0eb.jpg',
    describe: 'Lắc lư cùng những giai điệu cực cuốn',
    artist: ['Alan Walker', 'K-391', 'Emelie', 'Hollow'],
  },
  {
    id: 5,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/c/e/6/4ce668d112622c6aae0b4257a5071025.jpg',
    describe: 'Lắc lư cùng những giai điệu cực cuốn',
    artist: ['Alan Walker', 'K-391', 'Emelie', 'Hollow'],
  },
  // { id: 2, title: 'Nhạc Hot Tiktok', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/1/3/8/f138a02472481738a6660e97421ceff2.jpg", describe: "Lắc lư cùng những giai điệu cực cuốn", artist: "Alan Walker, K-391, Emelie, Hollow" },
  // { id: 3, title: 'Nhạc Hot Tiktok', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/4/7/9/64797af5fc5fa8aee8660d85a8cb3816.jpg", describe: "Lắc lư cùng những giai điệu cực cuốn", artist: "Alan Walker, K-391, Emelie, Hollow" },
  // { id: 4, title: 'Nhạc Hot Tiktok', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/5/f/a/55fa8c513461bef6c8e37f188347e0eb.jpg", describe: "Lắc lư cùng những giai điệu cực cuốn", artist: "Alan Walker, K-391, Emelie, Hollow" },
  // { id: 5, title: 'Nhạc Hot Tiktok', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/c/e/6/4ce668d112622c6aae0b4257a5071025.jpg", describe: "Lắc lư cùng những giai điệu cực cuốn", artist: "Alan Walker, K-391, Emelie, Hollow" },
  {
    id: 6,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rrDF9mmYVS3K0HjrZkD-m1LLsQ7EO-j3W47PjfXYgi8NGKstJsDhmXA377VCSlz0m5EE8TwdxHKJ09_bZgC_XvC1N-REelfILPG9iuzsReT1GPrcsI8wHq5L26OPOgvIGi2TfXbnx9OMmumocwCy144HMI3Fi6yLXK5TibymUXM5WKYrd_TkbD33oA2UTAyLqGE9TSkXxjNHruirNs1vmGL2sVUF8VhGaS0B9nrsQ0M3b5Xq3B8u0D44s61CilWKbiIVOOop-CFMXmkZ3V3v5fV7t_UDypfLrf4VzywcEH12GCjqtq&size=thumb/240_240',
    describe: 'Lắc lư cùng những giai điệu cực cuốn',
    artist: 'Alan Walker, K-391, Emelie, Hollow',
  },
  {
    id: 7,
    title: 'Nhạc Hot Tiktok',
    thumbnail:
      'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rrDF9mmYVS3K0HjrZkD-m1LLsQ7EO-j3W47PjfXYgi8NGKstJsDhmXA377VCSlz0m5EE8TwdxHKJ09_bZgC_XvC1N-REelfILPG9iuzsReT1GPrcsI8wHq5L26OPOgvIGi2TfXbnx9OMmumocwCy144HMI3Fi6yLXK5TibymUXM5WKYrd_TkbD33oA2UTAyLqGE9TSkXxjNHruirNs1vmGL2sVUF8VhGaS0B9nrsQ0M3b5Xq3B8u0D44s61CilWKbiIVOOop-CFMXmkZ3V3v5fV7t_UDypfLrf4VzywcEH12GCjqtq&size=thumb/240_240',
    describe: 'Lắc lư cùng những giai điệu cực cuốn',
    artist: 'Alan Walker, K-391, Emelie, Hollow',
  },
];

function HomePage() {
  const [open, setOpen] = useState(false);
  //const {newRelease } = useSelector (state => state.app)

  return (
    <div className="px-[--padding-section] relative z-0">
      <div className="Slider">
        <Slider />
      </div>
      <NewRelease />

      <div className="flex flex-col">
        <div className="Radio  mt-[48px]">
          <h1 className="text-white mb-[20px] text-[20px] font-bold flex">
            {' '}
            Radio Nổi Bật
            <div className="group top-9 flex place-items-center">
              <button className=" text-[--text-secondary] text-[12px] absolute right-[59px] group-hover:text-[#c072eb] flex leading-[18px] font-[500] content-center">
                TẤT CẢ
                <HiChevronRight
                  className="text-[--text-secondary] group-hover:text-[#c072eb] right-[59px] top-[2px] content-center ml-[5px]"
                  size={20}
                />
                <Link to="" />
              </button>
            </div>
          </h1>
          <Radio_Live />
        </div>
      </div>
      <ChartHome />
      <div className="mb-[100px]"></div>
      {/* <PlaylistCard
        playlist={playlist}
        num={5}
        title={title1}
        istitle={true}
        isdescribe={false}
        isartist={false}
      />
      <PlaylistCard
        playlist={playlist}
        num={5}
        title={title2}
        istitle={false}
        isdescribe={true}
        isartist={false}
      />
      <PlaylistCard
        playlist={playlist}
        num={5}
        title={title3}
        istitle={true}
        isdescribe={false}
        isartist={true}
      /> */}
    </div>
  );
}

export default HomePage;
