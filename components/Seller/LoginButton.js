import React from 'react'
import CloseIcon from '@mui/icons-material/Close';



const LoginButton = ({setIsOpen}) => {
  return (
   <>
   <div className='w-screen h-screen left-0 top-0 w-[100%] absolute pr-2
   flex flex-col items-center justify-center'>
    <div className='absolute z-20 bg-white h-[39vmin] w-[83vmin] rounded-md text-black'>
     <h1 className='pl-4 p-2 text-md font-light'>Log In 
        <CloseIcon onClick={()=>setIsOpen(false)}
         className='cursor-pointer absolute mx-2 right-0
          hover:p-0.2 hover:border hover:rounded'/>
     </h1>
     <hr className='bg-gray-300 h-[-0.6rem]'/>
    </div> 
    <p className='z-30 text-black text-sm text-[2vmin] w-[24rem] absolute mt-[-4.7rem]'>
      Username or 10 digit phone number or email
       <input
          className='absolute border rounded-sm px-3 mt-[0.6rem] h-[2rem] w-[24rem]
           z-30 flex flex-col'
          placeholder='Enter your username OR Phone Number OR Email'
       />
    </p>
    <div className='absolute z-30 flex items-center mt-[22vmin] gap-[8rem] text-[0.84rem]'>
      <span className='text-blue-600 cursor-pointer
      font-light z-30'>Register for new account</span>
      <span className='text-black py-[0.4rem] px-[2.4rem] bg-blue-500 rounded opacity-50'>
        Next
      </span>
    </div>

   </div>

   <div className='absolute left-0 top-0 w-screen opacity-50 h-screen z-10 flex flex-col 
   justify-center items-center bg-black border-4'> 
   </div>
   </>
  )
}

export default LoginButton