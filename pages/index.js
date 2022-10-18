
import NavBar from '../components/NavBar';
import Sections from '../components/Sections';
import ImageSlideShow from "../components/ImageSlideShow";
import Electronics from '../components/Electronics';

import FashionTopDeals from '../components/FashionTopDeals';
import Footer from '../components/Footer';
import BestSellers from '../components/BestSellers';
import FooterBottom from '../components/FooterBottom';
import TopOffers from '../components/TopOffers';
import Furniture from '../components/BestSellingFurniture';
import TvAppliances from '../components/Tvs&Appliances';
import GroomingBooks from '../components/GroomingBooks&more';
import { useState } from 'react';
import Head from 'next/head';





const Home=()=> {


  const [isHover, setIsHover] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [isLoginPanel, setIsLoginPanel] = useState(false);

  const [IsSignupPanel,setIsSignupPanel] = useState(false);


  return (
    <>
    <Head>
    <title>Blipkart</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link rel="icon" href="https://iconarchive.com/download/i54293/crountch/one-piece-jolly-roger/Luffys-flag.ico" />
   
  </Head>
  
   <div className={(isLoginPanel || IsSignupPanel) && "fixed"}>
      <NavBar
            isHover={isHover}
            setIsHover={setIsHover}
            isMore={isMore}
            setIsMore={setIsMore}
            isLoginPanel={isLoginPanel}
            IsSignupPanel={IsSignupPanel}
            setIsLoginPanel={setIsLoginPanel}
            setIsSignupPanel={setIsSignupPanel}
          />
      <div className='flex border-4 border-red-700 relative
      w-[100%]'>
       <div className='w-[100%]'>
        <Sections/>
       <ImageSlideShow/>
       <TopOffers/>
        <Electronics/>
       <BestSellers/>
       <FashionTopDeals/>
       <Furniture/>
       <TvAppliances/>
       <GroomingBooks/>
     
       <Footer/>
       <FooterBottom/>
       </div>
      </div>
   </div>
   </> 
  );

}

export default Home;