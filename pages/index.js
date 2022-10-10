
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





const Home=()=> {


  const [isHover, setIsHover] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [isLoginPanel, setIsLoginPanel] = useState(false);

  const [IsSignupPanel,setIsSignupPanel] = useState(false);


  return (
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
     
     <div><Sections/></div>
     <div><ImageSlideShow/></div>
     <div><TopOffers/></div>
     <div><Electronics/></div>
     <div><BestSellers/></div>
     <div><FashionTopDeals/></div>
     <div><Furniture/></div>
     <div><TvAppliances/></div>
     <div><GroomingBooks/></div>
     
     <div><Footer/></div>
     <div><FooterBottom/></div>
   </div>  
  );

}

export default Home;