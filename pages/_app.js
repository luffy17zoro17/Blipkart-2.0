import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '../components/NavBar';
import styles from '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  
  return (
    

    
    <div className=''>
    <div className='respon'>
    <div className='flex flex-col text-[1vw]
    w-[100%] h-[100%] relative'>
    <div className='static'>
    <Component {...pageProps} />
    </div>
    </div>
    </div>
    </div>

    );
}

export default MyApp
