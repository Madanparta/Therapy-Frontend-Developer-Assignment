import React, { useEffect, useState } from 'react';
import check from '../assets/check.png';
import Confetti from 'react-confetti'
import { auth } from '../components/firebase';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SuccessPage = () => {
    const [controll,setControll]=useState(true);
    const navigation = useNavigate();

    const handleLogout = async()=>{
        await auth.signOut()
        toast.success('logout successfully',{id:'logout'});
        navigation('/');
    }

    useEffect(()=>{
        const controllAni = setTimeout(()=>{
            setControll(false);
        },4000);

        return ()=>{
            clearTimeout(controllAni);
        }
    },[]);
  return (
    <section className={`w-screen h-screen overflow-hidden welecome-page01 relative`}>
      <div style={{borderRadius:'24px 24px 0 0'}} className='w-full h-[492px] pb-[35px] bg-white absolute left-0 bottom-0 NavContain01'>
        <div className='h-[24px] w-[85%] m-auto flex justify-center items-center'>
            <p className='h-[4px] w-[58.13px] bg-[#000000]'></p>
        </div>

        <div className='w-full h-[168px] my-6 flex justify-center items-center'>
            <div style={{transition:'0.3s'}} className={`w-fit h-[124px] ${controll && 'bg-[#fe8c002a] opacity-90 ease-in-out'} rounded-full p-0`}>
                <img className='w-[124px] h-[124px]' src={check} alt='checkMark'/>
                {controll && <Confetti className='ease-in-out' style={{transition:'0.3s'}}/>}
            </div>
        </div>
        <div className='w-full h-fit text-center my-5'>
            <h3 style={{lineHeight:'32px'}} className='text-[24px] text0[#101010] font-[600]'>Login Successful</h3>
        </div>
        <div className='w-full h-fit text-center my-5'>
            <Link to="/tracking-screen"><button style={{lineHeight:'20px'}} className='text-[14px] bg-[#FE8C00] w-[312px] rounded-full h-[52px] text-[#FFFFFF] font-[600]'>Go to Tracking Screen</button></Link>
        </div>
        <div className='w-full h-fit text-center my-6'>
            <p onClick={handleLogout} style={{lineHeight:'20px'}} className='text-[14px] text-[#878787] font-[500] cursor-pointer'>Logout</p>
        </div>
      </div>
    </section>
  )
}

export default SuccessPage
