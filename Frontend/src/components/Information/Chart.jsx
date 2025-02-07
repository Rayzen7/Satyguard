import React from 'react';
import { Bar } from 'react-chartjs-2';
import chartData from '../../assets/Data.json';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import circle from '/image/information/circle.png'
import circle35 from '/image/information/circle-35.png'
import circle15 from '/image/information/circle-15.png'
import tabel from '/image/information/tabel.png'
import './CSS/Chart.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Charts = () => {
  const data = {
    labels: chartData.map((data) => data.label),
    datasets: [
      {
        label: "Total",
        data: chartData.map((data) => data.value),
        backgroundColor: "#C305FF",
        hoverBackgroundColor: "#FFA7B2",
        borderRadius: 5,
        barThickness: 45, 
      },
    ],
  };

  const options = {
    scales: {
      x: {
        categoryPercentage: 1.0, 
        barPercentage: 0.8,  
        ticks: {
            font: {
                family: 'poppins',
                size: 11,
                weight: 'bold',
                color: 'black',
            }
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: 'white', 
        titleColor: 'black',       
        bodyColor: 'black',        
        borderColor: 'gray', 
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const description = chartData[index].description;
            return `${description}`;
          },
        },
      },
    },
  };

  return (
    <div className='mt-[120px] pb-32 lg:px-12 px-5'>
      {/* Header */}
      <div>
        <h1 className='font-poppins lg:text-[32px] text-[22px] lg:text-start text-center' data-aos="fade-right" data-aos-duration="700">Index of Mental Health Issues of Indonesian Adolescents</h1>
        <div className=' bg-pink lg:h-[23px] h-[16px] lg:w-[350px] w-[160px] ml-[130px] lg:-mt-[23px] -mt-[83px] relative -z-10' data-aos="fade-right" data-aos-duration="700"></div>
        <div className='lg:mt-6 mt-32 flex items-center lg:gap-16 gap-4 lg:scale-100 w-full'>
          <div className='space-y-5'>
            <div className='flex items-center gap-3' data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">
                <div className='lg:h-[28px] lg:w-[28px] w-[21px] h-[21px] bg-purple'></div>
                <p className='font-poppins2 lg:text-[18px] text-[12px]'>People with Psychological Disorders</p>
            </div>
            <div className='flex items-center gap-3' data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">
                <div className='lg:h-[28px] lg:w-[28px] w-[21px] h-[21px] bg-purple'></div>
                <p className='font-poppins2 lg:text-[18px] text-[12px]'>Patients with Mental Disorders</p>
            </div>
          </div>
          <div className='space-y-5'>
            <div className='flex items-center gap-3' data-aos="fade-right" data-aos-duration="700" data-aos-delay="300">
                <div className='lg:h-[28px] lg:w-[28px] w-[21px] h-[21px] bg-purple'></div>
                <p className='font-poppins2 lg:text-[18px] text-[12px]'>Total : 15.5 Million</p>
            </div>
            <div className='flex items-center gap-3' data-aos="fade-right" data-aos-duration="700" data-aos-delay="400">
                <div className='lg:h-[28px] lg:w-[28px] w-[21px] h-[21px] bg-purple'></div>
                <p className='font-poppins2 lg:text-[18px] text-[12px]'>Total : 2.45 Million</p>
            </div>
          </div>
        </div>
      </div>
      {/* Chart */}
      <div className='flex lg:flex-row flex-col items-end justify-between'>
        <div data-aos="fade-up" data-aos-duration="700"> 
            <div className='lg:mt-24 mt-12'>
                <div className='chart'>
                    <Bar data={data} options={options}/>
                </div>
                <img src={tabel} alt="" className='chart-img'/>
            </div>
            <h1 className='font-poppins1 lg:text-[22px] text-[18px] lg:text-start text-center mt-10'><span className='text-purple'>1</span> out of <span className='text-purple'>3</span> teenagers in Indonesia are classified <br />
            as <span className='text-purple'>People with psychological disorders </span></h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            <div className='flex items-center gap-2 scale-[65%] w-full cursor-pointer mb-10 lg:ml-16 ml-0'>
                <img src={circle} alt="" className='hover:scale-110 hover:-translate-x-5 transition-all duration-500'/>
                <div className='lg:scale-100 scale-125 lg:ml-0 ml-4'>
                    <img src={circle35} alt="" className='hover:scale-110 hover:translate-x-5 hover:-translate-y-5 transition-all duration-500'/>
                    <img src={circle15} alt="" className='hover:scale-110 hover:translate-x-5 hover:translate-y-5 transition-all duration-500 lg:-mt-[90px] -mt-[60px]'/>
                </div>
            </div>
            <h1 className='font-poppins1 lg:text-[22px] text-[18px] lg:text-start text-center lg:mt-0 -mt-10'><span className='text-purple'>1</span> out of <span className='text-purple'>20</span> teenagers in Indonesia are classified <br />
            as <span className='text-purple'>Patients with Mental disorders</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Charts;