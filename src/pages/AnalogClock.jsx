import React, { useEffect, useState } from 'react'

const AnalogClock = ({targetTime}) => {
    const [currentTime,setCurrentTime]=useState(Date.now());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentTime(Date.now());
        },1000);
        return ()=> clearInterval(intervalId);
    },[]);

    const getAngle = (value,max)=>{
        const elapsedTime = targetTime - currentTime;
        const ratio = elapsedTime / (120*60*1000);
        return (value * ratio * 360) % 360;
    }
  return (
    <section>
      {/* <div
        className="hand hour"
        style={{ transform: `rotate(${getAngle(1, 12)}deg)` }}
      />
      <div
        className="hand minute"
        style={{ transform: `rotate(${getAngle(1, 60)}deg)` }}
      />
      <div className="center"></div> */}
    </section>
  );
}

export default AnalogClock
