import React from 'react';
import { Button } from "@/components/ui/button"


const Header = () => {
  return (
  <div>
      <div>
      <img src='/Logo.svg' width={150} height={150} alt='Logo' />
      <ul className=' md:flex gap-10'>
        <li> For sale  </li>
        <li> For Rent </li>
        <li> Agent Finder </li>
      </ul>
    </div>
    <div>
    <Button>Post Your Add</Button>

    </div>
  </div>
  );
};

export default Header; 

 