import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

import LoginButton from './Login/LoginButton';
import NavbarMore from './Dropdowns/NavbarMore';





const Navbar = ({isHover,setIsHover,isLoginPanel,setIsLoginPanel,
   IsSignupPanel,setIsSignupPanel,isMore,setIsMore}) => {

  
  return (
   
    
    <div className="h-[3.7rem] fixed w-[100%]
     bg-blue-500 text-white shadow-md space-x-[3%]
      shadow-black flex items-center top-0 justify-center">


      <span className="font-semibold p-[0.3%] text-[1rem]
       text-yellow-200 italic border rounded-br-lg
       rounded-tl-lg border-pink-300">
         <Link href="/"><a>Blipkart</a></Link>
      </span>


      
      <div className='relative flex justify-end px-[2%] hidden sm:flex'>
      <input 
        className="h-[2.3rem] text-black px-3 text-[0.8vw]
         rounded-br-md rounded-tl-md truncate outline-none"
        placeholder="Search for products, brands and more"
      />
       
        <SearchIcon fontSize="large" 
         className='text-green-300 
         absolute p-[1%]
         rounded-br-xl'/>
    
      </div>

      
      <LoginButton
           isHover={isHover}
           setIsHover={setIsHover}
           isLoginPanel={isLoginPanel}
           setIsLoginPanel={setIsLoginPanel}
           IsSignupPanel={IsSignupPanel}
           setIsSignupPanel={setIsSignupPanel}
      />
  
      
      <div className='hidden xl:flex'>
        <Link
         href="/becomeaseller"
         as="becomeaseller"
         rel="stylesheet preload prefetch"
        >
         <a>BecomeAseller</a>
        </Link>
      </div>
    

      <div className='z-[-10]'>
      <div onMouseLeave={()=>{setIsMore(false)}} onMouseOver={()=>{setIsMore(true)}} 
      className="w-[9rem] h-[2.2rem] cursor-pointer text-white
       rounded-sm flex justify-center items-center hidden 
       md:relative lg:flex">
      <span className=''>More 
      <KeyboardArrowDownIcon className={isMore && "rotate-180"} fontSize="small"/></span>
      
      
      {isMore ? (
         
         <div className='px-[3rem] py-[2rem] font-medium absolute w-[20rem] text-[1rem]
         bg-black shadow-lg shadow-black top-[2.2rem] text-orange-200
         rounded-lg border-4 border-green-400'>
            <NavbarMore
               isMore={isMore}
               setIsMore={setIsMore}
            />
         </div>
        
      
      ) : (<ul></ul>)}
      </div>
    </div>  
      
    
      <span className='hidden md:flex'>
        <Link href="/cart"><a><ShoppingCartIcon/> Cart</a></Link></span>
      
  
    </div>
  );
}


export default Navbar;