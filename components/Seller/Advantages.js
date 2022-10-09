import Image from "next/image";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';




const AllAdvantages = [

    {
        id:1,
        name:"Growth",
        detail:`Widen your reach to a customer base of 1 billion and grow your
         business further with the support of Account managers.`,
        imgPath:`https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?
        ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&
        fit=crop&w=1170&q=80` 

    },
    {
        id:2,
        name:"Lowest cost of doing business",
        detail:`Along with the most competitive rate card in the industry you
         also get on-time and reliable payments.`,
        imgPath:`https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-1.2.1&ixid=
        MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80` 
    },
    {
        id:3,
        name:"Ease",
        detail:"You just need 1 product and 2 documents to start selling on Blipkart.",
        imgPath:"https://images.unsplash.com/photo-1468404166635-56e2d75ee491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id:4,
        name:"Transparency",
        detail:"Equal opportunities for all the sellers to grow.",
        imgPath:"https://images.unsplash.com/photo-1615279113483-82e6693dab8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80"
    }

]






const Advantages = () => {

    return (
      <div className="z-10 w-[100%] md:mt-[6.2rem] lg:mt-[4.3rem]">
      <div className="bg-white shadow-3xl shadow-black">
        <div className="flex justify-center text-center mt-[1%] w-[100%]">
            <div className="flex justify-evenly font-medium text-xl p-[4%] gap-11">
              <h1 className="hidden lg:flex lg:cursor-pointer">WHY SELL ONLINE?</h1>
              <h2 className="space-y-[1rem] pt-[2.8rem] text-center lg:pt-[0rem]">
                <span className="">WHY BLIPKART?</span>
                <hr className="h-[0.3rem] bg-blue-500 border w-[12rem]"/>
              </h2>
              <h3 className="hidden lg:flex lg:cursor-pointer">WHY SHOPPEYY?</h3>
              <h4 className="hidden lg:flex lg:cursor-pointer">HOW TO BE A SELLER</h4>  
            </div>    

        </div>
        <div className="flex relative justify-around flex-wrap w-[100%] flex-col md:flex-row">
           <div className="flex flex-col justify-start items-center">
            <h1 className="italic font-medium text-lg w-[100%] bg-white
             text-center py-[2rem] md:pl-[3.6rem] lg:[4rem] md:w-[23rem]">
              #ChildsPlay
            </h1>
            <div className="w-[100%] bg-white rounded-bl-xl rounded-tr-xl
            flex px-[4%] top-[8rem] md:px-[0%] md:pl-[18%]
             md:w-[100%] xl:w-[30rem] xl:h-[12rem]">
             <iframe width="429" height="240" 
              className="shadow-md shadow-black bg-orange-400
              rounded-tr-xl rounded-bl-xl w-[100%] md:py-[8%] xl:h-[163%]"
              src="https://www.youtube.com/embed/6stlCkUDG_s?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_" 
              title="Start your online business in 10 mins" frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen={true}>  
             </iframe>
            </div>
           </div> 
      


           <div className="relative flex w-[100%] bg-white gap-[2rem] flex-col
            md:gap-[2.5%] md:pl-[5%] md:flex-row
             md:w-[50%] md:flex-wrap md:space-y-[2rem]
             lg:w-[60%] lg:gap-[11%]">

             <div className="flex justify-center font-medium pt-11 pb-11 text-md
             top-0 w-[100%] md:left-0 md:absolute">
               Advantages of Selling on Blipkart
             </div>
            
      
             {AllAdvantages.map((item) => (
               <div className="relative md:top-[7rem] 
                md:w-[55%] md:h-[25rem] lg:h-[26rem] xl:h-[22rem]
                  lg:w-[40%]"
                 key={item.id}>

                
                <div className="mb-[1.4rem] xl:mb-[0rem] hover:scale-[96%]
                  cursor-pointer">
                 <div className="w-[5rem] h-[5rem] rounded-full ml-[1rem]"> 
                 <Image 
                     src={item.imgPath}
                     alt=""
                     height={900}
                     width={900}
                     className="object-cover rounded-full"
                     layout="intrinsic"/>
                 </div>   
                
                 <div className="flex flex-col absolute top-[0.2rem] left-[7rem]
                 hover:py-[1rem] hover:shadow-md hover:shadow-black hover:rounded-xl
                 hover:w-[70%] hover:px-[1rem]"> 
                  <div className="font-medium text-blue-400 flex hover:static">
                    {item.name}<ChevronRightIcon className="flex md:hidden"/>
                  </div>
                  <div className="">
                    {item.detail}
                  </div>
                  <div className="font-light text-[0.8rem] text-blue-500 hidden 
                   md:flex md:flex-none">
                    Learn More
                  </div>
                 </div> 
                </div>
            
               </div>
             ))}
             
        
            
             <div className="flex flex-col justify-center items-center bottom-0.5 
             lg:bottom-1 lg:bottom-6 xl:bottom-[-0.2rem]
             left-0 absolute w-[100%] md:py-4">
             <div className="border bg-blue-400 flex items-center
             justify-center text-white h-[3rem] w-[17rem] rounded hidden md:flex 
             hover:cursor-pointer hover:bg-blue-500">
                How to Be a Seller?
             </div>
             </div>
            </div> 
        </div>
        </div> 
       </div>    
  

    );
}

export default Advantages;