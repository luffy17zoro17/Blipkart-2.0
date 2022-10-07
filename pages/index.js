
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





const Home=()=> {


  return (
   <div>
     <div><NavBar/></div>
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