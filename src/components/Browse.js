import React from 'react';
import Header from './Header';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div>
      <Header />
      <div className="flex justify-end p-4 m-4">
        <div className='flex flex-col'>
        <div className='w-10 h-10'>
          <img className='w-full h-full object-cover' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt='Netflix Profile'/>
        </div>
        <button
        onClick = {handleSignOut} 
        className='cursor-pointer bg-red-500 text-white p-1 mt-2 rounded-md text-sm'>Sign Out</button>
        </div>
      </div>

    </div>
  );
};

export default Browse;

