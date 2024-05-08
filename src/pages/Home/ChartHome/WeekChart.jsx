import React from 'react';

export const weekChart = [
  {
    id: 0,
    title: 'Chúng Ta Của Tương Lai',
    thumbnail: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg',
    artist: ['Sơn Tùng MTP'],
    point: '50%',
  },
  {
    id: 1,
    title: 'Em Của Ngày Hôm Qua',
    thumbnail: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg',
    artist: ['Sơn Tùng MTP'],
    point: '50%',
  },
  {
    id: 2,
    title: 'Chúng Ta Của Hiện Tại',
    thumbnail: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg',
    artist: ['Sơn Tùng MTP'],
    point: '50%',
  },
];
const Weekchart = () => {
  return (
    <div className="w-full   m-auto my-10">
      {
        <ul className="grid grid-cols-3 gap-7">
          {weekChart &&
            weekChart.map((item) => (
              <li key={item.id} className="overflow-hidden rounded-md cursor-pointer">
                <img
                  className="w-full rounded-md transition duration-300 ease-in-out hover:scale-110  "
                  src={item.thumbnail}
                  alt="Logo"
                />
              </li>
            ))}
        </ul>
      }
    </div>
  );
};

export default Weekchart;
