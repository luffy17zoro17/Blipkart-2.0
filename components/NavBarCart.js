
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { useState } from 'react';
import NavbarLogin from './Dropdowns/NavbarLogin';
import LoginButtonMain from './LoginButtonMain/LoginButtonMain';
import SignupButtonMain from './LoginButtonMain/SignupButtonMain';
import SignupButton from './SignupButton';



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
        className="h-[2.3rem] text-black pl-3 pr-[22%] w-[100%]
         rounded-br-md rounded-tl-md truncate outline-none"
        placeholder="Search for products, brands and more"
      />
       
        <SearchIcon fontSize="large" 
         className='text-green-300 
         p-1 ml-[-2.5rem] fixed'/>
    
      </span>
     </div>
    
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
     </div>
    
  );
}


export default NavBarCart;