import { Line } from 'react-chartjs-2'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'
import assatsData from '../../../../mock/assets.json'
import { useState } from 'react'
Chart.register(CategoryScale, PointElement, LineElement, LinearScale)

const style = {
  container: `flex `,
  graph: `w-[100]`,
}

function DoughnutChart() {
  const [filteredData, setFilteredData] = useState([])
  // console.log('data: ', assatsData)
  const { assets } = assatsData
  const datapoints = [0.2, 0.4, 0.6, 1.3, 1, 1.2]

  // useEffect(()=>{
  //     for(let i =0; i<= assets.lengh)
  // })

  const data = {
    labels: [
      '2022-10-29',
      '2022-06-20',
      '2022-04-04',
      '2022-02-14',
      '2022-09-22',
      '2022-08-11',
    ],
    type: 'line',
    datasets: [
      {
        // data: [{x:'2022-10-29', y:assets[0].asset_collection?.stats?.seven_day_average_price || 23}, {x:new Date(), y: 23},{x:new Date(), y: 23},{x:new Date(), y: 23},{x:new Date(), y: 23}],
        // backgroundColor: "#809635",

        label: 'Cubic interpolation (monotone)',
        data: datapoints,
        borderColor: 'blue',
        fill: false,
        cubicInterpolationMode: '',
        tension: 0.4,
      },
    ],
  }

  return (
    <div className={style.container}>
      <Line data={data} />
    </div>
  )
}

export default DoughnutChart
