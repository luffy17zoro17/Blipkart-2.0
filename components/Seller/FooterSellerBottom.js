import Image from "next/image";





const FooterSellerBottom = () => {

    return (
    
      
      <div className="bg-blue-500 text-white w-[100%] flex flex-col px-[3%]">
      
        <div className="flex flex-wrap justify-evenly w-[100%] font-light text-[0.8rem] p-[1rem]">
          <ul className="leading-[1.5rem]">
            <h1 className="font-medium text-sm leading-[2.5rem]">
              Services</h1>
            <li>Fulfillment Services</li>
            <li>Account Management</li>
            <li>Partner Services</li> 
            <li>Packaging Services</li>  
          </ul>   
          <ul className="pb-5 leading-[1.5rem] mx-[2rem]">
            <h1 className="font-medium text-sm leading-[2.5rem]">Resources</h1>
            <li>Online Selling Guide</li>
            <li>Products in Demand</li>
            <li>Success Stories</li>
            <li>Seller Learning Center</li>
            <li>News</li>
            <li>API Documentation</li>
          </ul>
          
          <ul className="leading-[1.5rem]">
           <h1 className="font-medium text-sm leading-[2.5rem] mr-[9rem]">FAQs</h1>
           <li>Getting Started</li>
           <li>Pricing and Payments</li>
           <li>Listings and Catalog</li>
           <li>Order Management <br className="flex xl:hidden"/>and Shipping</li>
          </ul> 
          <ul className="leading-[1.5rem]">
           <h1 className="font-medium text-sm leading-[2.5rem] mr-[14vh]">
            Contact Us
           </h1>
           <li>sell@blipkart.com</li>
          </ul> 
          <ul className="leading-[1.6rem]">  
           <h1 className="font-medium text-sm leading-[2.5rem]">
             SITEMAP
           </h1>
          </ul>
          <div className="pt-2 flex flex-col pr-[18rem] sm:pr-[0rem] sm:pl-[3rem] md:pt-2">
          <h1 className="text-[0.98rem] font-medium text-white mb-2">
            Download MY App
          </h1>
          <div className="space-y-2.5">
          <div className="h-[2.5rem] w-[8.4rem] cursor-pointer">
            <Image
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/apple_store.png"
              alt=""
              height={60}
              width={200}
              layout="responsive"
              className="object-fill"
            />

          </div>
          <div className="h-[2.5rem] w-[8.4rem] cursor-pointer">
          <Image
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/play_store.png"
              alt=""
              height={60}
              width={200}
              layout="responsive"
              className="object-fill"
            />
          </div>  
          </div>
          </div> 
        </div>
     

        
        

        <div className="w-[100%] flex flex-col justify-center items-center md:flex-row md:justify-evenly">  
          <div className="lg:flex lg:items-center">  
            <div className="h-[4.7rem] w-[4.7rem] mt-[0.6rem] lg:pt-[1.8rem] lg:mr-8 lg:h-[8.7rem] lg:w-[8.7rem]"> 
            <Image
              src="https://w0.peakpx.com/wallpaper/287/416/HD-wallpaper-magick-mandala-b-galaxy-glow-initial-b-letter-b-magic-occult-orb.jpg"
              alt=""
              width={980}
              height={980}
              layout="responsive"
              className="object-cover rounded-full shadow shadow-black scale-[87%]"
            />    
            </div>  
        
        
            <p className="leading-[1.5rem] w-[100%] text-center
            text-[0.8rem] font-light md:w-[140%] md:text-start">
            ©2022 Blipkart. All rights reserved<br/>
            </p>
          </div>  

          <div className="md:flex md:w-[60%]">
          <div className="flex justify-center w-[100%] text-[0.8rem] font-light gap-[5rem] pt-2 md:flex-col 
          md:gap-[0rem] md:items-center md:absolute md:left-0 md:h-[7rem]
           lg:flex-row lg:gap-8">
            <span className="cursor-pointer">
            Privacy Policy
            </span>
            <span className="cursor-pointer">
            Terms of Usage
            </span>
          </div> 
        
            
          
          <div className="flex my-[2rem] gap-7 w-[100%] bottom-0 justify-center md:justify-end">
           <div className="h-[3rem] w-[3rem] border-4 z-10 rounded-full cursor-pointer">
             <Image 
               src="https://images.unsplash.com/photo-1642726197634-2a21f764220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
               layout="responsive"
               alt=""
               height={980}
               width={980}
               className="object-contain rounded-full"
             />
           </div>
           <div className="h-[3rem] w-[3rem] border-4 z-10 rounded-full cursor-pointer">
             <Image 
               src="https://w0.peakpx.com/wallpaper/938/683/HD-wallpaper-twitter-icon-blue-symbol.jpg"
               layout="responsive"
               alt=""
               height={980}
               width={980}
               className="object-cover rounded-full"
             />
           </div>
           <div className="h-[3rem] w-[3rem] border-4 z-10 rounded-full cursor-pointer">
             <Image 
               src="https://images.unsplash.com/photo-1662947852375-0d45b28ff623?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
               layout="responsive"
               alt=""
               height={980}
               width={980}
               className="object-cover rounded-full"
             />
           </div>
          </div>
          </div>
        </div>
      </div>       
    
    );
};

export default FooterSellerBottom

