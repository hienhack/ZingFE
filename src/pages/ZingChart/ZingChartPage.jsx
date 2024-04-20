import { Chart } from "../../components/Chart"
import { BsFillPlayFill } from 'react-icons/bs'

function ZingChartPage() {
  return (
    <div className="px-[--padding-section]">
      <h1 className="text-white">This is zingchart page</h1>
      <h3 className='text-[40px] text-text-100 font-bold text-left text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-purple-800 bg-gradient-to-r from-teal-400 via-purple-500 flex items-center gap-2 mb-16'>#zingchart
        <span className='rounded-full border bg-white text-main-500 hover:bg-[#ced5e3]'><BsFillPlayFill /></span></h3>
      <Chart />
    </div>
  );
}

export default ZingChartPage;
