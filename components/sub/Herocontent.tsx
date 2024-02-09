"using client";
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { tenorsans, diphylleia, josefinsans, montserrat } from '../fonts/fonts';

const Herocontent = () => {
  return (
   <div className='flex justify-center items-center'>
    <div  className="flex w-full h-full justify-center items-center mt-[90px]">
      <div>
      <Image 
        src="/heroimg.png"
        alt="Hero image"
        height={800}
        width={1350}
        className='opacity-65'
      />
   </div>

    <div  className= 'absolute flex flex-col  w-full h-full gap-8 justify-center items-center'>
        <div >
          <p style={josefinsans.style} className='text-[1.2rem] w-full'>W E L C O M E  &nbsp;&nbsp;&nbsp;&nbsp;  T O</p>
        </div>       
        <div>
          <p style={diphylleia.style} className='text-[6rem]'>Track Wise</p>
        </div>
        <div>
          <p className='text-[1.1rem]'> Unlock Smart Shopping with your Shopping Companion for Informed Choices, Every Price Detail and Priceless Deals.</p>
        </div>
        <div>
        <a style={josefinsans.style} className='button bg-white p-[10px] pl-[2rem] pr-[2rem]'>
           L E A R N &nbsp;&nbsp; M O R E
        </a>
        </div>
        </div>  
    </div>
    </div>
  )
}

export default Herocontent