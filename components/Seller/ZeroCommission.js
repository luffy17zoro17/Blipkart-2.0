


const ZeroCommission=()=>{

    return(

       <div className="xl:flex xl:w-[100%] xl:justify-center xl:items-center xl:gap-8 xl:py-[2%]">
       <div className="flex flex-col items-center text-center justify-center gap-2
        py-4 lg:flex-row xl:gap-8">
        <div>
        <h1 className="font-bold text-3xl pb-2 text-violet-700">S|-|</h1>
        <h2 className="text-xl font-semibold text-violet-700">SHOPPEYY</h2>
        <h3 className="text-xs italic">by Blipkart</h3>
        </div>
        <div className="md:flex md:items-center lg:flex-col">
          <div className="py-5 w-[22rem] text-start flex justify-center">
             Avail 0% Commission for Selling on <br className="flex sm:hidden"/> SHOPPEYY!
          </div>
      
          <div className="text-violet-700 font-medium lg:hidden">KNOW MORE</div>
        </div>   
       </div>

       <div>
         <div className="text-violet-700 font-medium text-center justify-center 
         hidden lg:flex lg:py-6">
             KNOW MORE
         </div>     
       </div>
       </div>
    );    
}

export default ZeroCommission