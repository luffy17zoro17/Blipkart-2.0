import Image from "next/image";




const WhyShopsy = () => {

    return (
       <div className="py-5 bg-white lg:hidden">
        <div className="text-center flex flex-col items-center">
         <h1 className="text-2xl font-medium">WHY SHOPPEYY?</h1>
         <hr className="border bg-blue-500 my-3 h-[0.3rem] w-[8rem]"/>
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
            <div className="">
            <div className="absolute z-10 w-[13%] items-center top-[23%]
             text-[0.3rem] bg-white flex justify-center left-[28%] sm:text-[0.4rem] md:text-[0.5rem]">
                SHOPPEYY
            </div>
            <div className="text-white font-semibold
            text-center absolute flex justify-center w-[100%]
             flex-col top-[3.5%] left-[58%]">
               <p className="bg-green-500 w-[40%] rounded-lg 
               bg-opacity-50 py-[1%]">
                This festive season,<br/>
                start your business<br/>
                on SHOPPEYY with<br/>
                <span className="text-[5rem] font-bold leading-[4.5rem] pt-2">0
                  <span className="text-4xl font-semibold">%<br/></span>
                </span>
                Commission!
               </p>
            </div>
            </div>
        </div>     
       </div> 
    );
}

export default WhyShopsy;