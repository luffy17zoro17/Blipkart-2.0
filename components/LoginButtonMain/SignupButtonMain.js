

import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';



const SignupButtonMain = ({setIsSignupPanel}) => {
  return (
    <div className='fixed border-4 left-0 top-0 
    w-screen h-screen flex justify-center items-center'>
      <div className='flex absolute justify-center items-center z-40 w-[95%] mr-2 md:w-[100%]'>
        <div className='w-[16rem] h-[30rem] bg-blue-500 p-9 rounded z-40'>
          <h1 className='text-[2.2rem] pb-4 font-medium'>Login</h1>
          <p className="text-gray-300 text-lg">Get access to your<br/>
             Orders, Wishlist and<br/>
             Recommendations
           </p>
           <div className='mt-[4rem]'>
             <Image
               width={900}
               height={900}
               src="https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg"
               layout="responsive"
               className='object-cover rounded-xl'
             />
             <div className='w-[4.4rem] h-[4.4rem] absolute bottom-[9.3rem] ml-[6.4rem]
             shadow shadow-black rounded-full scale-[90%] sm:ml-[8.5rem] 
              sm:bottom-[11rem]'><Image 
                src="https://w0.peakpx.com/wallpaper/287/416/HD-wallpaper-magick-mandala-b-galaxy-glow-initial-b-letter-b-magic-occult-orb.jpg"
                layout="responsive"
                className='object-cover rounded-full shadow shadow-black'
                height={900}
                width={900}

             /></div>
           </div>
        </div>
        <div className='w-[24rem] h-[30rem] bg-white rounded text-gray-400 z-40'>
          
          <div className='border-4 border-yellow-600 relative flex flex-col
          items-center justify-center h-[100%]'>
          <div className='flex flex-col h-[100%] absolute justify-end
           items-start gap-8
           border-4 w-[83%]'>
            
            <input placeholder='Enter Email/Mobile number' 
            className="absolute bottom-[24rem] border-b-[0.1rem] w-[100%] 
            outline-none bg-transparent truncate
            focus:text-sm focus:pb-[1rem] focus:border-b-blue-400
            focus:w-[100%]"/>
            

            <input placeholder='Enter Password' 
            className="absolute border-b-[0.1rem] outline-none bg-transparent w-[100%]
            focus:text-sm bottom-[20.3rem] focus:pb-[1rem] focus:border-b-blue-400
            focus:w-[100%]"/>

            <span className='absolute right-0 text-sm text-blue-500 bottom-[20.6rem]
            font-medium cursor-pointer hover:underline'>Forgot?</span>
            <p className='text-xs absolute top-[9.9rem] sm:top-[11rem]'>By continuing, you agree to Blipkart's 
            <span className='text-blue-500'>
              &nbsp;Terms of Use</span> and <span className='text-blue-500'>
              Privacy Policy.</span>
            </p>
            <div className='text-sm flex flex-col items-center
             justify-center w-[100%]  gap-[0.6rem] sm:gap-[1rem]'>
              <div className='border bg-orange-400 rounded text-white cursor-pointer
               w-[100%] h-[3rem] flex justify-center items-center font-medium text-[1.1rem]'>
                Login
              </div>
                 OR
              <div className='w-[100%] flex flex-col justify-center 
              items-center font-medium border cursor-pointer
              text-[1.1rem] w-[100%] h-[3rem] shadow-md text-blue-500'>
                Request OTP
              </div>
              <h3 className='text-blue-500 pb-[2rem] pt-[1rem] cursor-pointer'>
                New to Blipkart? Create an account
              </h3>
            </div>



            <div className='z-40 absolute flex flex-col top-[-0.1rem] 
             right-[-12%] md:right-[-26%]'>
             <CloseIcon className='cursor-pointer text-black md:text-white' 
             onClick={()=>setIsSignupPanel(false)} fontSize="large"/>
            </div>
          </div> 
          
            
      
          

        </div>
        
      </div>
      
      <div className='bg-black opacity-50 absolute z-0 w-screen h-screen border-4'/>
    </div>
   </div> 
  )
}

export default SignupButtonMain