import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ShopIcon from '@mui/icons-material/Shop';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SvgIcon from '@mui/material/SvgIcon';




const Menu = [
    {
        id:1,
        name:"My Profile",
        icon:AccountCircleIcon,
        
    },
    {
        id:2,
        name:"Flipkart Plus Zone",
        icon:LocalHospitalIcon,
    },
    {
        id:3,
        name:"Orders",
        icon:ShopIcon,
    },
    {
        id:4,
        name:"Wishlist",
        icon:FavoriteIcon,
    },
    {
        id:5,
        name:"Rewards",
        icon:EmojiEventsIcon,
    },
    {
        id:6,
        name:"Giftcards",
        icon:CardGiftcardIcon,
    }


]




const NavbarLogin = () => {


    

    return (
       
       <div className=''>
          <span className='flex w-[14.3rem] justify-between pb-8'>
          <h1>New Customer?</h1>
          </span>

          


          <hr className='h-[0.1rem] border-white mb-[1rem]'/> 
          {Menu.map((item)=> (
            <div>   
            <ul key={item.id}>
              <li className='hover:text-green-400 cursor-pointer'>
                 <SvgIcon className="mr-[0.4rem]" component={item.icon}/>
                  {item.name}
                 <hr className={item.id===6 ? 
                    "hidden" :'h-[0.1rem] border-black my-[1rem]'}/> 
              </li>
              
            </ul>
            
            </div>
          ))}
          
       </div>
    );
}

export default NavbarLogin