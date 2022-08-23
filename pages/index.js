import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar';
import Sections from '../components/Sections';
import ImageSlideShow from "../components/ImageSlideShow";
import Electronics from '../components/Electronics';





const Home=()=> {


  return (
   <div>
     <div><SearchBar/></div>
     <div><Sections/></div>

     <div><ImageSlideShow/></div>

     <div><Electronics/></div>
   </div>  
  );

}

export default Home;