import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Line } from 'react-chartjs-2';
import _ from 'lodash';
// eslint-disable-next-line no-unused-vars
// import { Chart } from 'chart.js/auto';

// import bgChart from '../../assets/bg-chart.jpg'
import bgChart2 from '../../assets/bg-chart-2.jpg'
import { FaPlay } from 'react-icons/fa';
import TabTitle from './TabTitle';
// import SongItemChartHomeTooltip from './SongItemChartHomeTooltip';
import ZingChartSong from './ZingChartSong';
import ZingChartSongSmall from './ZingChartSongSmall';
import chartPageData from './chartData2.json';
import { FaCirclePlay } from "react-icons/fa6";


function ZingChartPage() {
//   const [chartData, setChartData] = useState(null);
  const [randomSong, setRandomSong] = useState(null);
  const [isShowFull, setIsShowFull] = useState(false);
  const [songData, setSongData] = useState([]);


  const chartRef = useRef('');
//   const chartPageData = require('./chartData2.json');


  useEffect(() => {
    TabTitle('#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại');
  }, []);


//   useEffect(() => {
//     const labels = chartPageData?.RTChart?.chart?.times
//         ?.filter((time) => +time.hour % 2 === 0)
//         ?.map((item) => `${item.hour}:00`);

//     if (chartPageData?.RTChart?.chart?.items) {
//         const datasets = [];
//         for (let i = 0; i < 3; i++) {
//             datasets.push({
//                 data: chartPageData?.RTChart?.chart?.items[
//                     Object.keys(chartPageData?.RTChart?.chart?.items)[i]
//                 ]
//                     ?.filter((item) => +item.hour % 2 === 0)
//                     ?.map((item) => item.counter),
//                 borderColor: i === 0 ? '#4A90E2' : i === 1 ? '#27BD9C' : '#E35050',
//                 tension: 0.2,
//                 borderWidth: 2,
//                 pointBackgroundColor: 'white',
//                 pointHoverRadius: 5,
//                 pointBorderColor: i === 0 ? '#4A90E2' : i === 1 ? '#27BD9C' : '#E35050',
//                 pointHoverBorderWidth: 2
//             });
//         }
//         setChartData({ labels, datasets });
//     }
//   }, [chartPageData]);


  useEffect(() => {
    if (chartPageData?.RTChart?.items) {
        let fullList = chartPageData?.RTChart?.items;
        // const dataToExport = chartPageData;
        // downloadDataAsFile(dataToExport, 'chartData2.json');
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
  <>
    <div className="w-full relative h-full overflow-x-hidden overflow-y-auto overflow-y-overlay text-white">
      <div className="relative">
          {/* <img src={bgChart} alt="cover" className="object-cover w-full h-[500px]" />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(65,22,54,0.92)]"></div> */}
          {/* <div
              className={`absolute top-0 bottom-2/3 flex items-end left-[59px] right-[59px]`
                
                ${    screenWidthRedux > 1022
                      ? 'left-[59px] right-[59px]'
                      : 'left-[29px] right-[29px]'
                }`
              }
          >
              <h3 className="mb-5 text-[40px] font-extrabold">#zingchart</h3>
          </div> */}
          {/* <div className="absolute top-1/3 bottom-0 left-0 right-[10px] md:right-[59px] bg-gradient-to-t from-[rgb(65,22,54)] to-transparent">
              <div className="w-full h-[90%] relative">
                  {chartData && <Line data={chartData} options={options} ref={chartRef} />}
                  <div
                      className="tooltip"
                      style={{
                          top: tooltipState.top,
                          left: tooltipState.left,
                          opacity: tooltipState.opacity,
                          position: 'absolute'
                      }}
                  >
                      <SongItemChartHomeTooltip
                          data={hoverSong}
                          totalScore={chart1?.totalScore}
                          key={hoverSong?.encodeId}
                      />
                  </div>
              </div>
          </div> */}
      </div>
      <div className={`pb-[30px] px-[59px] `
      // ${screenWidthRedux > 1022 ? 'px-[59px]' : 'px-[29px]'}`
      }>
          <div className="mb-5">
              {randomSong && (
                  // <div style={{ border: "2px solid blue", padding: "10px", marginBottom: "10px" }}>
                      <ZingChartSong songInfo={randomSong} key={randomSong.encodeId} />
                  // </div>
              )}
              {songData?.map((item, index) => (
                  <ZingChartSong songInfo={item} key={item?.encodeId} index={index} />
              ))}
          </div>
          <div className="w-full flex items-center justify-center ">
              {isShowFull ? '': 
                <button
                onClick={() => setIsShowFull((prev) => !prev)}
                className="py-2 px-[25px] border-[1px] border-[#ffffff] rounded-full font-medium text-sm hover:bg-opacity-color-4 hover:bg-[rgba(61,45,76,1)]"
            >
                {/* {isShowFull ? 'Ẩn bớt' : 'Xem top 100'} */}
                Xem top 100
            </button>
              }
          </div>
      </div>
      {chartPageData && (
          <div className="relative mt-7">
              <img
                  src={bgChart2}
                  alt="cover"
                  className={`object-cover w-full h-[615px] `
                  // ${
                  //     screenWidthRedux > 1224 ? 'h-[615px]' : 'h-[1620px]'
                  // }`
                }
              />
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
                  <div
                      className={`justify-between gap-7 flex `
                      // ${
                      //     screenWidthRedux > 1224 ? 'flex' : 'flex-col'
                      // }`
                    }
                  >
                      <div
                          className={`flex flex-col py-5 px-[10px] bg-[hsla(0,0%,100%,0.05)] rounded-2xl w-1/3`
                          // ${
                          //     screenWidthRedux > 1224 ? 'w-1/3' : 'w-full mb-8'
                          // }`
                        }
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
                                    <FaPlay className="absolute inset-1 m-auto text-white" size={18}/>
                                </div>
                          </div>
                          <div className="mb-[15px] ">
                              {chartPageData?.weekChart?.vn?.items
                                  ?.filter((item, index) => index < 5)
                                  ?.map((item, index) => (
                                      <ZingChartSongSmall
                                          songInfo={item}
                                          key={item?.encodeId}
                                          index={index}
                                      />
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
                          className={`flex flex-col py-5 px-[10px] bg-[hsla(0,0%,100%,0.05)] rounded-2xl w-1/3`
                          // ${
                          //     screenWidthRedux > 1224 ? 'w-1/3' : 'w-full mb-8'
                          // }`
                        }
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
                                    <FaPlay className="absolute inset-0 m-auto text-white"size={18}/>
                                </div>
                          </div>
                          <div className="mb-[15px]">
                              {chartPageData?.weekChart?.us?.items
                                  ?.filter((item, index) => index < 5)
                                  ?.map((item, index) => (
                                      <ZingChartSongSmall
                                          songInfo={item}
                                          key={item?.encodeId}
                                          index={index}
                                      />
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
                          className={`flex flex-col py-5 px-[10px] bg-[hsla(0,0%,100%,0.05)] rounded-2xl w-1/3 `
                          // ${
                          //     screenWidthRedux > 1224 ? 'w-1/3' : 'w-full mb-8'
                          // }`
                        }
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
                                    <FaPlay className="absolute inset-0 m-auto text-white" size={18}/>
                                </div>
                          </div>
                          <div className="mb-[15px]">
                              {chartPageData?.weekChart?.korea?.items
                                  ?.filter((item, index) => index < 5)
                                  ?.map((item, index) => (
                                      <ZingChartSongSmall
                                          songInfo={item}
                                          key={item?.encodeId}
                                          index={index}
                                      />
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
  </>
);
}

export default ZingChartPage;
