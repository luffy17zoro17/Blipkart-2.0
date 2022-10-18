import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import NavbarLogin from './Dropdowns/NavbarLogin';

import { useState } from 'react';
import NavbarMore from './Dropdowns/NavbarMore';
import LoginButtonMain from './LoginButtonMain/LoginButtonMain';
import SignupButtonMain from './LoginButtonMain/SignupButtonMain';
import SignupButton from './SignupButton';





const Navbar = ({isHover,setIsHover,isLoginPanel,setIsLoginPanel,IsSignupPanel,setIsSignupPanel,isMore,setIsMore}) => {

  


  return (
   
    
    <div className="h-[3.7rem] bg-blue-500 text-white shadow-md w-[100%]
      shadow-black flex items-center px-[5%] fixed z-50 top-0 justify-center space-x-[5%]">


      <span className="font-semibold text-xl
       text-yellow-200 italic border px-2 rounded-br-lg
       rounded-tl-lg border-pink-300">
         <Link href="/"><a>Blipkart</a></Link>
      </span>


      
      <span className='w-[30%] min-w-[10rem]'>
      <input 
        className="h-[2.3rem] text-black px-3 pr-[22%] w-[100%]
         rounded-br-md rounded-tl-md truncate outline-none"
        placeholder="Search for products, brands and more"
      />
       
        <SearchIcon fontSize="large" 
         className='text-green-300 
         p-1 ml-[-2.5rem] fixed'/>
    
      </span>

      
      <div className="">

      <div onMouseLeave={()=>{setIsHover(false)}} onMouseOver={()=>{setIsHover(true)}}
       className="flex justify-center md:relative">
      <div onClick={()=>setIsLoginPanel(true)} 
      className="bg-white w-[5rem] h-[2.3rem] cursor-pointer text-black
       rounded-sm font-semibold flex justify-center items-center 
       md:relative md:w-[9rem]">
         Login
      </div>
    
      
      {isHover ? (
         <div>
         <div className='px-[3rem] py-[2rem] font-medium w-[21rem]
         bg-black shadow-lg shadow-black border-4 border-green-400
         rounded-lg text-orange-200 top-[2.3rem] right-0 absolute md:right-[-6rem]'>
          <NavbarLogin/>
         </div>
        
         <div onMouseDown={()=>setIsSignupPanel(true)}
          className='absolute z-40 w-[50%] h-[80%]
          flex top-[2.3rem] right-[-0.2rem] md:w-[80%] md:right-[-6.3rem]'>
           <SignupButton/>
         </div> 

          </div>
        
      ) : (      
       <div></div>
      )}
      </div>

      {isLoginPanel ? (
    
        <div>
          <LoginButtonMain
           setIsLoginPanel={setIsLoginPanel}
          />
        </div>
                   
      ) : (<div></div>)}
      

      {IsSignupPanel ? (
            <div>
              <SignupButtonMain
                setIsSignupPanel={setIsSignupPanel}
              />
            </div>
      ) : (<div></div>)}

   
      
      </div>
  
      
      <span className='hidden xl:flex'>
        <Link
         href="/becomeaseller"
         as="becomeaseller"
         rel="stylesheet preload prefetch"
        >
         <a>Become a Seller</a>
        </Link>
      </span>
    
      <div onMouseLeave={()=>{setIsMore(false)}} onMouseOver={()=>{setIsMore(true)}} 
      className="w-[9rem] h-[2.2rem] cursor-pointer text-white z-[-10]
       rounded-sm flex justify-center items-center hidden md:relative lg:flex">
      <span className=''>More 
      <KeyboardArrowDownIcon className={isMore && "rotate-180"} fontSize="small"/></span>
      
      
      {isMore ? (
         
         <div className='px-[3rem] py-[2rem] font-medium absolute w-[20rem]
         bg-black shadow-lg shadow-black top-[2.2rem] text-orange-200
         rounded-lg border-4 border-green-400'>
            <NavbarMore/>
         </div>
      
      ) : (<ul></ul>)}
      </div>
      
      
    
      <span className='hidden md:flex'>
        <Link href="/cart"><a><ShoppingCartIcon/> Cart</a></Link></span>
      
    </div>
  );
}


export default Navbar;