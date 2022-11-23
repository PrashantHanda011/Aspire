import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({loan,interest}) {
   const data = 
    {   labels: ['Principal Amount','Interest Amount'],
        datasets: [{
            label: 'Amount',

            data: [loan, interest],
            backgroundColor: [
                'rgba(28, 27, 77, 1)',
                '#f47e20'
                
            ],
            borderColor: [
                'rgba(28, 27, 77, 1)',
                '#f47e20',
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

  

    
  return (
    <>
        <Pie data={data} />
    </>
  )
}

export default Chart