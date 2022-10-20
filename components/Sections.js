import React, { useState } from 'react';

import Image from 'next/image';



const categories=[
  {
    id:1,
    name:"Top Offers",
    imgPath:"https://images.pexels.com/photos/1666070/pexels-photo-1666070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
  },
  {
    id:2,
    name:"Grocery",
    imgPath:"https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  
  },
  {
    id:3,
    name:"Mobiles",
    imgPath:"https://images.unsplash.com/photo-1589894404892-7310b92ea7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    
  },
  {
    id:4,
    name:"Fashion",
    imgPath:"https://images.pexels.com/photos/1805411/pexels-photo-1805411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id:5,
    name:"Electronics",
    imgPath:"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
  },
  {
    id:6,
    name:"Home",
    imgPath:"https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
  },
  {
    id:7,
    name:"Appliances",
    imgPath:"https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
  },
  {
    id:8,
    name:"Travel",
    imgPath:"https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  

  },
  {
    id:9,
    name:"Beauty, Toys & More",
    imgPath:"https://images.pexels.com/photos/5693890/pexels-photo-5693890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
  },
  {
    id:10,
    name:"2-Wheelers",
    imgPath:"https://images.unsplash.com/photo-1478340168842-7e6b25ed6510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  
  }
]


const Sections = () => {

  


  return (

    
    <div className='flex z-[-10] mt-[1.9rem]'>
    <div className="justify-center
      py-[1.5rem] w-full
      bg-white flex flex-wrap
     text-center">
      {categories.map((item)=>(
        <div key={item.id} className="border-4 my-[1.5%] mx-[1.5%]">
        
       <div className={`shadow shadow-black border-4
          flex flex-col items-center
          cursor-pointer hover:border-red-400`}>
        <div className='w-[11vmin] h-[11vmin]'>    
        <Image
          className='object-cover'
          height={1100}
          width={1100}
          layout="intrinsic"
          src={item.imgPath}
          alt=""
        />
        </div>
        <div className='w-[100%]
         cursor-pointer text-[0.9rem]'>
        {item.name}
        </div>
      
        </div>
        </div>
        
      ))}
    
    </div>
    </div>
       
  );
}

export default Sections








