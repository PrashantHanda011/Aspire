import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({loan,interest}) {
   const data = 
    {   labels: ['Principal Amount','Interate Amount'],
        datasets: [{
            label: 'Amount',

            data: [loan, interest],
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

  

    
  return (
    <>
        <Pie data={data} />
    </>
  )
}

export default Chart