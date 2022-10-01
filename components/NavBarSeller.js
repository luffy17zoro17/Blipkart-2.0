
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Link from 'next/link';



const NavBarSeller = () => {

  return (
    <div className="w-[100%] bg-gray-500 text-white pt-3 shadow-md
     shadow-black
      flex px-5 fixed z-30 top-0 justify-between
      items-start h-[6rem] lg:h-[4rem]">
     
     <div className='flex w-[80%]
     sm:flex-wrap sm:w-[55%]'>
      <div className="absolute blur-[0.02rem] left-4 top-2 z-10 w-[2.5rem] h-[2.5rem] shadow">   
            <Image
              src="https://w0.peakpx.com/wallpaper/287/416/HD-wallpaper-magick-mandala-b-galaxy-glow-initial-b-letter-b-magic-occult-orb.jpg"
              alt=""
              width={980}
              height={980}
              layout="responsive"
              className="object-cover rounded-full shadow shadow-black"
            />
      </div>
      
      <span className="font-semibold text-xl mr-[0.01rem] scale-[60%] bg-blue-600 border-4 mt-[-1rem] 
       text-center
       text-yellow-200 italic border mx-[1.3rem] h-[4rem] rounded-br-lg w-[9rem]
       rounded-tl-lg border-pink-300 mb-1.6 md:mb-[0.3rem]">
         <Link href="/">
          <a className="">Blipkart<br/>Seller Hub</a></Link>
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
         
    
      <span className="bg-white text-violet-700 w-[7rem] h-[2.2rem]
       rounded-sm font-semibold flex justify-center items-center
       shadow shadow-black">
        Login
      </span>
     </div> 
     </div>
    
  );
}


export default NavBarSeller;