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
      <div className="relative mt-[7rem]">
      <div className="bg-white border shadow-3xl shadow-outer shadow-black">
        <div className="flex justify-center text-center border-2 mt-[1%] w-[100%]">
            <div className="flex justify-evenly font-medium text-2xl p-[4%]">
              <h1 className="hidden">WHY SELL ONLINE</h1>
              <h2 className="space-y-[1rem] pt-[2.8rem] text-center">
                <span className="">WHY BLIPKART?</span>
                <hr className="h-[0.3rem] bg-blue-500 border w-[14rem]"/>
              </h2>
              <h3 className="hidden">WHY SHOPPEYY</h3>
              <h4 className="hidden">HOW TO BE A SELLER</h4>  
            </div>    

        </div>
        <div className="flex flex-col justify-center">
           <div className="border-2 w-[100%] text-center flex flex-col
            items-center">
            <h1 className="italic border font-medium text-lg mb-[5%] h-[10%]">
              #ChildsPlay
            </h1>
            <div className="relative">
             <iframe width="426" height="240" 
              className="rounded-tr-xl rounded-bl-xl"
              src="https://www.youtube.com/embed/6stlCkUDG_s?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_" 
              title="Start your online business in 10 mins" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen="true">  
             </iframe>
            </div>
           </div> 
           <div className="border-4">
             <div className="flex justify-center font-medium py-5 pt-9 text-md">
               <h1>Advantages of Selling on Blipkart</h1>
             </div>
             <div className="flex items-start w-[100%] py-2 relative
              border-4 border-purple-500 h-[100%]">
             <div className="flex border flex-wrap gap-7 h-[100%]">
             {AllAdvantages.map((item) => (
               <div key={item.id}>
                <div className="flex border h-[100%]">
                 <div className="relative rounded-full mx-4">  
                 <Image 
                     src={item.imgPath}
                     alt=""
                     height={80}
                     width={80}
                     className="object-cover rounded-full"
                     layout="fixed"/>
                 </div>   
                 <div> 
                  <h1 className="font-medium mb-2 text-blue-400">{item.name}</h1>
                  <h2 className="mb-[1rem]">{item.detail}</h2>
                  <h3 className="font-light text-[0.8rem] text-blue-500 hidden">
                    Learn More
                  </h3>
                 </div> 
                </div> 
               </div>
             ))}
             </div>
             </div>
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