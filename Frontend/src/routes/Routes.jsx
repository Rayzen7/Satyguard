import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../views/Home.jsx';
import Information from '../views/Information.jsx';
import Downloads from '../views/Downloads.jsx';
import Contacts from '../views/Contacts.jsx';
import ScrollTop from '../components/ScrollTop.jsx';
import Login from '../views/auth/Login.jsx';
import Register from '../views/auth/Register.jsx';
import Satybot from '../views/Satybot.jsx';
import MoodDetection from '../views/mood-detection/MoodDetection.jsx';
import { ResultMood } from '../views/mood-detection/ResultMood.jsx';
import DashboardVideo from '../views/admin/DashboardVideo.jsx';
import AddVideo from '../views/admin/AddVideo.jsx';
import EditVideo from '../views/admin/EditVideo.jsx';
import DashboardMessage from '../views/admin/DashboardMessage.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop/>
        <Routes>
            {/* User */}
            <Route path='/' element={<Home/>}/>
            <Route path='/Information' element={<Information/>}/>
            <Route path='/Downloads' element={<Downloads/>}/>
            <Route path='/Contacts' element={<Contacts/>}/>
            <Route path='/Satybot' element={<Satybot/>}/>
            <Route path='/Mood-Detection' element={<MoodDetection/>}/>
            <Route path='/Result' element={<ResultMood/>}/>

            {/* Admin */}
            <Route path='/Admin/Education' element={<DashboardVideo/>}/>
            <Route path='/Admin/Education/Add' element={<AddVideo/>}/>
            <Route path='/Admin/Education/Edit/:id' element={<EditVideo/>}/>
            <Route path='/Admin/Message' element={<DashboardMessage/>}/>

            {/* Auth */}
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router