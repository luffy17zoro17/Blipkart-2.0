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




const BecomeAseller= () => {

    return (
        <div>
            <NavBarSeller/>
            <BaSellerBanner/>
            <Quotes/>
            <Advantages/>
            <WhyShopsy/>
            <BrandNewMarket/>
            <HowToSell/>
            <GrowFaster/>
            <EventsAndProgs/>
            <FooterSeller/>
            <FooterSellerBottom/>
        </div>    
      
    );
}


export default BecomeAseller;