




const MoreDropdown = () => {

    return (
       <div className=''>
          {Menu.map((item)=> (
            <div>
            <ul key={item.id}>
              <li className='hover:text-green-400 cursor-pointer'>
                 <SvgIcon className="mr-[0.4rem]" component={item.icon}/>
                  {item.name}
                 <hr className='h-[0.1rem] border-black my-[1rem]'/> 
              </li>
              
            </ul>
            
            </div>
          ))}
          
       </div>
    );
}

export default MoreDropdown