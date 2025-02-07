import React, { useState } from 'react';
import health from '/image/information/health.jpg';
import { accordion } from '../../assets/Data';

const Issue = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='flex lg:flex-row flex-col lg:items-start items-center justify-center gap-[70px] mt-[120px]' data-aos-duration="800">
      <div data-aos="fade-up" data-aos-duration="900">
        <img src={health} alt="" className='lg:w-[450px] w-[280px] h-auto rounded-2xl transition-transform duration-500 hover:scale-105'/>
      </div>
      <div>
        <div data-aos="fade-right" data-aos-duration="700" className='lg:px-0 px-10'>
            <h1 className='font-poppins text-[25px] lg:text-start text-center lg:text-[35px] transition-all duration-500 hover:text-blue-500'>Types of Mental Health Disorders</h1>
            <p className='lg:w-[600px] lg:text-start text-center font-poppins2 text-[15px] transition-opacity duration-500 hover:opacity-80 py-2'>Mental health disorders, also known as mental illnesses or psychiatric disorders, encompass a wide range of conditions that affect a person thoughts, emotions, behavior, and overall well-being.</p>
        </div>
        <div className=''>
          {accordion.map((item, i) => (
            <div key={i} className='mt-5' data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
              <div className={`bg-gray-200 w-[330px] lg:w-[600px] rounded-2xl overflow-hidden transition-all duration-700 bg-gray1 block mx-auto ${activeIndex === i ? 'max-h-[500px]' : 'lg:max-h-[65px] max-h-[90px]'} ${activeIndex !== null ? 'shadow-lg' : ''}`}>
                <div 
                  className='flex justify-between items-center p-4 cursor-pointer font-poppins transition-all duration-500 hover:bg-gray-300 hover:text-purple focus:text-purple' 
                  onClick={() => handleToggle(i)} 
                >
                  <h1 className='text-lg font-semibold transition-all duration-500 lg:text-[18px] text-[12px] lg:w-full w-[250px]'>{item.title}</h1>
                  <i className={`bx ${activeIndex === i ? 'bx-chevron-up rotate-180' : 'bx-chevron-down'} text-3xl transition-transform duration-500 font-poppins1 text-[33px]`}></i>
                </div>
                <div className={`p-4 transition-opacity duration-500 ${activeIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                  <p className='lg:w-[500px] font-poppins2 lg:text-[15px] text-[13px] text-justify'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Issue;
