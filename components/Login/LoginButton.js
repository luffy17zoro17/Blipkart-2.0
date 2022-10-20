import { useState } from "react";
import NavbarLogin from "../Dropdowns/NavbarLogin";
import LoginButtonMain from "../LoginButtonMain/LoginButtonMain"
import SignupButtonMain from "../LoginButtonMain/SignupButtonMain";
import SignupButton from "../SignupButton";



const LoginButton = ({isHover,setIsHover,setIsSignupPanel,setIsLoginPanel,
       isLoginPanel,IsSignupPanel}) => {



    return (
    
        <div className="">

        <div onMouseLeave={()=>{setIsHover(false)}} onMouseOver={()=>{setIsHover(true)}}
         className="flex flex-col justify-center items-center md:relative">
        <div onClick={()=>setIsLoginPanel(true)} 
        className="bg-white px-[2vw] h-[2.3rem] cursor-pointer text-black 
         rounded-sm font-semibold flex justify-center items-center mr-[2vw] text-[1rem]
          font-bold">
           Login
        </div>
      
        
        {isHover ? (
           <div>
           <div className='px-[3rem] py-[2rem] font-medium w-[21rem] text-[1rem]
           bg-black shadow-lg shadow-black border-4 border-green-400
           rounded-lg text-orange-200 top-[2.3rem] right-0 absolute md:right-[-6rem]'>
            <NavbarLogin/>
           </div>
          
           <div onMouseDown={()=>setIsSignupPanel(true)}
            className='absolute z-40 w-[50%] h-[80%]
            flex top-[2.3rem] right-[-0.2rem] md:w-[80%] md:right-[-6.3rem]'>
             <SignupButton/>
           </div> 
  
            </div>
          
        ) : (      
         <div></div>
        )}
        </div>
  
        {isLoginPanel ? (
      
          <div>
            <LoginButtonMain
             setIsLoginPanel={setIsLoginPanel}
            />
          </div>
                     
        ) : (<div></div>)}
        
  
        {IsSignupPanel ? (
              <div>
                <SignupButtonMain
                  setIsSignupPanel={setIsSignupPanel}
                />
              </div>
        ) : (<div></div>)}
  
     
        
        </div>

)
}

export default LoginButton;