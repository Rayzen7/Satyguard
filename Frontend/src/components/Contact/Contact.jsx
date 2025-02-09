import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/message/add', {
                name,
                email,
                message
            });
    
            toast.success(response.data.message, {
                theme: 'colored',
                autoClose: 2000
            });

            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            toast.error(error.response.data.message, {
                theme: 'colored',
                autoClose: 2000
            });
        }
    }

  return (
    <div className='pt-[120px] pb-32 flex lg:flex-row flex-col justify-between lg:px-24 px-0 lg:items-start items-center'>
        <div className='' data-aos="fade-up" data-aos-duration="800">
            <h1 className='font-poppins lg:text-[45px] text-[35px] lg:text-start text-center'>Get In Touch</h1>
            <form action="">
                <div className='flex lg:flex-row flex-col items-center lg:gap-16 gap-5 mt-7'>
                    <input 
                      type="text" 
                      className='bg-gray1 outline-none lg:w-[270px] w-[310px] h-[50px] rounded-lg px-5 font-poppins2' 
                      placeholder='Name'
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                      type="email" 
                      className='bg-gray1 outline-none lg:w-[270px] w-[310px] h-[50px] rounded-lg px-5 font-poppins2' 
                      placeholder='Email'
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <textarea 
                    className='bg-gray1 mt-9 w-full h-[300px] rounded-lg p-5 outline-none font-poppins2' 
                    placeholder='Message'
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}>    
                </textarea>
            </form>
        </div>
        <div className='lg:mt-32 mt-20' data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
            <div className='font-poppins1 lg:text-[23px] text-[16px] space-y-10 '>
                <div className='flex items-center gap-12'>
                    <i className='bx bxs-phone text-[37px] text-purple'></i>
                    <p>+62 812 5476 2938</p>
                </div>
                <div className='flex items-center gap-12'>
                    <i className='bx bxs-envelope text-[37px] text-purple'></i>
                    <p>CtrlALtWin@gmail.com</p>
                </div>
                <div className='flex items-center gap-12'>
                    <i className='bx bxs-map text-[37px] text-purple'></i>
                    <p>SMK Negeri 26 Jakarta</p>
                </div>
            </div>
            <button onClick={handleSubmit} className='text-[20px] text-white bg-black w-full h-[60px] rounded-lg mt-16 transition-all duration-300 hover:bg-white hover:border-black hover:border-2 hover:text-black hover:scale-90 cursor-pointer'>Send</button>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Contact