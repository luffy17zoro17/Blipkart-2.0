import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar';
import Sections from '../components/Sections';
import ImageSlideshow from '../components/ImageSlideshow';




export default function Home() {


  return (
   <div>
     <div><SearchBar/></div>
     <div><Sections/></div>

     <div><ImageSlideshow/></div>
   </div>  
  );

}
