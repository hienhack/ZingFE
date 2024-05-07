import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Line } from 'react-chartjs-2';
import _ from 'lodash';
// eslint-disable-next-line no-unused-vars
// import { Chart } from 'chart.js/auto';

// import bgChart from '../../assets/bg-chart.jpg'
import bgChart2 from '../../assets/bg-chart-2.jpg';
import { FaPlay } from 'react-icons/fa';
import TabTitle from './TabTitle';
// import SongItemChartHomeTooltip from './SongItemChartHomeTooltip';
import ZingChartSong from './ZingChartSong';
import ZingChartSongSmall from './ZingChartSongSmall';
import chartPageData from './chartData2.json';
import { FaCirclePlay } from 'react-icons/fa6';

import { Chart } from '../../components/Chart';
import { BsFillPlayFill } from 'react-icons/bs';
import { chartitem } from '../../components/ChartHome/ChartHome';

function ZingChartPage() {
  const [randomSong, setRandomSong] = useState(null);
  const [isShowFull, setIsShowFull] = useState(false);
  const [songData, setSongData] = useState([]);

  const chartRef = useRef('');

  useEffect(() => {
    TabTitle('#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại');
  }, []);

  useEffect(() => {
    if (chartPageData?.RTChart?.items) {
      let fullList = chartPageData?.RTChart?.items;

      if (isShowFull) {
        setSongData(fullList);
      } else {
        setSongData(fullList.filter((item, index) => index < 10));
      }

      // Select a random song from those outside the top 10, if there are more than 10 songs
      if (fullList.length > 10) {
        const songsExcludingTopTen = fullList.slice(10); // Exclude top 10
        const randomIndex = Math.floor(Math.random() * songsExcludingTopTen.length);
        setRandomSong(songsExcludingTopTen[randomIndex]);
      }
    }
  }, [isShowFull, chartPageData]);

  return (
    <div>
      <div className="px-[--padding-section]">
        <h3 className="text-4xl text-text-100 font-bold text-left custom-gradient text-transparent flex items-center gap-2 mb-16 w-[214.59px]">
          #zingchart
          <span className="rounded-full border bg-white text-black ">
            <BsFillPlayFill size={35} className="pl-1" />
          </span>
        </h3>
        <Chart chartitem={chartitem} />
      </div>
      <div className="w-full relative h-full overflow-x-hidden overflow-y-auto overflow-y-overlay text-white">
        <div className={`pb-[30px] px-[59px]`}>
          <div className="mb-5">
            {randomSong && <ZingChartSong songInfo={randomSong} key={randomSong.encodeId} />}
            {songData?.map((item, index) => (
              <ZingChartSong songInfo={item} key={item?.encodeId} index={index} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center ">
            {isShowFull ? (
              ''
            ) : (
              <button
                onClick={() => setIsShowFull((prev) => !prev)}
                className="py-2 px-[25px] border-[1px] border-[#ffffff] rounded-full font-medium text-sm hover:bg-opacity-color-4 hover:bg-[rgba(61,45,76,1)]"
              >
                Xem top 100
              </button>
            )}
          </div>
        </div>
        {chartPageData && (
          <div className="relative mt-7">
            <img src={bgChart2} alt="cover" className={`object-cover w-full h-[615px] `} />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(32,15,53,0.9)] "></div>
            <div className="absolute top-0 bottom-0 left-[59px] right-[59px]">
              <div className="mt-8 mb-5">
                <Link
                  to={chartPageData?.weekChart?.vn?.link}
                  className="text-[40px] font-bold cursor-pointer"
                >
                  Bảng Xếp Hạng Tuần
                </Link>
              </div>
              <div className={`justify-between gap-7 flex `}>
                <div
                  className={`flex flex-col py-5 px-[10px] bg-[hsla(0,0%,100%,0.05)] rounded-2xl w-1/3`}
                >
                  <div className="w-full pl-10 pb-[10px] flex row ">
                    <Link
                      className="text-2xl font-bold hover:text-purple-500 items-center"
                      to={chartPageData?.weekChart?.vn?.link}
                    >
                      Việt Nam
                    </Link>
                    <div className="relative mx-2">
                      <FaCirclePlay className="text-4xl fill-purple-500 hover:fill-purple-600" />
                      <FaPlay className="absolute inset-1 m-auto text-white" size={18} />
                    </div>
                  </div>
                  <div className="mb-[15px] ">
                    {chartPageData?.weekChart?.vn?.items
                      ?.filter((item, index) => index < 5)
                      ?.map((item, index) => (
                        <ZingChartSongSmall songInfo={item} key={item?.encodeId} index={index} />
                      ))}
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <Link
                      to={chartPageData?.weekChart?.vn?.link}
                      className="py-[6px] px-[25px] border-[1px] border-[#ffffff] rounded-full font-medium text-sm hover:bg-opacity-color-4 hover:bg-[rgba(61,45,76,1)]"
                    >
                      Xem tất cả
                    </Link>
                  </div>
                </div>
                <div
                  className={`flex flex-col py-5 px-[10px] bg-[hsla(0,0%,100%,0.05)] rounded-2xl w-1/3`}
                >
                  <div className="w-full pl-10 pb-[10px] flex col-auto item-center">
                    <Link
                      className="text-2xl font-bold hover:text-purple-500"
                      to={chartPageData?.weekChart?.us?.link}
                    >
                      US-UK
                    </Link>
                    <div className="relative mx-2">
                      <FaCirclePlay className="text-4xl fill-purple-500 hover:fill-purple-600" />
                      <FaPlay className="absolute inset-0 m-auto text-white" size={18} />
                    </div>
                  </div>
                  <div className="mb-[15px]">
                    {chartPageData?.weekChart?.us?.items
                      ?.filter((item, index) => index < 5)
                      ?.map((item, index) => (
                        <ZingChartSongSmall songInfo={item} key={item?.encodeId} index={index} />
                      ))}
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <Link
                      to={chartPageData?.weekChart?.us?.link}
                      className="py-[6px] px-[25px] border-[1px] border-[#ffffff] rounded-full font-medium text-sm hover:bg-opacity-color-4 hover:bg-[rgba(61,45,76,1)]"
                    >
                      Xem tất cả
                    </Link>
                  </div>
                </div>
                <div
                  className={`flex flex-col py-5 px-[10px] bg-[hsla(0,0%,100%,0.05)] rounded-2xl w-1/3 `}
                >
                  <div className="w-full pl-10 pb-[10px] flex col-auto items-center">
                    <Link
                      className="text-2xl font-bold hover:text-purple-500"
                      to={chartPageData?.weekChart?.korea?.link}
                    >
                      K-Pop
                    </Link>
                    <div className="relative mx-2">
                      <FaCirclePlay className="text-4xl fill-purple-500 hover:fill-purple-600" />
                      <FaPlay className="absolute inset-0 m-auto text-white" size={18} />
                    </div>
                  </div>
                  <div className="mb-[15px]">
                    {chartPageData?.weekChart?.korea?.items
                      ?.filter((item, index) => index < 5)
                      ?.map((item, index) => (
                        <ZingChartSongSmall songInfo={item} key={item?.encodeId} index={index} />
                      ))}
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <Link
                      to={chartPageData?.weekChart?.korea?.link}
                      className="py-[6px] px-[25px] border-[1px] border-[#ffffff] rounded-full font-medium text-sm hover:bg-opacity-color-4 hover:bg-[rgba(61,45,76,1)]"
                    >
                      Xem tất cả
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ZingChartPage;
