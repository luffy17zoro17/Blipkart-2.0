import Image from "next/image";
import CalculateIcon from '@mui/icons-material/Calculate';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';




const GrowFaster = () => {

    return (
        <div className="relative">
          <div className="flex flex-col justify-center items-center absolute
          w-[100%] z-10 top-[6%]">  
           <h1 className="text-2xl text-[3.6vmin] font-medium">
            GROW FASTER WITH BLIPKART
           </h1>
           <h3 className="text-blue-500 font-medium text-sm py-2">
             Know more
           </h3> 
          </div> 
          <div className="w-[100%] h-[40vw]">
           <Image
            src="https://images.unsplash.com/photo-1634117622592-114e3024ff27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
            className="object-cover"
            alt=""
            layout="fill"
           />
          </div> 
          <div className="flex items-center justify-around absolute w-[100%] z-10 bottom-5">
            <div className="text-center w-[39.1%] pl-[1.7%]">
              <h2 className="font-bold italic text-[3.4vmin] text-orange-700">NITROUZ</h2>
              <p className="text-[1.4vw] text-purple-900">
                A program designed to accelerate your Blipkart business
              </p>
            </div> 

            <div className=" border z-20 flex bottom-10 w-[45%] justify-end items-start
              font-bold text-[0.8vw]">
                


                   <div className="flex flex-col text-center justify-center items-center w-[16%] border gap-[0.4rem]">
                   <div className="rounded-full border-2 bg-white border-cyan-300 p-[6%] 
                   flex flex-col justify-center items-center">
                 
                    <CurrencyRupeeIcon fontSize="large" className="text-[2.4vw]"/>
                   </div>
                   <h2 className="text-purple-900">Ad credits <br/>worth Rs 1000</h2>
                   </div>


                   <div className="flex flex-col items-center text-center justify-center w-[16%] gap-[0.4rem]">
                   <div className="rounded-full border-2 bg-white border-cyan-300 p-[6%]
                   flex flex-col justify-center items-center">
                    
                     <ListAltIcon fontSize="large" className="text-[2.4vw]"/>
                   </div>
                    <h3 className="text-purple-900">Image editing & <br/>catalog creation support</h3>
                   </div>

                   <div className="flex flex-col items-center text-center justify-center w-[16%] gap-[0.4rem]">
                   <div className="flex flex-col items-center justify-center
                   rounded-full bg-white border-2 border-cyan-300 p-[6%]">
                    
                      <PhoneCallbackIcon fontSize="large" className="text-[2.4vw]"/>
                   </div>
                     <h4 className="text-purple-900">Dedicated <br/> call-back</h4>
                   </div>


                   <div className="flex flex-col items-center text-center justify-center w-[16%] gap-[0.4rem]">
                   <div className="flex flex-col items-center justify-center
                   rounded-full border-2 bg-white border-cyan-300 p-[6%]">
                     
                      <CoPresentIcon fontSize="large" className="text-[2.4vw]"/>
                      
                   </div>
                     <h5 className="text-purple-900">Exclusive <br/>webinars trainings</h5>
                   </div>   

                   <div className="flex flex-col items-center text-center justify-center w-[16%] gap-[0.4rem]">
                   <div className="flex flex-col items-center justify-center
                   rounded-full bg-white border-2 border-cyan-300 p-[6%]">
                      <TrendingUpIcon fontSize="large" className="text-[2.4vw]"/>

                   </div>
                     <h4 className="text-purple-900">Growth & <br/>Insights</h4>
                   </div>

                   <div className="flex flex-col items-center text-center justify-center w-[16%] gap-[0.4rem]">
                   <div className="flex flex-col items-center justify-center
                   rounded-full bg-white border-2 border-cyan-300 p-[6%]">
                      
                      <AddCircleOutlineIcon fontSize="large" className="text-[2.4vw]"/>
                   </div>
                     <h4 className="text-purple-900">& <br/>much more</h4>
                   </div>
  
            </div>
          </div>
        </div>
    );
}

export default GrowFaster;
