import NavBarSeller from "../components/NavBarSeller";
import BaSellerBanner from "../components/Seller/BaSellerBanner";
import Image from "next/image";
import Quotes from "../components/Seller/Quotes";
import Advantages from "../components/Seller/Advantages";
import WhyShopsy from "../components/Seller/WhyShopsy";




const BecomeAseller= () => {

    return (
        <div className="">
            <NavBarSeller/>
            <BaSellerBanner/>
            <Quotes/>
            <Advantages/>
            <WhyShopsy/>
        </div>    
      
    );
}


export default BecomeAseller;