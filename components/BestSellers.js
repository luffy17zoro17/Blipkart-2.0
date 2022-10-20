import Image from "next/image";



const BestSellers = () => {

  return (
    
    <div className="static ml-[15vmin] w-[16rem]">
    <div className="ml-[1%] xl:ml-[6%]">
     <div className="border bg-white p-1 shadow ml-6">
      <div className="">
         <Image
           src="https://images.unsplash.com/photo-1542487354-feaf93476caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
           width={240}
           height={280}  
           layout="intrinsic"    
           alt=""
         />
      </div>
      <div className="text-center text-[3vmin]">
         <h1 className="font-semibold">Best Sellers in TVs</h1>
         <h1 className="font-bold">From ₹7,999 </h1>
         <h3 className="">Mi, OnePlus, LG & more</h3>
      </div>
      <div className="border-0 bg-pink-400 py-2 mt-3 mb-[0.2rem]"/>
     </div> 
    </div>
    </div>
  );
}


export default BestSellers;