import React, { useState } from 'react'
import AnalogClock from '../pages/AnalogClock';

const TrackingScreen = () => {
    const targetTime = Date.now() + 120 + 60 + 1000;
    const [speed,setSpeed] = useState(1);
  return (
    <section>
      {/* <AnalogClock /> */}
    </section>
  )
}

export default TrackingScreen
