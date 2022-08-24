
import SearchBar from '../components/SearchBar';
import Sections from '../components/Sections';
import ImageSlideShow from "../components/ImageSlideShow";
import Electronics from '../components/Electronics';
import BeautyFoodToys from '../components/BeautyFoodToys&more';
import SportsHealthcare from '../components/SportsHealthcare&more';
import HomeKitchen from '../components/Home&KitchenEssentials';
import GroomingBooksAuto from '../components/GroomingBooksAuto&more';
import FashionTopDeals from '../components/FashionTopDeals';
import Footer from '../components/Footer';
import BestSellers from '../components/BestSellers';
import FooterBottom from '../components/FooterBottom';





const Home=()=> {


  return (
   <div>
     <div><SearchBar/></div>
     <div><Sections/></div>

     <div><ImageSlideShow/></div>

     <div><Electronics/></div>
     <div><BestSellers/></div>
     <div><BeautyFoodToys/></div>
     <div><SportsHealthcare/></div>
     <div><HomeKitchen/></div>
     <div><GroomingBooksAuto/></div>
     <div><FashionTopDeals/></div>
     <div><Footer/></div>
     <div><FooterBottom/></div>
   </div>  
  );

}

export default Home;