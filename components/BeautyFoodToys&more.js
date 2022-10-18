
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';




const images = [
    {
      id:1,
      product: '18th Gen Laptops',
      imgPath:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      priceRange:"From ₹47,900",
      category: 'High Performance Laptop',
    },
    { 
      id:2,
      product: '3D Printer',
      imgPath:'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      priceRange:'From ₹45,990',
      category: 'HPP',
    },
    { 
      id:3,
      product: 'High-Res Mirrorless Camera',
      imgPath:'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      priceRange:'From ₹39,990',
      category:'HPP, Asusz, Deli & More'
    },
    { 
      id:4,
      product: 'ASUSZ Monitors',
      imgPath:'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      priceRange: 'From ₹14999',
      category:'Top Rated',
    },
    {
      id:5,
      product: 'Desktop PC',
      imgPath:'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9uaXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      priceRange:'From ₹10999',
      category: 'Applebyte Imaac'
    },
    { 
      id:6,
      product: 'Gaming Laptops',
      imgPath:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80',
      priceRange:'From ₹399',
      category:'Lenoov, Deli, HPP'
    },
    { 
      id:7,
      product: 'Camera Accessories',
      imgPath:'https://images.unsplash.com/photo-1542128047-9b51cb9b931d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      priceRange:'Shop Now',
      category:'Battery, SD card & more'
    },
    { 
      id:8,
      product: 'Professional Laptops',
      imgPath:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      priceRange:'From ₹990',
      category:'Aceer, Sumsuung'
    },
    {
      id:9,
      product: 'Giletee',
      imgPath:'https://images.unsplash.com/photo-1625772452888-ca36edeaf3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      priceRange:'From ₹4535',
      category:'Trimmer'
    },
    { 
      id:10,
      product: 'Smartfone',
      imgPath:'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvd2VyYmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      priceRange:'From ₹23,000',
      category:'Miy'
    },
    { 
      id:11,
      product: 'Blow Dryer',
      imgPath:'https://images.unsplash.com/photo-1620331317312-74b88bf40907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      priceRange:'From ₹18,000',
      category:'ICONIC'
    },
    { 
      id:12,
      product: 'Trimmer',
      imgPath:'https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      priceRange:'From ₹2000',
      category:'Philliips'
    },
];



function SampleNextArrow(props) {
  const {style, onClick } = props;
  return (
   
    <div className='flex w-[103%] h-[1rem] justify-end'>
     <div className='sticky right-[4rem]'>
     <ArrowForwardIosIcon
      className="shadow-md shadow-black text-black absolute z-40
      right-[-3.9rem] top-[-17rem]
       border-4 border-violet-500 flex w-[100%]
       rounded-r-xl w-[3rem] h-[5rem] cursor-pointer hover:text-orange-400"
      style={{ ...style,background: "white" }}
      onClick={onClick}
     />
     </div>   
    </div>
   
  
 
  );
}

function SamplePrevArrow(props) {
  const {style, onClick} = props;
  return (
    
    <ArrowBackIosNewIcon
      className="shadow-md shadow-black text-black absolute 
        z-10 top-[5rem] border-4 border-violet-500
       rounded-l-xl w-[3rem] h-[5rem] cursor-pointer hover:text-orange-400"
      style={{...style, display: "block", background: "white"}}
      onClick={onClick}
    />
  );
}




const Electronics = () => {

  

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,


  }




  return (
      <div className="border shadow bg-white my-5 p-4
      overflow-hidden mx-[1.7%]
      xl:mx-[5.9%]">
        <div className="flex justify-between items-center">
          <div className="tag">
              <h1 className="text-xl font-semibold">Best of Electronics</h1>
              <h3 className="text-gray-400 text-sm font-semibold">
                Best of Electronics
              </h3>
          </div>
          <div className="border bg-blue-600 text-white 
           py-3 px-6 text-xs font-semibold rounded shadow-md">
            VIEW ALL
          </div>
        </div>  
        <div className="py-4 mb-8">
          <hr className="border-top w-[93.9rem] -ml-4"/>
        </div>
        <div className='relative w-[100%] flex justify-end'>
        <div className="h-[24rem] right-[-1.3rem] mt-[-3rem] w-[1.3rem]
         absolute z-10
        bg-white"/>
        </div>
        
           
            <Slider {...settings} className="flex-none w-[102rem] mb-[2rem]">

              {images.map((item) => (
              <div key={item.id} className="h-[22rem]">
               
                <div className='
                   text-center w-[21rem] flex flex-col items-center'>
                 <div className='h-[15rem] w-[15rem] shadow shadow-black bg-yellow-400'>
                  <Image 
                    height={900}
                    width={900}
                    src={item.imgPath} 
                    className="object-cover cursor-pointer
                    hover:object-contain hover:shadow hover:shadow-black"   
                    layout='responsive'   
                    alt=""     
                  />
                 </div> 
              
                 <div className='w-[15rem] py-3 space-y-2'>
                     <h1 className='font-semibold'>{item.product}</h1>
              
                     <h2 className='text-sm text-green-700'>{item.priceRange}</h2>
                   
                     <h3 className='text-gray-500'>{item.category}</h3>
                 </div>
                </div> 
            
              </div>    
                
              ))}
            
            </Slider>
    
      </div>
    
      
 

  );
 
}


export default Electronics;


