import { Chart } from "../../components/Chart"
import { BsFillPlayFill } from 'react-icons/bs'
import {chartitem} from '../../components/ChartHome/ChartHome'

function ZingChartPage() {
  console.log(chartitem)
  return (
    <div className="px-[--padding-section]">
      <h1 className="text-white">This is zingchart page</h1>
      <h3 className="text-4xl text-text-100 font-bold text-left custom-gradient text-transparent flex items-center gap-2 mb-16 w-[214.59px]">#zingchart
        <span className='rounded-full border bg-white text-black '><BsFillPlayFill size={35} className="pl-1" /></span></h3>
      <Chart chartitem={chartitem}/>
    </div>
  );
}

export default ZingChartPage;
