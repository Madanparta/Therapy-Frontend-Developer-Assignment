import React from 'react'
import { Spinner } from "@material-tailwind/react";

const SpinnerLoader = () => {
  return (
    <div className='w-fit h-fit'>
      <Spinner color='white' className='w-4 h-4' />
    </div>
  )
}

export default SpinnerLoader
