import React, { useEffect } from 'react'

const AnalogClock = ({time,setRemainingTime,remainingTime,playbackSpeed}) => {
  let timeArray = time.split(':');

  let playBackSpeedController = playbackSpeed > 1 ? playbackSpeed+ 10 : playbackSpeed;
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => Math.max(prevTime - (1000*playBackSpeedController), 0));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className='w-full h-full py-5 my-5'>
      <h2 className='text-[16px] font-[500] text-white px-5 mb-5 opacity-50 animate-bounce'>Count Down Offers</h2>
      <h3 style={{fontFamily: "Orbitron, sans-serif",fontWeight:'600',textShadow:'3px 4px 3px rgba(0,0,0,0.3)'}} className='text-[22px] w-fit h-fit m-auto p-2 text-[#FE8C00]'>{`${timeArray[0]}H : ${timeArray[1]}MIN : ${timeArray[2]}`}</h3>
    </section>
  )
}

export default AnalogClock
