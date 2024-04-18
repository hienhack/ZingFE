import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenueData from "./revenueData.json"
import { BsFillPlayFill } from 'react-icons/bs'

function Chart() {
  const options = {
    responsive: true,
    pointRadius: 0,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      y: {
        ticks: { display: false },
        grid: { color: 'rgba(255,255,255,0.1)', drawTicks: false },
        border: { dash: [3, 4] }
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: 'transparent' }
      }
    },
    plugins: {
      legend: false,

    },
    hover: {
      mode: 'dataset',
      intersect: false
    }
  }
  return (
    <div className="">
      <h3 className='text-[40px] text-text-100 font-bold text-left text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-purple-800 bg-gradient-to-r from-teal-400 via-purple-500 flex items-center gap-2'>#zingchart
        <span className='rounded-full border bg-white text-main-500 hover:bg-[#ced5e3]'><BsFillPlayFill /></span></h3>
      <div className="w-full h-[300px] mt-[3rem]">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                data: revenueData.map((data) => data.test1),
              },
              {
                data: revenueData.map((data) => data.test2),
              },
              {
                data: revenueData.map((data) => data.test3),
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
}

export default Chart;
