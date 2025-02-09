import React from 'react'
import progressDev from '/image/information/development.png'
import progressDes from '/image/information/design.png'
import { Link } from 'react-router-dom'
import winnerIcon from '/image/information/winner.png'
import safetyIcon from '/image/information/safety.png'
import peopleIcon from '/image/information/people.png'
import drawIcon from '/image/information/draw.png'
import love from '/image/information/love.png'

const About = () => {
  return (
    <div className='lg:pt-[170px] pt-[80px]' data-aos-duration="800">
        <div className='text-center mt-[120px] w-full h-[20vh] mb-[90px] lg:mb-[140px] flex items-center flex-col' >
            <h1 className='font-poppins lg:text-[30px] text-[18px] lg:px-0 px-8' data-aos="fade-up" data-aos-duration="800">Improve your security and find the access you need with 
            <br />SatyGuard.</h1>
            <img src={love} alt="" className='absolute w-[150px] lg:w-[250px] h-auto -z-20 top-[25%] lg:top-[35%]'/>
        </div>
        <div className='flex lg:flex-row flex-col justify-between items-center px-[30px] lg:px-[90px]'>
            <div>
                <div className='flex space-x-3 items-center lg:mb-4 mb-8' data-aos="fade-right" data-aos-duration="800">
                    <img src={winnerIcon} alt="" className='w-[40px] h-[40px]'/>
                    <p className='font-poppins'>Quality Guaranteed</p>
                </div>
                <div>
                    <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
                        <h1 className='lg:text-[35px] text-[24px] lg:text-start text-center font-poppins lg:w-[500px]'>Here’s How We are Different From Others</h1>
                        <div className='bg-pink lg:w-[150px] w-[110px] h-5 rounded-3xl float-start lg:ml-0 ml-4 lg:float-end lg:mr-2 lg:-my-[80px] -my-[20px]'></div>
                        <p className='font-poppins1 lg:text-[18px] text-[15px] lg:w-[490px] lg:text-start text-center mb-6 lg:mt-0 mt-5'>Provide a sense of security and protection for girls and women in Indonesia. provide features that suit user needs.</p>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
                        <div className='flex justify-between items-center font-poppins text-[18px]'>
                            <p className='text-[22px] translate-y-4 lg:translate-y-5 pl-4'>Development</p>
                            <p className='lg:pr-[90px] pr-[50px]'>80</p>
                        </div>
                        <img src={progressDev} alt="" className='lg:h-auto h-[17px] lg:w-[490px] pt-1'/>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                        <div className='flex justify-between items-center font-poppins text-[18px] mt-[30px]'>
                            <p className='text-[22px] translate-y-4 lg:translate-y-5 pl-4'>Design</p>
                            <p className='lg:pr-[50px] pr-[30px]'>90</p>
                        </div>
                        <img src={progressDes} alt="" className='lg:h-auto h-[17px] lg:w-[490px] pt-1'/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay='400' data-aos-duration="800">
                        <Link to='/Downloads'><button className='font-poppins bg-black text-white mt-[70px] w-[240px] h-[50px] text-[18px] rounded-lg cursor-pointer hover:border-black hover:border-solid hover:border-2 hover:bg-white hover:text-black transition-all hover:scale-90 block mx-auto lg:mx-0'>Download</button></Link>
                    </div>
                </div>
            </div>
            <div className='lg:mt-0 mt-[80px] lg:px-0 px-5'>
                <div data-aos="fade-down-right" data-aos-duration="800">
                    <img src={safetyIcon} alt="" className='w-[40px] h-[40px]'/>
                    <h1 className='font-poppins text-[19px] lg:w-[450px] pt-4'>Assured Privacy and Security Measures in Place</h1>
                    <p className='font-poppins1 text-[16px] lg:w-[350px]'>Rest easy knowing that your sensitive data is shielded with the highest level of protection.</p>
                </div>
                <div className='flex lg:flex-row flex-col justify-between items-start lg:mt-14 mt-9 gap-8'>
                    <div data-aos="fade-up-right" data-aos-delay="200" data-aos-duration="800">
                        <img src={peopleIcon} alt="" className='w-[40px] h-[40px]'/>
                        <h1 className='font-poppins text-[19px] lg:w-[230px] pt-4'>Continuous 24/7 Support System</h1>
                        <p className='font-poppins1 text-[16px] lg:w-[260px]'>Receive assistance and guidance around the clock, ensuring you are never alone in your journey.</p>
                    </div>
                    <div data-aos="fade-up-right" data-aos-delay="400" data-aos-duration="800">
                        <img src={drawIcon} alt="" className='w-[40px] h-[40px]'/>
                        <h1 className='font-poppins text-[19px] lg:w-[250px] pt-4'>User-Friendly and Intuitive Design</h1>
                        <p className='font-poppins1 text-[16px] lg:w-[260px]'>Navigate effortlessly through our platform with a sleek and intuitive design crafted with your needs in mind.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About