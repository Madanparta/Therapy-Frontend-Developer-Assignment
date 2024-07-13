import axios from 'axios';
import React, { memo, useEffect, useState } from 'react'

const Quotes = () => {
    const [newQuotes,setNewQuotes]=useState(null);

    const data =  [
        "age",
        "alone",
        "amazing",
        "anger",
        "architecture",
        "art",
        "attitude",
        "beauty",
        "best",
        "birthday",
        "business",
        "car",
        "change",
        "communication",
        "computers",
        "cool",
        "courage",
        "dating",
        "death",
        "design",
        "dreams",
        "education",
        "environmental",
        "equality",
        "experience",
        "failure",
        "faith",
        "family",
        "famous",
        "fear",
        "fitness",
        "food",
        "forgiveness",
        "freedom",
        "friendship",
        "funny",
        "future",
        "god",
        "good",
        "government",
        "graduation",
        "great",
        "happiness",
        "health",
        "history",
        "home",
        "hope",
        "humor",
        "imagination",
        "inspirational",
        "intelligence",
        "jealousy",
        "knowledge",
        "leadership",
        "learning",
        "legal",
        "life",
        "love",
        "marriage",
        "medical",
        "men",
        "mom",
        "money",
        "morning",
        "movies",
        "success"
      ];
      
    useEffect(()=>{
        const setQuotes = setInterval(()=>{
            async function fetchApi (){
                try {
                    const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${data[Math.floor(Math.random() * data.length)]}`,{
                        Method: 'GET',
                        headers:{
                            Accept: 'application.json',
                            'Content-Type': 'application/json',
                            'X-Api-Key':'7HHgwdlaRFBKevRLglLnKw==j4hAU9SDFpYm4Am8'
                        }
                    });
    
                    if(res.status === 200){
                        const resData = await res.json();
                        resData && setNewQuotes(resData[0]);
                    }
                    
                } catch (error) {
                    console.log(error.message);
                }
            }
            fetchApi();
        },5000);

        return () => clearInterval(setQuotes);
    },[]);
  return (
    <section className='w-full h-full text-white flex justify-center items-start px-3 py-3'>
      <div className='w-fit h-fit flex justify-center items-center flex-col gap-2'>
        <h2 style={{lineHeight:'20px'}} className='text-[28px] font-[600]'>Author : {!newQuotes ? 'loading.. ':newQuotes?.author}</h2>
        <h3 style={{lineHeight:'14px'}} className='text-[14px] font-[400]'>Category : {!newQuotes ? "loading.. ":newQuotes?.category}</h3>
        <br />
        <p className='text-[16px] w-full h-fit text-center font-[16px] font-serif'>Quote : {!newQuotes? 'loading.. ':newQuotes?.quote}</p>
      </div>
    </section>
  )
}

export default memo(Quotes)
