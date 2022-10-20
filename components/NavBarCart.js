
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { useState } from 'react';

import LoginButton from './Login/LoginButton';


const NavBarCart = () => {

  const [isHover, setIsHover] = useState(false);
  
  const [isLoginPanel, setIsLoginPanel] = useState(false);

  const [IsSignupPanel,setIsSignupPanel] = useState(false);

  return (
    <div className="h-[3.7rem] w-[100%] bg-blue-500 text-white
      shadow-md shadow-black
      flex items-center px-5 fixed z-10 top-0 justify-between 
      sm:justify-center
      space-x-[2rem]">

     <div className='flex items-center w-[80%] sm:w-[55%]'>
      <span className="font-semibold text-xl mr-5
       text-yellow-200 italic border px-3 rounded-br-lg
       rounded-tl-lg border-pink-300">
         <Link href="/"><a>Blipkart</a></Link>
      </span>


     
      <span className='w-[65%] sm:w-[55%]'>
      <input 
        className="h-[2.3rem] text-black pl-3 pr-[22%] w-[100%] text-[1.5vmin]
         rounded-br-md rounded-tl-md truncate outline-none"
        placeholder="Search for products, brands and more"
      />
       
        <SearchIcon fontSize="large" 
         className='text-green-300 
         p-1 ml-[-2.5rem] fixed'/>
    
      </span>
     </div>
    
       <LoginButton
          isHover={isHover}
          setIsHover={setIsHover}
          isLoginPanel={isLoginPanel}
          setIsLoginPanel={setIsLoginPanel}
          IsSignupPanel={IsSignupPanel}
          setIsSignupPanel={setIsSignupPanel}
       />
     </div>
    
  );
}


export default NavBarCart;