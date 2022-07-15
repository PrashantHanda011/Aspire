import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  export const data = 
    {
        labels: ['total', 'Male', 'Female'],
        datasets: [{
            label: 'Total Students',
            data: [400, 200, 100,0],
            backgroundColor: [
                'rgba(244, 104, 65,0.7)',
                'rgba(110, 107, 250,0.7)',
                'rgba(253, 187, 56,0.7)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
        }

 const options = {
    responsive: true,
   
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
}

  

function Chart() {
    
  return (
    <>
        <Line options={options} data={data} />
    </>
  )
}

export default Chart