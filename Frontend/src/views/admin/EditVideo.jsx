import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const EditVideo = () => {
    const token = localStorage.getItem('token');
    const [video, setVideo] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [created_by, setCreatedBy] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/api/video/${id}`, {
                video,
                title,
                desc,
                created_by
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
                navigate('/Admin/Education');
            }, 3000);

        } catch (error) {
            toast.error(error.response.data.message, {
                theme: 'colored',
                autoClose: 2000
            });
        }
    }

    useEffect(() => {
        const fetchId = async() => {
            try {
                const response = await axios.get(`http://localhost:8000/api/video/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const getId = response.data.video;
                setVideo(getId.video);
                setTitle(getId.title);
                setDesc(getId.desc);
                setCreatedBy(getId.created_by);
            } catch (error) {
                console.error(error);
            }
        }

        fetchId();
    }, [id, token]);

  return (
    <div className='bg-[#EEEEEE] w-full min-h-[100vh] flex flex-col justify-center items-center'>
        <div className="bg-white w-[320px] lg:w-[600px] min-h-[530px] my-12 rounded-lg p-8 flex flex-col justify-center items-center">
            <h1 className='font-poppins text-purple text-[30px]'>Edit Video</h1>
            <div className="mt-12 flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <label className='font-poppins1 text-[16px]'>Link Video :</label>
                    <input 
                      type="text" 
                      placeholder='Link Video'
                      required
                      value={video}
                      onChange={(e) => setVideo(e.target.value)}
                      className='font-poppins1 text-[14px] border-[2px] border-black rounded-md pl-3 w-[260px] lg:w-[400px] h-[50px]'
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className='font-poppins1 text-[16px]'>Title :</label>
                    <input 
                      type="text" 
                      placeholder='Title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className='font-poppins1 text-[14px] border-[2px] border-black rounded-md pl-3 w-[260px] lg:w-[400px] h-[50px]'
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className='font-poppins1 text-[16px]'>Description :</label>
                    <textarea 
                      type="text" 
                      placeholder='Description'
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      required
                      className='font-poppins1 pt-3 text-[14px] border-[2px] border-black rounded-md pl-3 w-[260px] lg:w-[400px] h-[150px]'
                    >
                    </textarea>
                </div>
                <div className="flex flex-col gap-1">
                    <label className='font-poppins1 text-[16px]'>Created By :</label>
                    <input 
                      type="text" 
                      placeholder='Created By'
                      value={created_by}
                      onChange={(e) => setCreatedBy(e.target.value)}
                      required
                      className='font-poppins1 text-[14px] border-[2px] border-black rounded-md pl-3 w-[260px] lg:w-[400px] h-[50px]'
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-12">
                <button onClick={handleSubmit} className='font-poppins1 text-white bg-green hover:bg-greenHover w-[260px] lg:w-[400px] h-[50px] rounded-md'>Edit</button>
                <a href="/Admin/Education">
                    <button className='font-poppins1 text-white bg-blue hover:bg-blueHover w-[260px] lg:w-[400px] h-[50px] rounded-md'>Back</button>
                </a>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default EditVideo