import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenueData from "./revenueData.json"

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

    },
    hover: {
      mode: "dataset",
      intersect: false,
    },
  }
  return (
    <div className="">
      <div className="w-[full] h-[300px] mt-[1rem]">
        <Line
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
      </div>
    </div>
  );
}

export default Chart;
