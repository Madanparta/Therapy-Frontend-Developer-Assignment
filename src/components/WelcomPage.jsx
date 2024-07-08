import React, { useEffect, useState } from 'react';
import {data} from '../Data.js'
import NavContain from './NavContain.jsx';

const WelcomPage = () => {
    const [currentPage,setCurrentPage] = useState(0);

    const handleSkipButton = () => {
        setCurrentPage(data.length-1)
    }
    const handleNextButton = () => {
        let currentData = currentPage < data.length-1  ? currentPage+1 : 0;
        setCurrentPage(()=>currentData);
    }

    useEffect(()=>{
        setCurrentPage(0)
    },[]);
  return (
    <section className={`w-screen h-screen ${currentPage === 0 ? 'welecome-page01' : 'welecome-page'}`}>
      <div className='w-full h-full flex justify-center items-end pb-[35px]'>
        <NavContain navContainerData={data} countPages={currentPage} skipButton={handleSkipButton} nextButton={handleNextButton}/>
      </div>
    </section>
  )
}

export default WelcomPage
