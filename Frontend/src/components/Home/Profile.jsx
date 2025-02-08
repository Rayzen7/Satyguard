import React from 'react'
import setio from '/image/profile/setio.png'
import salsa from '/image/profile/salsa.png'

const Profile = () => {
  return (
    <div className='pb-32'>
        <div className="" >
            <h1 className='text-center font-poppins text-[28px] lg:text-[32px]'>Our Team</h1>
            <hr className='bg-pink h-[14px] w-[150px] lg:w-[170px] rounded-full -translate-y-5 relative -z-20 mx-auto border-none outline-none' />
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-16 mt-8">
            <div className="lg:w-[330px] lg:h-[470px] w-[270px] h-[400px] border-[5px] border-purple rounded-2xl p-6" data-aos="fade-up" data-aos-duration="800">
                <img src={salsa} alt="" className='lg:w-[280px] lg:h-[280px] w-[220px] h-[220px] rounded-xl mx-auto bg-gray' />
                <div className="text-center mt-4">
                    <h1 className='font-poppins text-[20px] lg:text-[24px]'>Salsabila Sausan</h1>
                    <p className='font-poppins1 text-[16px]'>UI/UX, Ilustrator</p>
                </div>
                <div className="flex justify-center mt-6">
                    <i className='bx bxl-instagram text-[35px] lg:text-[40px] cursor-pointer'></i>
                    <i className='bx bxl-linkedin-square text-[35px] lg:text-[40px] cursor-pointer'></i>
                </div>
            </div>
            <div className="lg:w-[330px] lg:h-[470px] w-[270px] h-[400px] border-[5px] border-purple rounded-2xl p-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <img src={setio} alt="" className='lg:w-[280px] lg:h-[280px] w-[220px] h-[220px] rounded-xl mx-auto bg-gray' />
                <div className="text-center mt-4">
                    <h1 className='font-poppins text-[20px] lg:text-[24px]'>Setio Nugraha</h1>
                    <p className='font-poppins1 text-[16px]'>Fullstack Development</p>
                </div>
                <div className="flex justify-center mt-6">
                    <i className='bx bxl-instagram text-[35px] lg:text-[40px] cursor-pointer'></i>
                    <i className='bx bxl-linkedin-square text-[35px] lg:text-[40px] cursor-pointer'></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile