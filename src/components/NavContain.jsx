import React, { useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NavContain = ({navContainerData,countPages,skipButton,nextButton}) => {
    const [hovered, setHovered] = useState(false);

    const renderProgressBar = () => {
        return navContainerData.map((navCon,index)=>{
            return <div key={index} className={`bg-gray-400 w-full h-[6px] rounded-lg flex justify-center items-center mx-[1px] ${index <= countPages ? 'bg-white' :''}`}></div>
        })
    }
    const renderNavContent = () => {
        const {title,discription} = navContainerData[countPages].content;
        return(
            <section className='w-full h-fit py-3 px-2 flex justify-center items-center flex-col gap-1'>
                <h2 style={{fontWeight:600,lineHeight:'40px'}} className='text-[32px] text-center'>{title}</h2>
                <p style={{fontWeight:400,lineHeight:'20px'}} className='text-[14px] text-center w-[80%]'>{discription}</p>

                <section className=' h-[6px] w-[80px] mt-3 flex justify-between'>{renderProgressBar()}</section>
            </section>
        )
    };
    const percentageCal = () => {
        let percentage = 0;
        return hovered ? percentage = 100 : percentage=0;
    }

    const handlNavLogin = () => {
        console.log("login page")
    }
  return (
    <section className={`${countPages === 0 ? 'NavContain01' : 'NavContain'} w-[80%] h-[400px] rounded-[40px] px-4 py-5 bg-[#FE8C00] text-white flex flex-col items-center justify-between`}>

      <section>{renderNavContent()}</section>

      <section className={`w-full h-fit flex justify-between items-center px-4 ${countPages === 2 && 'hidden'}`}>
        <button onClick={skipButton} className='cursor-pointer'>Skip</button>
        <button disabled={countPages === 2} onClick={nextButton} className={`cursor-pointer ${countPages === 2 && 'cursor-default opacity-30'}`}>Next <span >&#8594;</span></button>
      </section>

      <section className={`w-fit h-full flex justify-center items-center px-4 ${countPages != 2 && 'hidden'}`}>
        <div className='w-[80px] h-fit ' onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            <CircularProgressbarWithChildren  strokeWidth={3} styles={{root: {padding:'0px'},trail:{stroke: '#ff9717',},path:{stroke: `rgba(255, 255, 255, ${percentageCal() / 100})`}}} value={percentageCal()}>
                <div onClick={handlNavLogin} className='bg-white rounded-full w-14 h-14 flex justify-center items-center cursor-pointer'>
                    <span className='text-[#FE8C00] text-2xl font-extrabold'>&#8594;</span>
                </div>
            </CircularProgressbarWithChildren>
        </div>

      </section>
    </section>
  )
}

export default NavContain