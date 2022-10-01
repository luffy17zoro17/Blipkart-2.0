import Image from "next/image";





const AllAdvantages = [

    {
        id:1,
        name:"Growth >",
        detail:`Widen your reach to a customer base of 1 billion and grow your
         business further with the support of Account managers.`,
        imgPath:`https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?
        ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&
        fit=crop&w=1170&q=80` 

    },
    {
        id:2,
        name:"Lowest cost of doing business >",
        detail:`Along with the most competitive rate card in the industry you
         also get on-time and reliable payments.`,
        imgPath:`https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-1.2.1&ixid=
        MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80` 
    },
    {
        id:3,
        name:"Ease >",
        detail:"You just need 1 product and 2 documents to start selling on Blipkart.",
        imgPath:"https://images.unsplash.com/photo-1468404166635-56e2d75ee491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id:4,
        name:"Transparency >",
        detail:"Equal opportunities for all the sellers to grow.",
        imgPath:"https://images.unsplash.com/photo-1615279113483-82e6693dab8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80"
    }

]






const Advantages = () => {

    return (
      <div className="">
      <div className="bg-white shadow-3xl shadow-black">
        <div className="flex justify-center text-center mt-[1%] w-[100%]">
            <div className="flex justify-evenly font-medium text-xl p-[4%] gap-11">
              <h1 className="hidden lg:flex">WHY SELL ONLINE</h1>
              <h2 className="space-y-[1rem] pt-[2.8rem] text-center lg:pt-[0rem]">
                <span className="">WHY BLIPKART?</span>
                <hr className="h-[0.3rem] bg-blue-500 border w-[12rem]"/>
              </h2>
              <h3 className="hidden lg:flex">WHY SHOPPEYY?</h3>
              <h4 className="hidden lg:flex">HOW TO BE A SELLER</h4>  
            </div>    

        </div>
        <div className="flex justify-start w-[100%] border-4 border-black relative
         flex-col md:flex-row md:flex-wrap">
          
            <h1 className="italic font-medium text-lg mb-[5%] absolute">
              #ChildsPlay
            </h1>
            <div className="flex border-2 border-red-600 px-[4%] py-[4%] xl:w-[32rem]">
             <iframe width="429" height="240" 
              className="rounded-tr-xl rounded-bl-xl w-[100%]"
              src="https://www.youtube.com/embed/6stlCkUDG_s?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_" 
              title="Start your online business in 10 mins" frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen={true}>  
             </iframe>
            </div>
      


           <div className="static flex justify-between border-4 flex-col space-y-[8rem]
            md:flex-row md:w-[50%] md:flex-wrap md:space-y-[32rem] lg:w-[60%]
            lg:space-x-[4rem] xl:space-x-[6rem]">

             <div className="flex justify-center font-medium pt-9 pb-11 text-md 
             absolute border-2 w-[100%] md:w-[49.5%] lg:w-[59.7%]">
               <h1>Advantages of Selling on Blipkart</h1>
             </div>
            
      
             {AllAdvantages.map((item) => (
               <div className="border-4 border-cyan-400 relative 
                md:w-[50%] md:ml-[4%] md:top-[-22rem] 
                  lg:w-[40%]"
                 key={item.id}>

                
              
                 <div className="w-[5rem] h-[5rem] rounded-full absolute left-[1rem]"> 
                 <Image 
                     src={item.imgPath}
                     alt=""
                     height={900}
                     width={900}
                     className="object-cover rounded-full"
                     layout="responsive"/>
                 </div>   
                
                 <div className="flex flex-col absolute top-3 left-[7rem]"> 
                  <h1 className="font-medium text-blue-400">
                    {item.name}
                  </h1>
                  <h2 className="">
                    {item.detail}
                  </h2>
                  <h3 className="font-light text-[0.8rem] text-blue-500 hidden">
                    Learn More
                  </h3>
                 </div> 
                 
            
                
              
               </div>
             ))}
             
        
            
             <div className="flex justify-center m-5">
             <div className="border px-7 py-2 bg-blue-400 flex items-center
             justify-center text-white w-[17rem] rounded hidden">
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