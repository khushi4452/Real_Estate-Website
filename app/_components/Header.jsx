import React from 'react';
import { Button } from "@/components/ui/button"


const Header = () => {
  return (
  <div className='p-6 px-10 flex justify-between'>
      <div className="flex gap-10 items-center">
      <img src='/Logo.svg' width={150} height={150} alt='Logo' />
      <ul className=' md:flex gap-10'>
        <li> For sale  </li>
        <li> For Rent </li>
        <li> Agent Finder </li>
      </ul>
    </div>
    <div  className='flex gap-2'> 
    <Button className='flex gap-2'>Post Your Add</Button>
    <Button variant="outline">Login</Button>



    </div>
  </div>
  );
};

export default Header; 

 