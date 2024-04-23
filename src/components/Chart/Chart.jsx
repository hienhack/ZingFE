import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenueData from "./revenueData.json"
import React, { useState, memo, useRef } from "react";
import _ from 'lodash'


function Chart({ chartitem }) {
  console.log(chartitem)
  const chartRef = useRef()
  const [tooltip, setTooltip] = useState({
    opacity: 0,
    top: 0,
    left: 0,
  })
  const [tooltipData, setTooltipData] = useState(null)

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
        <Line
          ref={chartRef}
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                data: revenueData.map((data) => data.test1),
                borderColor: "#4a90e2",
                pointHoverRadius: 5,
                pointBackgroundColor: 'white',
                pointHoverBorderWidth: 4,
                borderWidth: 2,

              },
              {
                data: revenueData.map((data) => data.test2),
                borderColor: "#50e3c2",
                pointHoverRadius: 5,
                pointBackgroundColor: 'white',
                pointHoverBorderWidth: 4,
                borderWidth: 2,
              },
              {
                data: revenueData.map((data) => data.test3),
                borderColor: "#e35050",
                pointHoverRadius: 5,
                pointBackgroundColor: 'white',
                pointHoverBorderWidth: 4,
                borderWidth: 2,
              },
            ],
          }}
          options={options}
        />
        <div className='tooltip' style={{ top: tooltip.top, left: tooltip.left, position: 'absolute', opacity: tooltip.opacity }}>
          {<img src={chartitem.find(i => i.id === tooltipData)?.thumbnail} className='w-[100px] h-auto  ' />}
        </div>
      </div>
    </div>
  );
}

export default Chart