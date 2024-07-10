import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Google from '../assets/GoogleImg.png';

const GoogleSign = () => {
    const navigation = useNavigate()
  const googleLogin = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        if(result?.user){
            navigation('/log-success')
        }
    } catch (error) {
        toast.error(error.message,{id:'googleAuth'})
    }
  };
  return (
    <button onClick={googleLogin} className="w-[40px] h-[40px] rounded-full border p-2">
      <img className="w-full h-full" src={Google} alt="google" />
    </button>
  );
}

export default GoogleSign
