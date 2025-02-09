import React from 'react'
import glow from '/image/satybot/glow.svg'
import NavbarBack from '../../components/NavbarBack'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MoodDetection = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async() => {
    try {
      const response = await axios.post('http://localhost:7001', {
        text
      });

      console.log(response.data);
      setTimeout(() => {
        navigate('/Result');
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <NavbarBack/>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="800">
          <img src={glow} alt="" className='absolute -z-20 w-[900px] h-auto bottom-0 left-1/2 -translate-x-1/2' />
          <div className="bg-white border-4 border-purple rounded-xl w-[320px] lg:w-[700px] h-[400px] p-6">
            <h1 className='font-poppins text-[20px] lg:text-[24px]'>Describe Your Feelings</h1>
            <textarea 
              className='font-poppins2 text-[12px] lg:text-[15px] pt-3 w-full border-0 outline-none min-h-[200px]'
              placeholder='Please let me know you’re experiencing..'
              value={text}
              onChange={(e) => setText(e.target.value)}
              required>  
            </textarea>
            <button onClick={handleSubmit} className='mx-auto font-poppins text-white bg-purple hover:bg-white mt-8 hover:text-purple transition-all duration-300 px-8 block py-3 border-2 border-purple rounded-lg text-[12px] lg:text-[16px]'>Let’s Analyze</button>
          </div>
      </div>
    </div>
  )
}

export default MoodDetection