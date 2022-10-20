

import CalculateIcon from '@mui/icons-material/Calculate';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Image from "next/image";




const BaSellerBanner= () => {

    return (
        <>
            
         
            <div className="relative mt-[7rem]">
            <div className="overflow-hidden static
             p-[5%] bg-gradient-to-t from-red-500 to-purple-600 flex">

            
              <div>
              <div className="text-[5vw] text-orange-100 pb-5 md:text-[4.2vw] 
              tracking-tight lg:absolute lg:w-[86.2%] lg:flex lg:justify-end
              lg:text-[2.4vw] lg:font-semibold lg:text-center lg:bottom-[52%]
               xl:text-[2vw] xl:w-[84.7%]">
                  Sell online to <br className="hidden lg:flex"/>50 crores+ customers
              </div>
              
              <div className="flex justify-start items-end">
                
                <div className="flex flex-col left-10 w-[66%]">
                  <h2 className="text-white text-[1.4rem]">Launch your business in 
                  <br className="flex lg:hidden"/>
                  <span className="text-green-100">
                    10 minutes
                  </span>
                  </h2>
                  <input
                   className="w-[15rem] px-3 py-2 my-1 rounded font-light text-sm md:w-[21rem]"
                   placeholder="Enter 10 digit phone number here"
                  />
                  <div className="border bg-yellow-300 flex items-center mt-4
                   justify-center rounded cursor-pointer
                    w-[12rem] h-[2.5rem]">
                      Start Selling <TrendingFlatIcon className="hidden md:flex text-[1.8rem] ml-2"/>
                  </div>
                </div>  
              </div>  
              </div>
                
              
              <div className="h-[60%] w-[35%] rounded-full flex flex-col absolute shadow-black
              shadow-lg
              bottom-5 right-[5%] lg:right-[43%] lg:w-[16%] xl:h-[90%] xl:w-[26%] xl:right-[40%]"> 
                 <Image 
                  src="https://w0.peakpx.com/wallpaper/961/519/HD-wallpaper-business-handshake-businessmen-making-a-deal-buying-business-concepts-hands-shopping-cart.jpg"
                  height={300}
                  width={300}
                  priority={true}
                  layout="responsive"
                  className="object-cover rounded-full"
                  alt=""
                 /> 
              </div> 
                 
                
           
              <div className="absolute flex justify-center items-center bottom-10 w-[40%] 
              right-[0%] font-bold text-[1vw] hidden lg:flex">
                   <div className="flex flex-col text-center justify-center items-center 
                    w-[16%] gap-[0.4rem]">
                    <div className="p-[14%] border-blue-600 
                    border-2 bg-white rounded-full flex flex-col justify-center 
                    items-center text-[1.6vw]">
                        0%
                    </div>
                    <h1 className="text-green-200">Sell at 0%<br/>
                        Commission
                    </h1>
                   </div>


                   <div className="flex flex-col text-center justify-center items-center 
                   w-[16%] gap-[0.4rem]">
                   <div className="rounded-full border-2 bg-white border-blue-600 p-[14%] 
                   flex flex-col justify-center items-center">
                    <CalculateIcon fontSize="large" className="text-[2.4vw]"/>
                   </div>
                   <h2 className="text-green-200">Easy pricing <br/>calculator</h2>
                   </div>


                   <div className="flex flex-col items-center text-center justify-center 
                   w-[16%] gap-[0.4rem]">
                   <div className="rounded-full border-2 bg-white border-blue-600 p-[14%]
                   flex flex-col justify-center items-center">
                     <LocationOnIcon fontSize="large" className="text-[2.4vw]"/> 
                   </div>
                    <h3 className="text-green-200">27000+ <br/> pincodes</h3>
                   </div>

                   <div className="flex flex-col items-center text-center justify-center 
                   w-[16%] gap-[0.4rem]">
                   <div className="flex flex-col items-center justify-center
                   rounded-full bg-white border-2 border-blue-600 p-[14%]">
                      <GroupsIcon fontSize="large" className="text-[2.4vw]"/>
                   </div>
                     <h4 className="text-green-200">500000+ <br/> sellers</h4>
                   </div>


                   <div className="flex flex-col items-center text-center justify-center 
                   w-[16%] gap-[0.4rem]">
                   <div className="flex flex-col items-center justify-center
                   rounded-full border-2 bg-white border-blue-600 p-[14%]">
                      <BusinessCenterIcon fontSize="large" className="text-[2.4vw]"/>
                   </div>
                     <h5 className="text-green-200">Account <br/>management</h5>
                   </div>     
              </div>  
            </div>
            </div>
        
            
        </>
    );
}

export default BaSellerBanner;