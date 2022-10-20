import Image from "next/image";

import SwipeableTextMobileStepper from './SellerSmCarousal';
 

const reviews= [
   {
    id:1,
    imgSrc:"https://w0.peakpx.com/wallpaper/961/254/HD-wallpaper-luffy-anime-monkey-d-luffy-one-piece-strawhats-wano-arc-thumbnail.jpg",
    quote: `"Sales compounded the consumer demand which led to a milestone of 150% YoY revenue growth from Blipkart."`,
    name:"Monkey.D.Luffy",
   },
   {
    id:2,
    imgSrc:"https://w0.peakpx.com/wallpaper/399/672/HD-wallpaper-one-piece-zoro-anime-one-piece-zoro.jpg",
    quote:`"Blipkart helped me expand to 6 categories with 5x growth YoY!"`,
    name:"Roronoa Zoro"
   },
   {
    id:3,
    imgSrc:"https://w0.peakpx.com/wallpaper/155/429/HD-wallpaper-nami-anime-manga-one-piece-thumbnail.jpg",
    quote:`"With Blipkart, we went from Rs.10,000 to Rs.5 Cr in sales per annum!"`,
    name:"Nami"
   }
]



 const Quotes = () => {
    return (
        <> 
            <div className="flex md:hidden"><SwipeableTextMobileStepper/></div>
               
            <div className="flex-col border-4 justify-center items-center
              top-[8rem] py-[5%] pt-[15%] bg-gray-100
              w-[100%] hidden md:flex md:top-[6.03rem]
              lg:pt-[12%] xl:pt-[6rem] lg:top-[4rem] xl:py-[3%] xl:top-[4rem] xl:h-[0%]">
            <div className="static flex justify-evenly w-[100%] flex-wrap md:gap-[3rem]">
              {reviews.map((review) => (
                <div  className="flex" key={review.id}>
                  <div className="flex w-[30rem] justify-center">  
                   <div className="px-[4%]">
                    <Image
                     src={review.imgSrc}
                     alt=""
                     layout="fixed"
                     height={160}
                     width={130}
                     className="object-cover rounded"
                    />
                   </div>
                   <div className="flex flex-col justify-between">
                   <div className="font-light italic p-[1%]">
                     {review.quote}      
                   </div>
                   <h1 className="font-semibold">{review.name}</h1>
                   </div>
                  </div> 
                </div>
              ))}
            </div>
            </div>
        </>    
    );

 }


 export default Quotes;