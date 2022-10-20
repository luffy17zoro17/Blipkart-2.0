
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import SvgIcon from '@mui/material/SvgIcon';


const moreMenu = [
  { 

   id:1,
   name:"Notification Preferences",
   icon:NotificationsIcon,
  },
  {
   id:2,
   name:"24x7 Customer Care",
   icon:LiveHelpIcon,
  },
  {
   id:3,
   name:"Advertise",
   icon:TrendingUpIcon, 
  },
  {
   id:4,
   name:"Download App",
   icon:DownloadIcon,
  }, 
    
]




const NavbarMore = ({isMore}) => {

    return (

        <div>
       {isMore ? (
       <div className=''>
          {moreMenu.map((item)=> (
            <div>
            <ul key={item.id}>
              <li className='hover:text-green-400 cursor-pointer'>
                 <SvgIcon className="mr-[0.4rem]" component={item.icon}/>
                  {item.name}
                 <hr className={item.id===4 ? 'hidden' :'h-[0.1rem] border-black my-[1rem]'}/> 
              </li>
              
            </ul>
            
            </div>
          ))}
          
       </div>
       ) : (<div></div>)}
       </div>
    );
}

export default NavbarMore