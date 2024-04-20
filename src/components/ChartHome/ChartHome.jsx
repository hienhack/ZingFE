import { useState } from 'react';
import DiscoveryBtn from '../../components/DiscoveryBtn/DiscoveryBtn';
import { Chart } from '../../components/Chart';
import { BsFillPlayFill } from 'react-icons/bs'
const chartitem = [
  { id: 1, title: 'Chúng Ta Của Tương Lai', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/7/b/7e7b8f07e9af15dc2fa3424d237bfff7.jpg", artist: "Sơn Tùng MTP", point: '50%' },
  { id: 2, title: 'Em Của Ngày Hôm Qua', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/1/3/8/f138a02472481738a6660e97421ceff2.jpg", artist: "Sơn Tùng MTP", point: '50%' },
  { id: 3, title: 'Chúng Ta Của Hiện Tại', thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/4/7/9/64797af5fc5fa8aee8660d85a8cb3816.jpg", artist: "Sơn Tùng MTP", point: '50%' },
];
function ChartHome() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className='mt-12 relative h-[414px] rounded-md overflow-hidden'>
        <div className='absolute top-0 z-10 left-0 right-0 bg-[rgba(77,34,104,0.9)] bottom-0'></div>
        <div className='absolute top-0 z-20 left-[20px] right-[20px] bottom-0 flex flex-col '>
          <h3 className='text-[28px] mt-[20px] text-text-100 font-bold text-left text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-purple-800 bg-gradient-to-r from-teal-400 via-purple-500 flex items-center gap-2'>#zingchart
            <span className='rounded-full border bg-white text-main-500 hover:bg-[#ced5e3]'><BsFillPlayFill /></span></h3>          <div className='flex '>
            <div className='flex flex-col mt-[1rem] gap-2 '>
              {chartitem.map((item, index) =>
                <div key={item.id} className="flex items-center  w-[387px] px-[15px] py-[10px]	bg-[hsla(0,0%,100%,.07)] hover:bg-[#945EA7]">
                  <div className='flex items-center w-[387px]'>
                    <span className={`${index === 0 ? 'text-shadow-no1' : index === 1 ? 'text-shadow-no2' : 'text-shadow-no3'} text-[32px] mr-[20px] text-[rgba(77,34,104,0.9)]`}>{index + 1} <br /></span>
                    <div className="flex">
                      <img className="w-[60px] h-[60px] rounded-md" src={item.thumbnail} alt="Logo" />
                      <div className="ml-[0.5rem] m-auto">
                        <span className='text-[hsla(0,0%,100%,.5)] font-bold text-[14px]'>{item.title}</span><br />
                        <span className="text-[hsla(0,0%,100%,.5)] text-[14px]">{item.artist} <br /></span>
                      </div>
                    </div>
                  </div>
                  <span className="text-white text-[16px] font-bold ">{item.point}</span>
                </div>
              )}
              <div className='h-7 mt-4 flex items-center justify-center text-white'><span className='h-full w-[30%] rounded-full border flex items-center justify-center text-center cursor-pointer hover:bg-[#945EA7]'>Xem thêm</span></div>
            </div>
            <div className=' w-[554px] h-[300px] ml-6'>
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartHome;