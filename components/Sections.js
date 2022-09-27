import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

const Sections = () => {
  return (
    
    <div className="mt-[4.2rem] flex flex-wrap justify-evenly gap-4 
    sm:flex sm:gap-1 sm:mt-[5rem]
    relative z-0 border-0 shadow bg-white px-7">
    
       <div className="flex flex-col items-center font-semibold py-4">
         <div className="w-[62px] h-[62px]">
          <Image 
           src="https://images.unsplash.com/photo-1602566178436-8cf72756f4cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
           width={900}
           height={900}   
           className="object-cover"  
          />
         </div>
         <div> 
          <h3>Top Offers</h3>
         </div> 
       </div>
       <div className="py-4 flex flex-col items-center font-semibold">        
         <div className="w-[62px] h-[62px]">
           <Image 
            src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            width={900}
            height={900}
            className="object-cover"
           />
         </div>
         <div>
           <h3>Grocery</h3>
         </div>
       </div>
       <div className="py-4 flex flex-col items-center font-semibold">
         <div className="h-[62px] w-[62px]">
          <Image 
            src="https://images.unsplash.com/photo-1589894404892-7310b92ea7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            width={900}
            height={900}
            className="object-cover"
          />
         </div>
         <div> 
          <h3>Mobiles</h3>
         </div> 
       </div>
       <div className="py-4 flex flex-col items-center font-semibold">
         <div className="h-[62px] w-[62px]">
            <Image 
               src="https://images.unsplash.com/photo-1638656749922-9158fd414393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
               width={900}
               height={900}
               className="object-cover"
            />
         </div>  
         <div className="flex">
            <h3>Fashion</h3>
            <ExpandMoreIcon sx={{fontSize: 15}} className="mt-[0.5rem] ml-[0.2rem]"/>
         </div>
       </div>
       <div className="flex flex-col py-4 items-center font-semibold">
         <div className="h-[62px] w-[62px]">
            <Image 
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80"
            width={900}
            height={900}
            className="object-cover"
            />
         </div>
         <div className="flex">
            <h3>Electronics</h3> 
            <ExpandMoreIcon sx={{fontSize: 15}} className="mt-[0.5rem] ml-[0.2rem]" />
         </div>      
       </div>
       <div className="flex flex-col py-4 items-center font-semibold">
         <div className="h-[62px] w-[62px]">
            <Image 
               src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
               width={900}
               height={900}
               className="object-cover"
            />
         </div>  
         <div className="flex">
            <h3>Home</h3> 
            <ExpandMoreIcon sx={{fontSize: 15}} className="mt-[0.5rem] ml-[0.2rem]"/>
         </div>  
       </div>
       <div className="flex flex-col py-4 items-center font-semibold">
         <div className="h-[62px] w-[62px]">
          <Image
             src="https://images.unsplash.com/photo-1584143987552-0ab1f595af6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
             width={900}
             height={900}
             className="object-cover"
          /> 
         </div>
         <div>   
          <h3>Appliances</h3>
         </div> 
       </div>
       <div className="flex flex-col py-4 items-center font-semibold">
         <div className="h-[62px] w-[62px]">
          <Image
             src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
             width={900}
             height={900}
             className="object-cover"
          />   
         </div>
         <div> 
          <h3>Travel</h3>
         </div>  
       </div>
       <div className="flex flex-col py-4 items-center font-semibold">
         <div className="h-[62px] w-[62px]">
            <Image
               src="https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
               width={900}
               height={900}
               className="object-cover"
            /> 
         </div>
         <div className="flex">  
            <h3>Beauty, Toys & More</h3> 
            <ExpandMoreIcon sx={{fontSize: 15}} className="mt-[0.5rem] ml-[0.2rem]"/>
         </div>    
       </div>
     
    </div>
    
  );
}

export default Sections