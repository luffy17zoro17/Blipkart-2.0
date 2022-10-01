import Image from "next/image";





const FooterSellerBottom = () => {

    return (
    
      
      <div className="bg-blue-500 text-white w-[100%] flex flex-col px-[3%]">
        <div className="flex flex-wrap w-[100%] font-light text-[0.8rem] p-[1rem]">
          <ul className="leading-[1.6rem]">
            <h1 className="font-medium text-sm leading-[2.5rem] mr-[13rem]">
              Services</h1>
            <li>Fulfillment Services</li>
            <li>Account Management</li>
            <li>Partner Services</li> 
            <li>Packaging Services</li>  
          </ul>   
          <ul className="pb-5 leading-[1.6rem]">
            <h1 className="font-medium text-sm leading-[2.5rem]">Resources</h1>
            <li>Online Selling Guide</li>
            <li>Products in Demand</li>
            <li>Success Stories</li>
            <li>Seller Learning Center</li>
            <li>News</li>
            <li>API Documentation</li>
          </ul>
          
          <ul className="leading-[1.6rem]">
           <h1 className="font-medium text-sm leading-[2.5rem] mr-[9rem]">FAQs</h1>
           <li>Getting Started</li>
           <li>Pricing and Payments</li>
           <li>Listings and Catalog</li>
           <li>Order Management <br className="flex xl:hidden"/>and Shipping</li>
          </ul> 
          <ul className="leading-[1.6rem]">
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
        </div>
     

        
        <div className="px-[1rem]">
          <h1 className="text-[0.98rem] font-medium text-white mb-2">
            Download MY App
          </h1>
          <div className="space-y-4">
          <div className="h-[2.5rem] w-[9rem]">
            <Image
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/apple_store.png"
              alt=""
              height={60}
              width={200}
              layout="responsive"
              className="object-fill"
            />

          </div>
          <div className="h-[2.5rem] w-[9rem]">
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
        

        <div className="w-[100%] flex flex-col justify-center items-center">
          <div className="blur-[0.02rem] ml-[-3rem]
             w-[4rem] h-[4rem] m-5">   
            <Image
              src="https://w0.peakpx.com/wallpaper/287/416/HD-wallpaper-magick-mandala-b-galaxy-glow-initial-b-letter-b-magic-occult-orb.jpg"
              alt=""
              width={980}
              height={980}
              layout="responsive"
              className="object-cover rounded-full shadow shadow-black"
            />      
          </div>
          <div className="flex flex-col justify-center items-center text-center
              w-[20rem]">
            <p className="leading-[2rem] w-[100%] text-center
            text-[0.8rem] font-light">
            ©2022 Blipkart. All rights reserved<br/>
           <span className="flex justify-around w-[100%]">
            <span>
            Privacy Policy
            </span>
            <span>
            Terms of Usage
            </span>
           </span> 
        
            </p>
          </div>
          <div className="flex my-[2rem] gap-7 w-[100%] bottom-0 flex justify-center">
           <div className="h-[3rem] w-[3rem] border-4 z-10 rounded-full">
             <Image 
               src="https://images.unsplash.com/photo-1642726197634-2a21f764220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
               layout="responsive"
               alt=""
               height={980}
               width={980}
               className="object-contain rounded-full"
             />
           </div>
           <div className="h-[3rem] w-[3rem] border-4 z-10 rounded-full">
             <Image 
               src="https://w0.peakpx.com/wallpaper/938/683/HD-wallpaper-twitter-icon-blue-symbol.jpg"
               layout="responsive"
               alt=""
               height={980}
               width={980}
               className="object-cover rounded-full"
             />
           </div>
           <div className="h-[3rem] w-[3rem] border-4 z-10 rounded-full">
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
    
    );
};

export default FooterSellerBottom

