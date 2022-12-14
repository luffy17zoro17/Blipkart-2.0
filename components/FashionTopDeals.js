
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


// 

const images = [
    {
      id:1,
      product: 'Lehenga Choli',
      imgPath:"https://images.unsplash.com/photo-1503160865267-af4660ce7bf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      priceRange:"From ₹14,300",
      category: 'Ensemebleey, Vastrolexuz',
    },
    { 
      id:2,
      product: 'Silk Sarees',
      imgPath:'https://images.unsplash.com/photo-1616586169180-2671c5e1cbdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1982&q=80',
      priceRange:'From ₹15,990',
      category: 'Katakuriee, Nalley & more',
    },
    { 
      id:3,
      product: 'Bags',
      imgPath:'https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2096&q=80',
      priceRange:'From ₹14000',
      category:'GANCIINOO'
    },
    { 
      id:4,
      product: `Men's Formals`,
      imgPath:'https://images.unsplash.com/photo-1621335829175-95f437384d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      priceRange: 'From ₹6099',
      category:'Top Rated',
    },
    {
      id:5,
      product: `Women's Trendy`,
      imgPath:'https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      priceRange:'From ₹4999',
      category: 'Alleen Soll, Levo & more'
    },
    { 
      id:6,
      product: `Men's Jeans`,
      imgPath:'https://images.unsplash.com/photo-1547597466-50406ff4f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      priceRange:'From ₹3099',
      category:'PEPOII Jeanz, Lii'
    },
    { 
      id:7,
      product: 'Smart Watches',
      imgPath:'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      priceRange:'Shop Now',
      category:'Botiee, Fozzlee'
    },
    { 
      id:8,
      product: 'Sunglasses',
      imgPath:'https://images.unsplash.com/photo-1564867739458-f42235fab442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      priceRange:'From ₹2000',
      category:'Rey Bon, Burrbay'
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
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,


  }




  return (
      <div className="border shadow bg-white my-5 p-4
      overflow-hidden mx-[1.7%]
      xl:mx-[5.9%]">
        <div className="flex justify-between items-center">
          <div className="tag">
              <h1 className="text-xl font-semibold">Fashion Top Deals</h1>
              <h3 className="text-gray-400 text-sm font-semibold">
                Fashion Top Deals
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
              
                 <div className='w-[15rem] text-[0.9rem] py-3 space-y-2'>
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


