
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
      product: 'Guitar',
      imgPath:"https://images.unsplash.com/photo-1601375863404-5b912f4536df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1830&q=80",
      priceRange:"From ₹5,900",
      category: 'Acoustic, Bass, Electro',
    },
    { 
      id:2,
      product: 'Piano',
      imgPath:'https://images.unsplash.com/photo-1631670892216-8acd73c2b8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      priceRange:'From ₹15,990',
      category: 'Yamaah,Cosai',
    },
    { 
      id:3,
      product: 'Cooker',
      imgPath:'https://images.unsplash.com/photo-1585942512937-7409c02f2141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      priceRange:'From ₹10,990',
      category:'Butterflee, Pigoun & More'
    },
    { 
      id:4,
      product: 'Rubix cube',
      imgPath:'https://images.unsplash.com/photo-1591991564021-0662a8573199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      priceRange: 'From ₹900',
      category:'Top Rated',
    },
    {
      id:5,
      product: 'Remote Toys',
      imgPath:'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80',
      priceRange:'From ₹1000',
      category: 'Zunbellee,Wishey'
    },
    { 
      id:6,
      product: 'Electronic pencil',
      imgPath:'https://images.unsplash.com/photo-1602143946853-3e1cd57496b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      priceRange:'From ₹3000',
      category:'Appelee, Samsoongu'
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




const TopOffers = () => {

  

  const settings = {
    dots: true,
    infinite:true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,


  }




  return (
      <div className="flex items-end
      shadow bg-white p-4
      overflow-hidden mx-[1.7%]
      xl:mx-[5.9%]">
        <div className='w-[1rem] border-4 border-white
         h-[25rem] absolute z-40 
         bg-white right-[1.7%] xl:right-[5.9%]'/>

        <div className="flex-none w-[11rem] sm:w-[15rem] 
        h-[25rem]">
         <div className='flex flex-col items-center
          justify-around h-[100%] sm:justify-center'>
          <h1 className='text-3xl pb-7'>Top Offers</h1>
          <div className="border bg-blue-600 text-white 
           py-3 px-6 text-xs font-semibold rounded shadow-md">
            VIEW ALL
          </div>
         </div>
        </div>  
     
        <div className='flex w-[100%]'>
       
        
            <Slider {...settings} className="flex-none w-[102rem] 
            mb-[-1rem]">

              {images.map((item) => (
              <div key={item.id} className="h-[22rem]">
               
                <div className='
                   text-center w-[18rem] flex flex-col items-center
                   sm:w-[24rem]'>
                 <div className='h-[13rem] w-[13rem] shadow shadow-black 
                 bg-yellow-400 sm:h-[15rem] sm:w-[15rem]'>
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
      </div>
    
      
 

  );
 
}


export default TopOffers;


