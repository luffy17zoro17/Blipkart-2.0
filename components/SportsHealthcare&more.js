
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
      product: '12th Gen Laptops',
      imgPath:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      priceRange:"From ₹47,900",
      category: 'High Performance Laptop',
    },
    { 
      id:2,
      product: 'Premium Laptops',
      imgPath:'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      priceRange:'From ₹45,990',
      category: 'ewferf',
    },
    { 
      id:3,
      product: 'Core i5 Laptops',
      imgPath:'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      priceRange:'From ₹39,990',
      category:'HP,Asus,Dell & More'
    },
    { 
      id:4,
      product: 'ASUS Monitors',
      imgPath:'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      priceRange: 'From ₹14999',
      category:'Top Rated',
    },
    {
      id:5,
      product: 'Printers',
      imgPath:'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9uaXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      priceRange:'From ₹10999',
      category: 'Epson'
    },
    { 
      id:6,
      product: 'Best of Hair Dryers',
      imgPath:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80',
      priceRange:'From ₹399',
      category:'Phillips, Nova & Havells'
    },
    { 
      id:7,
      product: 'Top Mirrorless Cameras',
      imgPath:'https://images.unsplash.com/photo-1542128047-9b51cb9b931d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYSUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      priceRange:'Shop Now',
      category:'Canon, Sony, Fujifilm'
    },
    { 
      id:8,
      product: 'Goč, Serbia',
      imgPath:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      priceRange:'From ₹990',
      category:'dfvdf'
    },
    {
      id:9,
      product: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:'https://images.unsplash.com/photo-1625772452888-ca36edeaf3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      priceRange:'From ₹4535',
      category:'wddee'
    },
    { 
      id:10,
      product: 'Bird',
      imgPath:'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvd2VyYmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      priceRange:'From ₹23,000',
      category:'sda'
    },
    { 
      id:11,
      product: 'Bali, Indonesia',
      imgPath:'https://images.unsplash.com/photo-1620331317312-74b88bf40907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      priceRange:'From ₹18,000',
      category:'dawde'
    },
    { 
      id:12,
      product: 'Goč, Serbia',
      imgPath:'https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      priceRange:'From ₹2000',
      category:'dcdcef'
    },
];




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className="shadow shadow-black text-black"
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
   <div>
    <ArrowBackIosNewIcon
      className="shadow shadow-black text-black"
      style={{...style, display: "block", background: "white"}}
      onClick={onClick}
    />
   </div> 
   
  );
}





const SportsHealthcare = () => {



  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    prevArrow: <div><SamplePrevArrow/></div>,
    nextArrow: <div><SampleNextArrow/></div>,
  }



  return (
      <div className="border shadow bg-white m-2 my-5 p-4 pb-7 relative">
        <div className="flex justify-between items-center">
          <div className="tag">
              <h1 className="text-xl font-semibold">Sports, Healthcare & more</h1>
              <h3 className="text-gray-400 text-sm font-semibold">
                Sports, Healthcare & more
              </h3>
          </div>
          <div className="border bg-blue-600 text-white 
           py-3 px-6 text-xs font-semibold rounded shadow-md">
            VIEW ALL
          </div>
        </div>  
        <div className="py-4 mb-8">
          <hr className="border-top w-[93.9rem] -ml-4 "/>
        </div>
        <div className="imgslider mx-[0.8]">
            <Slider {...settings}>
              {images.map((item) => (
              <div key={item.id} className="">
                <div className="flex flex-col space-y-3 justify-center">
                 <div className="hover:scale-105 flex justify-center"> 
                  <Image 
                    height={150}
                    width={150}
                    src={item.imgPath} 
                    className="object-cover"   
                  />
                 </div> 
                 <div className="space-y-2 text-center">
                   <div><h1 className="font-semibold truncate">{item.product}</h1></div>
                   <div className="text-green-700 text-sm">
                     <h1 className="">{item.priceRange}</h1>
                   </div>
                   <div><h1 className="text-gray-500 truncate">{item.category}</h1></div>
                 </div>
                </div> 
              </div>
              ))}
            </Slider>
        </div>
      </div>

  );
 
}


export default SportsHealthcare;


