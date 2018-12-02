import React from 'react'

import StockForm from './components/StockForm'
import { Doughnut, Line } from 'react-chartjs-2'
import moment from 'moment'


const doughnutData = {
	labels: [
		'Initial Investment',
		'Total Contribution',
		'Value Gained'
	],
	datasets: [{
		data: [10, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF63A4',
		'#36A2AB',
		'#FFCEA6'
		]
	}]
}

const generateData = () => {
    let labels = [];
    let data = [];

    while (labels.length < 20){
        labels.push(moment().add( labels.length, 'months').format('MMM YY') );
        data.push( Math.random() * 1000 )
    }

    return {
        labels, data
    }
}

const dataToChart = () => {
    const { labels, data } = generateData();

    return labels.map( (item, index) => ({
        x: item,
        y: data[index]
    }));
}

const lineData = {
    labels: generateData().labels,
    datasets: [
      {
        label: 'AAPL',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataToChart()
      },{
        label: 'GOOG',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(175,132,92,1)',
        borderColor: 'rgba(175,132,92,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(175,132,92,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(175,132,92,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataToChart()
      }
    ]
  }

const Stocky = ( ) =>{
    return (
        <div>
            <h2> Exercise 5: Redux Stocky.</h2>
            <p> Stocky calculates how much you could've gained from investing in stocks.</p>

            <StockForm />

            <div>
                <Line data={ lineData } />
            </div>
        </div>
    )
}

export default Stocky