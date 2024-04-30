import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenueData from "./revenueData.json"
import React, { useState, memo, useRef, useEffect } from "react";
import _ from 'lodash'


const Chart = ({ chartitem }) => {
  const chartRef = useRef()
  const [data, setData] = useState(null);

  const [tooltip, setTooltip] = useState({
    opacity: 0,
    top: 0,
    left: 0,
  })
  const [tooltipData, setTooltipData] = useState(null)

  useEffect(() => {
    const datasets = []
    const labels = revenueData.map((data) => data.label)
    for (let i = 0; i < 3; i++) {
      datasets.push({
        data: revenueData.map((data) => data[`test${i + 1}`]), // Assuming test1, test2, test3, etc., are the data fields
        borderColor: i === 0 ? '#4a90e2' : i === 1 ? '#50e3c2' : '#e35050',
        borderWidth: 2,
        pointBackgroundColor: 'white',
        pointHoverRadius: 6,
        pointBorderColor: i === 0 ? '#4a90e2' : i === 1 ? '#50e3c2' : '#e35050',
        pointHoverBorderWidth: 4
      })
    }
    setData({ labels, datasets })

  }, [chartitem])

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
        grid: { color: 'rgba(900,900,900,0.2)', drawTicks: false },
        border: { dash: [3, 4] }
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: 'transparent' }
      }
    },
    plugins: {
      legend: false,
      tooltip: {
        enabled: false,
        external: (ctx) => {
          if (!chartRef || !chartRef.current) return
          const tooltipModel = ctx.tooltip
          if (tooltipModel.opacity === 0) {
            if (tooltip.opacity !== 0)
              setTooltip(prev => ({ ...prev, opacity: 0 }))
            return
          }
          const data = []
          for (let i = 0; i < 3; i++)
            data.push({
              id: chartitem[i].id,
              point: chartitem[i].point,
              thumbnail: chartitem[i].thumbnail,
              title: chartitem[i].title,
              artist: chartitem[i].artist
            });
          const foundItem = data.find(i => i.id === +tooltipModel.dataPoints[0].datasetIndex)?.id
          setTooltipData(foundItem != null ? foundItem : null);
          const newTooltipData = {
            opacity: 1,
            left: tooltipModel.caretX,
            top: tooltipModel.caretY,
          }
          if (!_.isEqual(tooltip, newTooltipData)) setTooltip(newTooltipData)
        }
      }
    },
    hover: {
      mode: "dataset",
      intersect: false,
    },

  }
  return (
    <div className="">
      <div className="w-[full] h-[300px] mt-[1rem] relative">
        {data && (
          <Line
            ref={chartRef}
            data={data}
            options={options}
          />
        )}
        <div className='w-full' style={{ top: tooltip.top, left: tooltip.left, position: 'absolute', opacity: tooltip.opacity }}>
          <div className={`${chartitem.find(i => i.id === tooltipData)?.id === 0 ? 'bg-[#4a90e2]' : chartitem.find(i => i.id === tooltipData)?.id === 1 ? 'bg-[#50e3c2]' : 'bg-[#e35050]'} w-[12rem] bg-[#4a90e2] h-[4rem] flex items-center rounded-md`} >
            {<img src={chartitem.find(i => i.id === tooltipData)?.thumbnail} className='w-[3rem] ml-1.5 rounded-md' />}
            <div className="ml-1">
              <p className=" font-bold text-[0.75rem] truncate overflow-hidden w-[10ch] text-white">{chartitem.find(i => i.id === tooltipData)?.title}</p>
              <div className="flex truncate w-[8ch] overflow-hidden">
                {chartitem.find(i => i.id === tooltipData)?.artist.map((artist, index) => (
                  <div className="" key={index}>
                    <span className="text-[--text-secondary] text-[0.75rem] cursor-pointer ">
                      {artist}
                    </span>
                    {index !== chartitem.find(i => i.id === tooltipData)?.artist.length - 1 && <span className="text-[--text-secondary]">,&nbsp;</span>}
                  </div>
                ))}
              </div>

            </div>
            <p className="ml-4 font-bold text-[0.75rem]  text-white">{chartitem.find(i => i.id === tooltipData)?.point}</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Chart)