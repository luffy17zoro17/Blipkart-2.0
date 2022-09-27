import Image from "next/image";




const WhyShopsy = () => {

    return (
       <div className="py-5">
        <div className="text-center flex flex-col items-center">
         <h1 className="text-lg font-medium">WHY SHOPPEYY?</h1>
         <hr className="border bg-blue-500 my-3 h-[0.3rem] w-[6rem]"/>
         <h3 className="text-sm pb-3 font-medium text-gray-700">LowestCostOfDoingBusiness</h3>
        </div> 
        <div className="m-5 relative">
            <Image
              src="https://images.unsplash.com/photo-1563282005-f9a9584f2deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
              layout="responsive"
              width={1000}
              height={450}
              className="object-cover"
              alt=""
            />
            <div className="absolute z-10 w-[18%] items-center top-[32%]
             text-[0.4rem] opacity-75 bg-white flex justify-center left-[20%]">
                SHOPPEYY
            </div>
            <div>
               <p className="text-center">
                This festive season,<br/>
                start your business<br/>
                on SHOPPEYY with
               </p> 
               <span>0%<br/>
                 Commission!
               </span>
            </div>
        </div>     
       </div> 
    );
}

export default WhyShopsy;