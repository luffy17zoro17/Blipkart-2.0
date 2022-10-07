
import Image from "next/image";
import Link from "next/link";
import NavbarCart from "../components/NavBarCart";




const Cart = () => {

    return (
        
        <div>
            <NavbarCart/>
           <div className="flex flex-col items-center justify-center">
            <div className="bg-white border fixed w-[70%] top-[11%]
             h-[4rem] flex">
             <div className="flex justify-around w-[100%]
               items-center">
              <h1>Blipkart</h1>
              <h2>Grocery</h2>
             </div> 

             <div className="bg-white border fixed w-[70%] mt-[4.8rem]
             h-[27rem] flex flex-col items-center justify-center
              text-center">
               <div className="space-y-4">
                 <div className="shadow-lg rounded-xl">
                 <Image 
                  height={130}
                  width={200}
                  className="object-cover rounded-xl"
                  layout="responsive"
                  src="https://images.unsplash.com/photo-1619191163420-4a7c0798b8a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                 />
                 </div>
                 <h3 className="text-lg">Missing Cart Items?</h3>
                 <p className="text-xs">
                    Login to see the items you added previously
                 </p>
                 <div className="font-light px-[5rem] py-[0.5rem]
                   bg-orange-300 rounded text-red-800 shadow-xl cursor-pointer">
                  <Link href="/login">
                    <a className="">Login</a>
                  </Link>
                 </div>
               </div> 
             </div>
            </div>
           </div> 
           <div>
              <hr className="w-[100%] h-[0.1rem]
                 absolute z-10 bg-gray-300 top-[40rem]"
              />
           </div>
           <div className="flex justify-between w-[100%] absolute top-[45rem] 
             text-gray-600 text-sm px-[6%]">
              <p className="text-left flex flex-wrap justify-start
                tracking-wide">
                Policies: Returns Policy | Terms of use |
                 Security | Privacy | Infringement &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;
                   © 2007-2002 Blipkart.com 
              </p>
              <p className="ml-[8rem] tracking-wide text-right flex justify-end flex-wrap tracking-wide sm:ml-[0rem]">  
                Need help? Visit the <span className="text-blue-500 text-right flex-wrap">&nbsp;
                Help Center</span>&nbsp;or&nbsp;<span className="text-blue-500 text-right flex-wrap">
                Contact Us</span>
              </p>  
           </div>
            
        </div>
    );
}

export default Cart;