import Image from "next/image";






const EventsAndProgs = () => {

    return (
     <div  className="bg-white pb-[8rem] shadow">
        <div className="flex flex-col justify-center items-center">
         <h1 className="py-8 text-2xl">EVENTS AND PROGRAMS</h1>
         <hr className="h-[0.1rem] w-[27rem] mb-7 lg:hidden"/>
        </div>  
        
        <div className="lg:flex lg:w-[100%] lg:justify-around lg:px-[5%]">
        <div className="ml-7 lg:ml-0 xl:scale-[120%] lg:pt-2">
            <div className="relative w-[17rem] h-[11.7rem]">
            <Image
              src="https://images.unsplash.com/photo-1468234560893-89c00b6385c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
              layout="responsive"
              width={60}
              height={40}
              className="object-cover rounded-md"
            />
            <div className="py-1 px-4 top-[5%] right-[5%] rounded
             bg-gray-300 absolute z-10 font-semibold shadow-md cursor-pointer">Events</div>
            <h1 className="absolute z-10 flex flex-col items-center
            justify-center w-[100%] top-[26%] italic font-bold
            text-pink-700
            ">SELLER<br/>CONCLAVE
            <div className="absolute blur-[0.02rem] left-4 z-10 w-[4rem] h-[4rem]">   
            <Image
              src="https://w0.peakpx.com/wallpaper/287/416/HD-wallpaper-magick-mandala-b-galaxy-glow-initial-b-letter-b-magic-occult-orb.jpg"
              alt=""
              width={980}
              height={980}
              layout="responsive"
              className="object-cover rounded-full shadow shadow-black"
            />
            </div>
            </h1>
            </div>     
            <h2 className="pt-3 pb-1 font-medium">
                Seller Events
            </h2>
            <p className="font-light text-sm w-[107%]">Blipkart Admin | 13th Aug, 2022 | 5 min read</p>
        
        </div>
        <div className="flex justify-center pt-5">
        <hr className="h-[0.1rem] w-[27rem] mb-7 lg:hidden"/>
        </div>  
        
        <div className="ml-7 lg:ml-0 lg:flex lg:flex-col lg:items-center">
          <div className="relative w-[15rem] h-[11.5rem] rounded 
           bg-gradient-to-r from-blue-500 to-blue-800 xl:w-[130%] xl:scale-[110%]">
            <div className="py-1 px-4 border top-[5.7%] right-[6%] rounded
             bg-gray-300 absolute z-10 font-semibold shadow-md cursor-pointer">Webinars</div>
            <h1 className="absolute z-10 flex flex-col items-end pr-9
            justify-center w-[100%] top-[26%] italic font-bold
            text-pink-700
            ">SCHOOL OF<br/>BUSINESS
              <div className="absolute z-10 w-[28%] left-9 mr-[3rem] 
              shadow shadow-black">
               <Image
                 className="object-cover absolute z-10 w-[100%] border-4
                 flex flex-col items-center justify-center top-[11rem] rounded
                  blur-[0.03rem]"
                 src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                 alt=""
                 height={145}
                 width={160}
                 layout="responsive"
               />
              </div> 
            </h1>
             <p className="flex flex-col items-center
              justify-center text-center absolute z-10 w-[100%] top-[6.6rem]
              text-white font-bold leading-[1.2rem]">
               <span className="font-medium pt-[0.4rem]">Presents</span> webinars to help you <br/>learn better
             </p>
            </div>     
            <h2 className="pt-3 pb-1 font-medium">
                Webinars
            </h2>
            <p className="font-light text-sm">
              Blipkart Admin | 5th Aug, 2022 | 1 min read
            </p>
        
        </div>
        <div className="flex justify-center pt-5">
        <hr className="h-[0.1rem] w-[27rem] mb-7 lg:hidden"/>
        </div>  
        
        <div className="ml-7 bg-gradient-to-r from-blue-400 to-blue-200
              w-[17rem] h-[11.5rem] rounded lg:ml-0 xl:scale-[120%]">
            <div className="relative w-[17rem] h-[11.7rem]">
        
            <div className="py-1 px-4 top-[5%] right-[5%] rounded
             bg-gray-300 absolute z-10 font-semibold shadow-md cursor-pointer">Blipkart Powerful</div>
            
            <div className="absolute z-10 flex flex-col items-start
            left-[3.2rem]
            justify-center w-[70%] top-[26%] italic font-bold
            text-pink-700 font-semibold
            ">BLIPKART<br/>POWERFUL
            
            <div className="absolute blur-[0.02rem] z-10 
             w-[4rem] h-[4rem] right-5">   
            <Image
              src="https://w0.peakpx.com/wallpaper/287/416/HD-wallpaper-magick-mandala-b-galaxy-glow-initial-b-letter-b-magic-occult-orb.jpg"
              alt=""
              width={980}
              height={980}
              layout="responsive"
              className="object-cover rounded-full shadow shadow-black"
            />
            </div>
            
            </div>
             <p className="top-[7rem] absolute text-yellow-300 w-[100%]
              text-center">
                Touching lives with business! <br/>
                <span className="font-semibold text-white">#EasyToGrow</span>
             </p>
            </div>     
            <h2 className="pt-3 pb-1 font-medium lg:text-right">
                Blipkart Powerful
            </h2>
            <p className="font-light text-sm w-[107%]">
               Blipkart Admin | 16th Mar, 2022 | 5 min read
            </p>
        
        </div>
        </div>
     </div>
       
    );
}

export default EventsAndProgs;