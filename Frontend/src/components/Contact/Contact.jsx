import React from 'react'

const Contact = () => {
  return (
    <div className='pt-[120px] pb-32 flex lg:flex-row flex-col justify-between lg:px-24 px-0 lg:items-start items-center'>
        <div className='' data-aos="fade-up" data-aos-duration="800">
            <h1 className='font-poppins lg:text-[45px] text-[35px] lg:text-start text-center'>Contact</h1>
            <form action="">
                <div className='flex lg:flex-row flex-col items-center lg:gap-16 gap-5 mt-7'>
                    <input type="text" className='bg-gray1 outline-none lg:w-[270px] w-[310px] h-[50px] rounded-lg px-5 font-poppins2 ' placeholder='Name'/>
                    <input type="email" className='bg-gray1 outline-none lg:w-[270px] w-[310px] h-[50px] rounded-lg px-5 font-poppins2' placeholder='Email'/>
                </div>
                <textarea className='bg-gray1 mt-9 w-full h-[300px] rounded-lg p-5 outline-none font-poppins2' placeholder='Message'></textarea>
            </form>
        </div>
        <div className='lg:mt-32 mt-20' data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
            <div className='font-poppins1 lg:text-[23px] text-[16px] space-y-10 '>
                <div className='flex items-center gap-12'>
                    <i className='bx bxs-phone text-[37px]'></i>
                    <p>+62 812 5476 2938</p>
                </div>
                <div className='flex items-center gap-12'>
                    <i className='bx bxs-envelope text-[37px]'></i>
                    <p>TitikKumpul26@gmail.com</p>
                </div>
                <div className='flex items-center gap-12'>
                    <i className='bx bxs-map text-[37px]'></i>
                    <p>SMK Negeri 26 Jakarta</p>
                </div>
            </div>
            <button className='text-[20px] text-white bg-black w-full h-[60px] rounded-lg mt-16 transition-all duration-300 hover:bg-white hover:border-black hover:border-2 hover:text-black hover:scale-90 cursor-pointer'>Send</button>
        </div>
    </div>
  )
}

export default Contact