

import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';



const SignupButtonMain = ({setIsSignupPanel}) => {
  return (
    <div className='fixed left-0 top-0 z-40
    w-screen h-screen flex justify-center items-center'>
      <div className='flex absolute justify-center items-center z-40 w-[95%] md:w-[100%]'>
        <div className='w-[16rem] h-[30rem] bg-blue-500 p-9 rounded-l z-40'>
          <h1 className='text-[1.7rem] sm:text-[2rem] pb-4 font-medium leading-[2.7rem]'>
            Looks like you're new here!
          </h1>
          <p className="text-gray-300 text-lg">Sign up with your mobile
             number to get started<br/>
           </p>
           <div className='top-[19.4rem] absolute z-40 
           w-[9rem] ml-[-1rem] sm:ml-[0.7rem]
           sm:top-[18.3rem] lg:scale-[110%]'>
             <Image
               width={900}
               height={900}
               src="https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg"
               layout="responsive"
               className='object-cover rounded-xl'
             />
             <div className='w-[4.4rem] h-[4.4rem] absolute bottom-[6.2rem] ml-[6.2rem]
             shadow shadow-black rounded-full 
              '>
              <Image 
                src="https://w0.peakpx.com/wallpaper/287/416/HD-wallpaper-magick-mandala-b-galaxy-glow-initial-b-letter-b-magic-occult-orb.jpg"
                layout="responsive"
                className='object-cover rounded-full shadow shadow-black'
                height={900}
                width={900}
             />
             </div>
           </div>
        </div>
        <div className='w-[24rem] h-[30rem] bg-white rounded-r text-gray-400 z-40'>
          
          <div className='relative flex flex-col
          items-center justify-center h-[100%]'>
          <div className='flex flex-col h-[100%] absolute justify-end
           items-start gap-8 w-[83%]'>
            
            <input placeholder='Enter Mobile number' 
            className="absolute bottom-[24rem] border-b-[0.1rem] w-[100%] 
            outline-none bg-transparent truncate
            focus:text-sm focus:pb-[1rem] focus:border-b-blue-400
            focus:w-[100%]"/>
            
            <p className='text-xs absolute top-[7.5rem]'>By continuing, you agree to Blipkart's 
            <span className='text-blue-500 cursor-pointer'>
              &nbsp;Terms of Use</span> and <span className='text-blue-500 cursor-pointer'>
              Privacy Policy.</span>
            </p>
            <div className='text-sm flex flex-col items-center h-[18rem]
             justify-start w-[100%] gap-[0.6rem]'>
              <div className='border bg-orange-400 rounded text-white cursor-pointer
               w-[100%] h-[3rem] flex justify-center items-center font-medium text-[1rem]'>
                CONTINUE
              </div>
        
              <div className='w-[100%] flex flex-col justify-center 
              items-center font-medium border cursor-pointer
              text-[1rem] w-[100%] h-[3rem] shadow-md text-blue-500'>
                Existing User? Log in
              </div>
            </div>



            <div className='z-40 absolute flex flex-col top-[0.3rem] 
             right-[-8%] md:right-[-23%] md:top-[0rem]'>
             <CloseIcon className='cursor-pointer text-black md:text-white' 
             onClick={()=>setIsSignupPanel(false)} fontSize="large"/>
            </div>
          </div> 
          
            
      
          

        </div>
        
      </div>
      
      <div className='bg-black opacity-50 absolute z-0 w-screen h-screen'/>
    </div>
   </div> 
  )
}

export default SignupButtonMain