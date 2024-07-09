import React, { useState } from 'react';
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import Google from "../assets/GoogleImg.png";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase';
import SpinnerLoader from '../components/shared/SpinnerLoader';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [showPassword,setShowPassword] = useState(true);
  const [loading,setLoading]=useState(false);

  const handleLoginForm = async(e) => {
    e.preventDefault();
    let fomData = new FormData(e.currentTarget);
    let email = fomData.get("email");
    let password = fomData.get("password");

    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth,email,password)
      console.log("User logged in Successfully");
      setLoading(false)
      toast.success('successfully login',{id:'login'});
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      toast.error(error.message,{id:'login'});
    }
  };
  return (
    <section className='w-full h-full bg-white px-5 pt-[44px] pb-1 md:flex md:flex-col md:justify-center md:items-center'>
      <div className='w-full h-fit text-[#101010] py-2 mb-5 md:w-4/12'>
        <h2 style={{lineHeight:'40px'}} className='text-[32px] font-[600] w-3/4'>Login to your account.</h2>
        <p style={{lineHeight:'20px'}} className='text-[14px]'>Please sign in to your account </p>
      </div>

      <form onSubmit={handleLoginForm} className='w-full h-fit flex  flex-col gap-3 md:w-4/12'>
        <div className=' flex flex-col'>
          <label style={{lineHeight:'20px'}} className='text-[14px] font-[500]' htmlFor="email">Email Address</label>
          <input name='email' id='email' className='h-[52px] text-[14px] border rounded-[4px] px-4 mt-1' type="email" placeholder='Enter Email' />
        </div>
        <div className='flex flex-col'>
          <label style={{lineHeight:'20px'}} className='text-[14px] font-[500]' htmlFor="password">Password</label>
          <div className='w-full h-fit relative'>
            <input name='password' id='password' className='h-[52px] text-[14px] w-full border rounded-[4px] px-4 mt-1' type={`${showPassword?'password':'text'}`} placeholder='Password' />
            <p className='w-fit h-fit absolute right-6 bottom-[30%]'>{showPassword?<GoEyeClosed onClick={()=>setShowPassword(false)} size={20} className='cursor-pointer'/>:<RxEyeOpen onClick={()=>setShowPassword(true)} size={20} className='cursor-pointer'/>}</p>
          </div>
        </div>
        <div className='w-full h-fit text-end py-2'>
          <p style={{lineHeight:'20px'}} className='text-[#FE8C00] text-[14px] font-[500]'>Forgot password?</p>
        </div>
        <div className='w-full h-fit my-2'>
          {loading ? <div className='text-[white] text-[14px] font-[500] text-center h-[52px] border w-full rounded-full bg-[#FE8C00] flex justify-center items-center gap-1'>
                <SpinnerLoader/>
                <p className='text-[12px] animate-pulse'>Loading..</p>
            </div>:
          <button type='submit' style={{lineHeight:'20px'}} className='text-[white] text-[14px] font-[500] text-center h-[52px] border w-full rounded-full bg-[#FE8C00]'>Sign In</button>}
        </div>
      </form>

      <fieldset className='w-[98%] h-full m-auto text-center border-t-2 my-6 md:w-4/12'>
        <legend style={{lineHeight:'20px'}} className='text-[14px] font-[500] px-3 text-[#878787]'>Or sign in with</legend>
      </fieldset>

      <section className='h-[40px] w-full flex justify-center items-center my-6 md:w-4/12'>
        <button className='w-[40px] h-[40px] rounded-full border p-2'>
          <img className='w-full h-full' src={Google} alt='google'/>
        </button>
      </section>

      <section className='w-full h-full md:w-4/12'>
        <p style={{lineHeight:'20px'}} className='text-[14px] font-[500] px-3 text-[##101010] text-center'>Don't have an account? <Link to="/signup-page" style={{lineHeight:'24px'}} className='text-[14px] text-[#FE8C00]'>Register</Link></p>
      </section>
    </section>
  )
}

export default LoginPage
