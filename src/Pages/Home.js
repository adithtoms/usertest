import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [userdetails, setUserdetails] = useState({});

  const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  let location = useNavigate()

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axiosWithAuth().get('getuserdetails');
        const user = response.data;

        setUserdetails(user);
        console.log(userdetails);
      } catch (error) {
        console.error(error);

      }
    }
    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('token');
    location('/')
  };

  return (
    <>
      <div className='flex justify-end items-end me-9 mt-5 mb-5'>
        
          <h2 className='me-3'>Hi,{userdetails?(<h2>{userdetails }</h2>):([])}</h2>
          <button className='bg-gradient-to-r from-blueLight to-blueDark text-white py-1 px-2 rounded' onClick={handleLogout}>
            LogOut
          </button>
        
      </div>
      <div className='flex justify-center items-center mt-5'>
        <div>
          <div className=''>
            <h3 className='text-2xl font-bold text-center'>Name Your Organization</h3>
            <input className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4" placeholder='Enter Organization name' />
          </div>
          <div className='mt-4'>
            <h3 className='text-2xl font-bold text-center'>Select Your Organization type below</h3>
            <div className='flex justify-center items-center mt-5'>
              <div className='border rounded w-full p-4 text-gray-700 me-2'>construction</div>
              <div className='border rounded w-full p-4 text-gray-700 me-2'>construction</div>
              <div className='border rounded w-full p-4 text-gray-700 me-2'>construction</div>
              <div className='border rounded w-full p-4 text-gray-700 me-2'>construction</div>
            </div>
            <div className='flex justify-center items-center mt-5'>
              <div className='border rounded w-full p-4 text-gray-700 me-2'>construction</div>
              <div className='border rounded w-full p-4 text-gray-700 me-2'>construction</div>
              <div className='border rounded w-full p-4 text-gray-700 me-2'>construction</div>
              <div className='border rounded w-full p-4 text-gray-700 me-2'>construction</div>
            </div>
          </div>
          <div className='flex justify-center items-center mt-5'>
            <button className='bg-gradient-to-r from-blueLight to-blueDark text-white py-1 px-2 rounded'>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
