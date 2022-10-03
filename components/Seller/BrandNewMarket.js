import Image from "next/image";



const Marketplace = [

    {
        id:1,
        name:"0% Commission platform >",
        detail:`This will be applicable to verticals listed only on SHOPPEY`,
        imgPath:`https://images.unsplash.com/photo-1638281269990-8fbe0db9375e?ixlib=rb
        -1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80` 

    },
    {
        id:2,
        name:"Easy product listings >",
        detail:`Image guidelines are relaxed and easy to follow. Sellers can upload tabletop 
        and hanger images clicked with mobile phones.`,
        imgPath:`https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80` 
    },
    {
        id:3,
        name:"No brand regulations >",
        detail:"No trademark registration required to sell your own brand.",
        imgPath:`https://images.unsplash.com/photo-1621719455668-fba909ae1b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80`
    },
    {
        id:4,
        name:"Enhanced reach to millions of customers >",
        detail:`You capture a huge amount of budget-friendly consumers through resellers. These resellers 
        reach the consumer base through their social media channels.`,
        imgPath:"https://images.unsplash.com/photo-1471347025057-68ff089f54cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80"
    },

]





const BrandNewMarket = () => {

    return (
    
           <div className="relative bg-white lg:hidden">
             <div className="flex flex-col font-medium bg-white
             text-md absolute left-[7.5rem] mt-[0rem]
             sm:left-[15rem]">
                Brand New Marketplace By Blipkart
             </div>
      
             <div className="flex flex-col justify-evenly gap-[2rem] pt-[4rem]">
             {Marketplace.map((item) => (
               <div key={item.id}>
                <div className="flex pl-5">
                 <div className="relative rounded-full w-[5rem] h-[5rem]">  
                 <Image 
                     src={item.imgPath}
                     alt=""
                     className="object-cover rounded-full"
                     layout="fill"/>
                 </div>   
                 
                 <div className="flex flex-col items-start justify-center pl-5
                    left-[7.2rem] w-[81%]"> 
                  <span className="font-medium mb-2 text-blue-400 w-[100%]">
                    {item.name}
                  </span>
                  <span className="">{item.detail}</span>
                  <span className="font-light text-[0.8rem] text-blue-500 hidden">
                    Learn More
                  </span>
                 </div> 
                
                </div> 
               </div>
             ))}
            
             </div>
             <div className="flex justify-center">
             <div className="px-7 py-2 bg-blue-400 flex items-center
             justify-center text-white w-[17rem] rounded hidden">
                How to Be a Seller?
             </div>
             </div>
           </div>
   
      

    );
}

export default BrandNewMarket;