import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPass, setRememberPass] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassWord = (e) => {
        setPassword(e.target.value)
    }
    const handleRememberPassword = (e) => {
        setRememberPass(e.target.checked)
    }
    let location = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('/signin', {
              email,
              password,
            });
            if (result.status === 200) {
                const { message,  user } = result.data;
                alert(message);
                // console.log(user);
                const token=user.token
                localStorage.setItem('token', token);
               location('/home');
              } else {
                throw new Error('Invalid result');
              }
          } catch (error) {
            if (error.response && error.response.status === 401) {
              alert('Authentication failed. Please check your credentials.');
            } else {
              alert('An error occurred while logging in. Please try again later.');
            }
            console.error(error);
          }
        

    }

    return (
        <div className="relative h-screen ">
            <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 h-3/4 w-3/4  bg-gradient-to-r from-blueLight to-blueDark rounded-tl-full rounded-tr-full"></div>
            <div className='flex justify-end items-end me-5 mt-3'>
                <h5 className='me-3'>Do not have an account?</h5>
                <button className='bg-gradient-to-r from-blueLight to-blueDark text-white  py-1 px-2 rounded' onClick={() => location('/')}>Sign Up</button>
            </div>
            <div className='max-w-md mx-auto p-6 flex justify-center items-center'>

                <div className='form z-10'>
                    <form className='bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 z-10'>
                        <h5 className='mb-6 text-2xl font-bold text-center'>Welcome Back</h5>
                        <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                        <input className='mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter Email' id='email' type='email' required value={email} onChange={handleEmail}></input>
                        <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                        <input className='mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='password' placeholder='Enter Password' type='password' required value={password} onChange={handlePassWord}></input>
                        <label htmlFor="rememberPassword" className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="rememberPassword"
                                checked={rememberPass}
                                onChange={handleRememberPassword}
                                className="form-checkbox h-4 w-4 text-green-500 rounded focus:outline-none focus:shadow-outline"
                            />
                            <span className="ml-2 text-gray-700 text-sm font-bold">Remember Password</span>
                        </label>

                        <button type='button' onClick={handleSubmit} className='bg-gradient-to-r from-blueLight to-blueDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'>Login</button>
                    </form>
                    <div>
                        <h5 className='text-white'>Forgot your Password?</h5>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Login