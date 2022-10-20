import NavBarSeller from "../components/NavBarSeller";
import BaSellerBanner from "../components/Seller/BaSellerBanner";

import Quotes from "../components/Seller/Quotes";
import Advantages from "../components/Seller/Advantages";
import WhyShopsy from "../components/Seller/WhyShopsy";
import BrandNewMarket from "../components/Seller/BrandNewMarket";
import HowToSell from "../components/Seller/HowToBeSeller";
import GrowFaster from "../components/Seller/GrowFaster";
import EventsAndProgs from "../components/Seller/EventsAndPrograms";
import FooterSeller from "../components/Seller/FooterSeller";
import FooterSellerBottom from "../components/Seller/FooterSellerBottom";
import ZeroCommission from "../components/Seller/ZeroCommission";





const BecomeAseller= () => {

   

    return (
        <>
        <div className="sticky top-0 left-0 z-30">
          <NavBarSeller/>
        </div> 
        
        <div className="text-[2.2vmin] flex flex-col w-[100%]">
           
       
        
            <BaSellerBanner/>
            <Quotes/>
            <Advantages/>
            <WhyShopsy/>
            <BrandNewMarket/>
            <HowToSell/>
            <ZeroCommission/>
            <GrowFaster/>
            <EventsAndProgs/>
            <FooterSeller/>
            <FooterSellerBottom/>
         
        </div>   
        </>
       
      
    );
}


export default BecomeAseller;