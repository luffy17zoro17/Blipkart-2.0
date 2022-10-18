import Image from "next/image";





const ToBeSeller = [

    {
        id:1,
        name:"At least 1 product to sell >",
        detail:`All you need is a minimum of 1 unique product to start selling on Blipkart.`,
        imgPath:`https://images.unsplash.com/photo-1519658422992-0c8495f08389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=
        format&fit=crop&w=2055&q=80` 

    },
    {
        id:2,
        name:"GSTIN details >",
        detail:`You are required to furnish the details of your GSTIN to sell your products online.`,
        imgPath:`https://images.unsplash.com/photo-1587483169554-f9bdd1dc9fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1962&q=80`, 
    },
    {
        id:3,
        name:"Pick-up Address >",
        detail:"Sharing your pickup address and pincode will help us pick your products to sell.",
        imgPath:"https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
    },
 
]






const HowToSell = () => {

    return (
      <div className="lg:hidden">
       <div className="bg-white shadow">
        <div className="flex justify-center text-center w-[100%]">
            <div className="flex justify-evenly font-medium text-2xl p-[4%]">
              <h1 className="hidden">WHY SELL ONLINE</h1>
              <h2 className="space-y-[1rem] pt-[2.8rem] text-center flex flex-col
               items-center">
                <span className="">HOW TO BE A SELLER</span>
                <hr className="h-[0.3rem] bg-blue-500 border w-[8rem]"/>
              </h2>
              <h3 className="hidden">WHY SHOPPEYY</h3>
              <h4 className="hidden">HOW TO BE A SELLER</h4>  
            </div>    

        </div>
        <div className="flex flex-col justify-center">
           <div className="w-[100%] text-center flex flex-col
            items-center justify-center">
            <h1 className="font-medium text-md mb-[5%]">
              3 steps to register as a Blipkart seller
            </h1>
            <div className="w-[100%] h-[100%] px-[3%] py-[2%]">
             <iframe width="426" height="240" 
              className="rounded-tl-xl rounded-br-xl w-[100%] shadow-md shadow-black"
              src="https://www.youtube.com/embed/ZuqtluIIgWU?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_"
              title="Beautiful Cabin/Cottage" frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen={true}>  
             </iframe>
            </div>
           </div> 
           <div className="">
             <div className="flex flex-col text-center justify-center
                pt-9 pb-33 text-md gap-5 px-[6%] static w-[100%] h-[20rem]">
               <p className="">You need just 3 things to become a Blipkart Seller, your
                 basic details & GSTIN, Pick-up address, and 1 unique product to
                 sell. Yes! this is all you require to register as a seller on Blipkart.
               </p>
               <h1 className="font-medium pt-5">
                  You need just 3 things to become a Blipkart Seller.
               </h1>
             </div>

             <div className="flex flex-col gap-[2rem] justify-evenly">
             {ToBeSeller.map((sell) => (
               <div key={sell.id}>
                <div className="flex pl-5">
                 <div className="relative rounded-full w-[5rem] h-[5rem]">  
                 <Image 
                     src={sell.imgPath}
                     alt=""
                     className="object-cover rounded-full"
                     layout="fill"
                 />
                 </div>   
                 <div className="left-[7.2rem] pl-5 w-[80%]"> 
                  <h1 className="font-medium mb-2 text-blue-400 w-[100%]">
                    {sell.name}
                  </h1>
                  <h2 className="">{sell.detail}</h2>
                  <h3 className="font-light text-[0.8rem] text-blue-500 hidden">
                    Learn More
                  </h3>
                 </div> 
                </div> 
               </div>
             ))}
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



export default HowToSell;