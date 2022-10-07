import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import SvgIcon from '@mui/material/SvgIcon';


const categories=[
  {
    id:1,
    name:"Top Offers",
    imgPath:"https://images.unsplash.com/photo-1602566178436-8cf72756f4cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    icon:"",
  },
  {
    id:2,
    name:"Grocery",
    imgPath:"https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    icon:"",
  },
  {
    id:3,
    name:"Mobiles",
    imgPath:"https://images.unsplash.com/photo-1589894404892-7310b92ea7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    icon:"",
  },
  {
    id:4,
    name:"Fashion",
    imgPath:"https://images.unsplash.com/photo-1638656749922-9158fd414393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    icon:ExpandMoreIcon,
  },
  {
    id:5,
    name:"Electronics",
    imgPath:"https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80",
    icon:ExpandMoreIcon,
  },
  {
    id:6,
    name:"Home",
    imgPath:"https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    icon:ExpandMoreIcon,
  },
  {
    id:7,
    name:"Appliances",
    imgPath:"https://images.unsplash.com/photo-1584143987552-0ab1f595af6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    icon:"",
  },
  {
    id:8,
    name:"Travel",
    imgPath:"https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    icon:"",

  },
  {
    id:9,
    name:"Beauty, Toys & More",
    imgPath:"https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    icon:ExpandMoreIcon,
  },
  {
    id:10,
    name:"2-Wheelers",
    imgPath:"https://images.unsplash.com/photo-1478340168842-7e6b25ed6510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    icon:"",
  }
]


const Sections = () => {
  return (
    <div className='w-full px-5 relative flex z-10 top-[4rem] pt-8
     bg-white items-center justify-evenly gap-3 text-center flex-wrap'>
      {categories.map((item)=>(
        <div key={item.id}>
        <div className='flex flex-col w-[100%] items-center justify-evenly'>  
        <div className='h-[5rem] w-[5rem] shadow shadow-black 
         border-4 cursor-pointer'>  
        <Image
          className='object-cover absolute'
          layout="responsive"
          src={item.imgPath}
          height={900}
          width={900}
          alt=""
        />
        </div>
        <div className='py-[0.6rem] pb-4 text-center'>
            {item.name} 
          <SvgIcon className={item.id>3 && item.id<7 || item.id===9 ? "" : "hidden"}
           component={item.icon}/>
        </div>
        </div>
        </div>
      ))}
    
    </div>

       
  );
}

export default Sections








