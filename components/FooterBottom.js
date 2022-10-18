
import React from 'react'
import Image from 'next/image';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';



const FooterBottom = () => {
  return (
   <div className="bg-gray-900 pb-4"> 
    <div className="text-white flex 
     justify-between pl-[4rem] pr-[5rem] py-[2.4rem] text-[13px] 
     font-light">
     <div className="flex text-xs gap-[2.8rem] sm:gap-[7rem] sm:text-[13px]
       md:gap-[10rem]"> 
       <div>
         <h1 className="pb-2 text-gray-400">ABOUT</h1>
         <ul className='leading-6'>   
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Blipkart Stories</li>
          <li>Press</li>
          <li>Blipkart Wholesale</li>
          <li>Corporate Information</li>
         </ul> 
       </div> 
       <div>
         <h1 className="pb-2 text-gray-400">HELP</h1>
         <ul className='leading-6'>   
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation & Returns</li>
          <li>FAQ</li>
          <li>Report Infringement</li>
         </ul> 
       </div> 
       <div>
          <h1 className="pb-2 text-gray-400">POLICY</h1>
          <ul className='leading-6'>   
            <li>Returns Policy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>EPR Compliance</li>
          </ul>
       </div>
       <div>
          <h1 className="pb-2 text-gray-400 md:pr-[5rem]">SOCIAL</h1>
          <ul className='leading-6'>   
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
       </div> 
     </div>  
     <div className="flex space-x-[5rem]"> 
      <div className="flex">
       <div>
          <hr className="h-[13.5rem] w-[0.03rem] mt-[0.2rem] mx-5 bg-gray-500"/>
       </div>
       <div className="">
          <h1 className="pb-2 text-gray-400">Mail Us:</h1>
          <ul>
            <li>Blipkart Internet Private Limited,</li>
            <li>dferferfwefer</li>
            <li>created by Thomas Mathew</li>
            <li>India, 2342443</li>  
          </ul>
       </div> 
      </div> 
       <div>
          <h1 className="pb-2 text-gray-400">Registered Office Address:</h1>
          <ul>
            <li>Blipkart Internet Private Limited,</li>
            <li>wefwfewferfe</li>
            <li>wefwferfedcdscfdscdcasdcsadcasdcaxaasfbrtybtrf</li>
            <li>created by Thomas Mathew</li>
            <li>India</li>
            <li>CIN:U4234243R234RFF324F43</li>
            <li>Telephone:
              <span className="text-blue-600">
                00000000000
              </span>
            </li> 
          </ul>
       </div> 
     </div> 
    </div>
    <div className="pt-2 pb-[0.5rem]">
      <hr className="h-[0.01rem] w-[100%] bg-gray-500"/>
    </div> 

    
      <ul className='text-sm text-white flex flex-col space-y-2
        items-center justify-evenly pt-4
        xl:space-y-0 xl:text-[1rem] xl:flex-row'> 
       <li className="">
         <WorkIcon 
            color="secondary" 
            fontSize="small" 
            className="mr-2"
         /> 
            Become a Seller
       </li>
       <li className="">
          <StarsIcon
            color="secondary"
            fontSize="small"
            className="mr-2"
          />Advertise
       </li>
       <li className="">
          <CardGiftcardIcon
             color="secondary"
             fontSize="small"
             className="mr-2"
          />
            Gift Cards
       </li>
       <li className="">
           <HelpIcon
             color="secondary"
             fontSize="small"
             className="mr-2"
           />
         Help Center
       </li>
       <li className="">
         © 1999-2022 Blipkart.com
       </li>
       <li className=''>
         <Image 
           src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"
           height={60}
           width={390}
           alt=""
           layout="fixed"
         />
       </li>
      </ul>   
   </div>  
  );
}

export default FooterBottom