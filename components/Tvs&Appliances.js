
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
      product: 'Multicolored Stand Mixer',
      imgPath:"https://images.unsplash.com/photo-1577495917765-9497a0de7caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      priceRange:"From ₹17,900",
      category: 'Bosho, Orientoo',
    },
    { 
      id:2,
      product: 'Exclusive deals on ACs',
      imgPath:'https://images.unsplash.com/photo-1659164839265-9bb2f08aacb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      priceRange:'From ₹45,990',
      category: 'Soniee, Samsoongoo',
    },
    { 
      id:3,
      product: 'Top 10 deals on Smart TVs',
      imgPath:'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      priceRange:'From ₹39,990',
      category:'HPP, Asusz, Deli & More'
    },
    { 
      id:4,
      product: 'Refrigerators',
      imgPath:'https://images.unsplash.com/photo-1630459065645-549fe5a56db4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      priceRange: 'From ₹14999',
      category:'Top Rated',
    },
    {
      id:5,
      product: 'Desktop PC',
      imgPath:'https://images.unsplash.com/photo-1603618090561-412154b4bd1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      priceRange:'From ₹10999',
      category: 'Applebyte Imaac'
    },
    { 
      id:6,
      product: 'Fans',
      imgPath:'https://images.unsplash.com/photo-1555470100-1728256970aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      priceRange:'From ₹399',
      category:'Lenoov, Deli, HPP'
    },
    { 
      id:7,
      product: 'Washing Machine',
      imgPath:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      priceRange:'Shop Now',
      category:'Battery, SD card & more'
    },
    { 
      id:8,
      product: 'Microwave Oven',
      imgPath:'https://images.unsplash.com/photo-1655354435511-1809b2519cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80',
      priceRange:'From ₹990',
      category:'Aceer, Sumsuung'
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




const TvAppliances = () => {

  

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
              <h1 className="text-xl font-semibold">TVs & Appliances</h1>
              <h3 className="text-gray-400 text-sm font-semibold">
                TVs & Appliances
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


export default TvAppliances;


