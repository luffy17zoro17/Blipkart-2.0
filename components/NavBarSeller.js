
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';



const NavBarSeller = () => {

  return (
    <div className="w-[100%] bg-blue-500 text-white border pt-3
      flex px-5 fixed z-10 top-0 justify-between border
      items-start h-[6rem] lg:h-[4rem]">
     
     <div className='flex w-[80%]
     sm:flex-wrap sm:w-[55%]'>
      
      <span className="font-semibold text-xl mr-5
       text-yellow-200 italic border px-[1rem] h-[2rem] rounded-br-lg
       rounded-tl-lg border-pink-300 mb-1.6 md:mb-[0.3rem]">
         <Link href="/"><a>Blipkart</a></Link>
      </span>
      <ul className='flex space-x-5 absolute top-[3.4rem]
       md:relative md:top-[0.2rem]'>
       <li>Fee Structure</li>
       <li>Services</li>
       <li>Resourses</li>
       <li>FAQs</li>
       <li>Shopsy</li>
      </ul>

     </div>
     
     <div className='flex gap-5'>
      
      <span className="bg-yellow-300 text-violet-700 w-[9rem]
       h-[2.2rem]
       rounded-sm font-semibold flex justify-center items-center
       shadow shadow-black">
        Start Selling
      </span>
         
    
      <span className="bg-white text-violet-700 w-[9rem] h-[2.2rem]
       rounded-sm font-semibold flex justify-center items-center
       shadow shadow-black">
        Login
      </span>
     </div> 
     </div>
    
  );
}


export default NavBarSeller;