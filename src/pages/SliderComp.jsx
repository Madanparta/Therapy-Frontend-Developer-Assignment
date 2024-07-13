import React, { useState } from "react";

const SliderComp = ({setPlaybackSpeed,playbackSpeed}) => {
    const handleSpeedChange = (event) => {
        setPlaybackSpeed(parseFloat(event.target.value));
    };
  return (
    <div className=" w-fit h-fit flex flex-col p-2">
      <input
      style={{WebkitAppearance:'none',background:'linear-gradient(to right, blue 0%, orange 100%)'}}
        className="w-[220px] h-[5px] cursor-pointer"
        type="range"
        min="1"
        max="4"
        step="0.1"
        value={playbackSpeed}
        onChange={handleSpeedChange}
      />
      <div className="w-[220px] h-fit flex justify-between items-center text-[12px] font-[500] mt-2">
        <button onClick={() => setPlaybackSpeed(1)}>1x</button>
        <button onClick={() => setPlaybackSpeed(2)}>2x</button>
        <button onClick={() => setPlaybackSpeed(3)}>3x</button>
        <button onClick={() => setPlaybackSpeed(4)}>4x</button>
      </div>
    </div>
  );
};

export default SliderComp;
