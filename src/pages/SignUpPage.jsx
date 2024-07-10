import React, { useState } from 'react';
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import Google from "../assets/GoogleImg.png";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../components/firebase';
import {setDoc,doc} from 'firebase/firestore';
import SpinnerLoader from '../components/shared/SpinnerLoader.jsx';
import toast from 'react-hot-toast';
import GoogleSign from '../components/GoogleSign.jsx';


const SignUpPage = () => {
    const [showPassword,setShowPassword] = useState(true);
    const [loading,setLoading]=useState(false);
    const navigation = useNavigate();

    const handleSignUpPage = async(e) => {
        e.preventDefault();
        let fomData = new FormData(e.currentTarget);
        let email = fomData.get('email');
        let username = fomData.get('username');
        let password = fomData.get('password');

        let rememberMe = false;
        let TC = document.getElementById('TC');
        if(TC.checked){
            rememberMe = true;
        }

        if(rememberMe === false) return console.log('checkbox requird')
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            const user = auth.currentUser;
            if(user){
                await setDoc(doc(db,'Users',user.uid),{
                    email:user.email,
                    userName:username,
                });
            }
            setLoading(false);
            toast.success('successfully SignUp',{id:'SignUp'});
            console.log("User Registered Successfully!!.");
            navigation('/login-page');
        } catch (error) {
            setLoading(false);
            console.log(error.message);
            toast.error(error.message,{id:'SignUp'});
        }
    }
    return (
        <section className='w-full h-full bg-white px-5 pt-[44px] pb-1 md:flex md:flex-col md:justify-center md:items-center'>
          <div className='w-full h-fit text-[#101010] py-2 mb-5 md:w-4/12'>
            <h2 style={{lineHeight:'40px'}} className='text-[32px] font-[600] w-3/4'>Create your new account</h2>
            <p style={{lineHeight:'20px'}} className='text-[14px] w-3/4'>Create an account to start looking for the food you like</p>
          </div>
    
          <form onSubmit={handleSignUpPage} className='w-full h-fit flex  flex-col gap-3 md:w-4/12'>
            <div className=' flex flex-col'>
              <label style={{lineHeight:'20px'}} className='text-[14px] font-[500]' htmlFor="email">Email Address</label>
              <input name='email' id='email' className='h-[52px] border rounded-[4px] text-[14px] px-4 mt-1' type="email" placeholder='Enter Email' />
            </div>
            <div className='flex flex-col'>
              <label style={{lineHeight:'20px'}} className='text-[14px] font-[500]' htmlFor="name">User Name</label>
              <input name='username' id='name' className='h-[52px] border rounded-[4px] text-[14px] px-4 mt-1' type="text" placeholder='User Name' />
            </div>
            <div className='flex flex-col'>
              <label style={{lineHeight:'20px'}} className='text-[14px] font-[500]' htmlFor="password">Password</label>
              <div className='w-full h-fit relative'>
                <input id='password' name='password' className='h-[52px] w-full border rounded-[4px] px-4 mt-1 text-[14px]' type={`${showPassword?'password':'text'}`} placeholder='Password' />
                <p className='w-fit h-fit absolute right-6 bottom-[30%]'>{showPassword?<GoEyeClosed onClick={()=>setShowPassword(false)} size={20} className='cursor-pointer'/>:<RxEyeOpen onClick={()=>setShowPassword(true)} size={20} className='cursor-pointer'/>}</p>
              </div>
            </div>
            <div className='h-fit text-start py-2 flex justify-center items-start gap-2 w-3/4 '>
                <input name='password' id='TC' className=' h-fit w-fit my-1' type="checkbox" />
                <label htmlFor="TC" style={{lineHeight:'20px'}} className='text-[#101010] text-[14px] font-[500]'>I Agree with <span className='text-[#FE8C00]'>Terms of Service</span> and <span className='text-[#FE8C00]'>Privacy Policy</span> </label>
            </div>
            <div className='w-full h-fit my-2'>
              {loading ? <div className='text-[white] text-[14px] font-[500] text-center h-[52px] border w-full rounded-full bg-[#FE8C00] flex justify-center items-center gap-1'>
                <SpinnerLoader/>
                <p className='text-[12px] animate-pulse'>Loading..</p>
              </div>:
              <button type='submit' style={{lineHeight:'20px'}} className='text-[white] text-[14px] font-[500] text-center h-[52px] border w-full rounded-full bg-[#FE8C00]'>
                Sign In
              </button>}
            </div>
          </form>
    
          <fieldset className='w-[98%] h-full m-auto text-center border-t-2 my-6 md:w-4/12'>
            <legend style={{lineHeight:'20px'}} className='text-[14px] font-[500] px-3 text-[#878787]'>Or sign in with</legend>
          </fieldset>
    
          <section className='h-[40px] w-full flex justify-center items-center my-6 md:w-4/12'>
            {/* <button className='w-[40px] h-[40px] rounded-full border p-2'>
              <img className='w-full h-full' src={Google} alt='google'/>
            </button> */}
            <GoogleSign/>
          </section>
    
          <section className='w-full h-full md:w-4/12'>
            <p style={{lineHeight:'20px'}} className='text-[14px] font-[500] px-3 text-[##101010] text-center'>Have an account? <Link to="/login-page" style={{lineHeight:'24px'}} className='text-[14px] text-[#FE8C00]'>Sign In</Link></p>
          </section>
        </section>
      )
}

export default SignUpPage
