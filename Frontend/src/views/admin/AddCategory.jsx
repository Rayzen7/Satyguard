import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
    const token = localStorage.getItem('token');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/category', {
                name
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success(response.data.message, {
                theme: 'colored',
                autoClose: 2000
            });

            setTimeout(() => {
                navigate('/Admin/Category');
            }, 3000);

        } catch (error) {
            toast.error(error.response.data.message, {
                theme: 'colored',
                autoClose: 2000
            });
        }
    }

  return (
    <div className='bg-[#EEEEEE] w-full min-h-[100vh] flex flex-col justify-center items-center'>
        <div className="bg-white w-[320px] lg:w-[600px] min-h-[530px] my-12 rounded-lg p-8 flex flex-col justify-center items-center">
            <h1 className='font-poppins text-purple text-[30px]'>Add Category</h1>
            <div className="mt-12 flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <label className='font-poppins1 text-[16px]'>Category Name :</label>
                    <input 
                      type="text" 
                      placeholder='Name'
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='font-poppins1 text-[14px] border-[2px] border-black rounded-md pl-3 w-[260px] lg:w-[400px] h-[50px]'
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-16">
                <button onClick={handleSubmit} className='font-poppins1 text-white bg-green hover:bg-greenHover w-[260px] lg:w-[400px] h-[50px] rounded-md'>Add</button>
                <a href="/Admin/Education">
                    <button className='font-poppins1 text-white bg-blue hover:bg-blueHover w-[260px] lg:w-[400px] h-[50px] rounded-md'>Back</button>
                </a>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default AddCategory