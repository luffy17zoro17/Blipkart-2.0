import React from 'react';
import Login from './Login';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const SearchRightButtons = () => {
  return (
    <div className="flex space-x-8 text-md font-bold">
      <div><Login/></div>
      <div>Become a Seller</div>
      <div>More <ExpandMoreIcon sx={{fontSize:17}}/></div>
      <div><ShoppingCartIcon /> Cart</div>
    </div>
  );
}

export default SearchRightButtons