
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
     <div className="flex space-x-[5rem]"> 
       <div>
         <h1 className="pb-2 text-gray-500">ABOUT</h1>
         <ul>   
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
         <h1 className="pb-2 text-gray-500">HELP</h1>
         <ul>   
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation & Returns</li>
          <li>FAQ</li>
          <li>Report Infringement</li>
         </ul> 
       </div> 
       <div>
          <h1 className="pb-2 text-gray-500">POLICY</h1>
          <ul>   
            <li>Returns Policy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>EPR Compliance</li>
          </ul>
       </div>
       <div>
          <h1 className="pb-2 text-gray-500">SOCIAL</h1>
          <ul>   
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
       </div> 
     </div>  
     <div className="flex space-x-[5rem]"> 
      <div className="flex">
       <div>
          <hr className="h-[6.5rem] w-[0.03rem] mt-[0.2rem] bg-gray-500"/>
       </div>
       <div className="ml-7">
          <h1 className="pb-2 text-gray-500">Mail Us:</h1>
          <ul>
            <li>Blipkart Internet Private Limited,</li>
            <li>dferferfwefer</li>
            <li>wefewrferferf</li>
            <li>India, 2342443</li>  
          </ul>
       </div> 
      </div> 
       <div>
          <h1 className="pb-2 text-gray-500">Registered Office Address:</h1>
          <ul>
            <li>Blipkart Internet Private Limited,</li>
            <li>wefwfewferfe</li>
            <li>wefwferfedcdscfdscdcasdcsadcasdcaxaasfbrtybtrf</li>
            <li>svsdfvdfvdf</li>
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
    <div className="text-white">
      <ul className="flex justify-evenly">
       <li className="flex items-center">
         <WorkIcon 
            color="secondary" 
            fontSize="small" 
            className="mr-[0.4rem]"
         /> 
            Become a Seller
       </li>
       <li className="flex items-center">
          <StarsIcon
            color="secondary"
            fontSize="small"
            className="mr-[0.4rem]"
          />Advertise
       </li>
       <li className="flex items-center">
          <CardGiftcardIcon
             color="secondary"
             fontSize="small"
             className="mr-[0.4rem]"
          />
            Gift Cards
       </li>
       <li className="flex items-center">
           <HelpIcon
             color="secondary"
             fontSize="small"
             className="mr-[0.4rem]"
           />
         Help Center
       </li>
       <li className="flex items-center">
         © 1999-2022 Blipkart.com
       </li>
       <li className="flex items-center">
         <Image 
           src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"
           height={60}
           width={390}
         />
       </li>
      </ul> 
    </div>

    
   </div>  
  );
}

export default FooterBottom