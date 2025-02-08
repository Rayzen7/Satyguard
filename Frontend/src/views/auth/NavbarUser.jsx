import React from 'react'
import { useEffect, useState } from 'react'
import NavbarAuth from '../../components/NavbarAuth';
import Navbar from '../../components/Navbar';

export const NavbarUser = () => {
    const [tokenValid, setTokenValid] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setTokenValid(token);
    }, []);

    if (!tokenValid) {
        return <Navbar/>
    } else {
        return <NavbarAuth/>
    }
}