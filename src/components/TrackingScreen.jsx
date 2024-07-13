import { useEffect, useState } from 'react';
import AnalogClock from '../pages/AnalogClock';
import SliderComp from '../pages/SliderComp';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
// import { v4 as uuidV4} from 'uuid';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const TrackingScreen = () => {

  const [remainingTime, setRemainingTime] = useState(new Date().getTime() + 120 * 60 * 1000);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSideBar,setShowSideBar]=useState(true);
  const [copied,setCopied]=useState(false);
  const [showLink,setShowLink]=useState(false);

  const [shareAnim,setShareAnim]=useState('👈 Click here and share..')
  const [slider,setSlider]=useState('👈 Click Slider')

  
  const formattedTime = new Date(remainingTime)
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(",", "")


    useEffect(()=>{
      const animShar = setTimeout(()=>{
        setShareAnim('');
        setSlider('')
      },1500);

      return ()=> clearTimeout(animShar);
    },[]);

    const onCopy = () => {
      setCopied(true);
      setTimeout(()=>{setCopied(false)},2000);
    }
  return (
    <section className="w-full h-screen p-4 bg-black">
      <main className='w-full h-[50vh]'>

        {showSideBar ? (<div className='w-fit h-fit text-white relative my-5'>
          <MdKeyboardDoubleArrowRight onClick={()=>setShowSideBar(false)} color='white' className='cursor-pointer hover:translate-x-1 hover:text-[25px] ease-in-out duration-300'/>
            <span className='text-[9px] animate-bounce duration-300 absolute top-0 left-5 w-[100px]'>{slider}</span>
        </div>)
        :
        (<aside className='bg-white w-fit h-fit sticky top-0 left-0 z-20 my-5 rounded-lg'>
          <SliderComp setPlaybackSpeed={setPlaybackSpeed} playbackSpeed={playbackSpeed}/>
          <div>

          </div>
        </aside>)}

        <section className='w-full h-fit'>
          <AnalogClock time={formattedTime} setRemainingTime={setRemainingTime} remainingTime={remainingTime} playbackSpeed={playbackSpeed}/>
        </section>

        <section className='text-white w-full h-[100px] flex justify-center items-center relative  flex-col gap-6'>
          <div className='flex justify-center items-center gap-2 shareContainer'>
            <button onClick={()=>setShowLink(true)} className='z-30 focus:border-b-[1px] border-[#FE8C00] relative'>
              Share
              <span className='absolute w-[100px] top-2 left-10 text-[10px] animate-bounce duration-300'>{shareAnim}</span>
            </button>
            <IoIosShareAlt className='shareIcon' size={22} color='#FE8C00'/>
          </div>
          {showLink && (<div className='w-full h=full flex justify-center items-center gap-3'>
            <CopyToClipboard text='https://therapy-frontend-developer-assignment.netlify.app/tracking-screen' onCopy={onCopy}>
              <p className='text-[12px] cursor-pointer'>https://therapy-frontend-developer-assignment.netlify.app/</p>
            </CopyToClipboard>
            {copied && <p className='text-[8px] text-gray-300'>Copied!</p>}
          </div>)}
        </section>

      </main>
    </section>
  );
}

export default TrackingScreen
