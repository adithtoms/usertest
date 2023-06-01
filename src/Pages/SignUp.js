import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function SignUp() {
    const [userName, setUsername]= useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    

    const handleUser=(e)=>{
        setUsername(e.target.value)
    }
    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword= (e)=>{
        setPassword(e.target.value)
    }
    let location =useNavigate()


    const handleSubmit = async(e) => {
  e.preventDefault();
  
  
const result= await axios.post('/signup',({userName,
  email,
  password,}))
alert(result.data.message)
location('/login')

};
    return (
        
        <div className="relative h-screen ">
        <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 h-3/4 w-3/4  bg-gradient-to-r from-blueLight to-blueDark rounded-tl-full rounded-tr-full"></div>
        <div className="flex justify-end items-end me-5 mt-3">
          <h5 className="me-3">Already have an account?</h5>
          <button className="bg-gradient-to-r from-blueLight to-blueDark text-white py-1 px-2 rounded" onClick={()=>location('login')}>Login</button>
        </div>
        <div className="max-w-md mx-auto p-6 flex justify-center items-center z-10">
          <div className="form z-10  ">
            <form  className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 z-10">
              <h5 className="mb-6 text-2xl font-bold text-center">Let's Go!</h5>
              <label for="uname" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Your Name" id="uname" type="text"  value={userName} onChange={handleUser}></input>
              <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Email" id="email" type="email" required value={email} onChange={handleEmail}></input>
              <label for="password" className="block text-gray-700 text-sm font-bold mb-2">Choose Password</label>
              <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Enter Password" type="password" required value={password} onChange={handlePassword}></input>
              <button type='button' onClick={handleSubmit} className="bg-gradient-to-r from-blueLight to-blueDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Sign Up</button>
            </form>
          </div>
        </div>
      </div>

        
    )
}

export default SignUp