"use client"; // This should be the very first line

import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className='p-6 px-10 flex justify-between'>
      <div className="flex gap-10 items-center">
        <img src='/Logo.svg' width={150} height={150} alt='Logo' />
        <ul className='md:flex gap-10'>
          <Link href={'/'}>
            <li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/' ? 'text-primary' : ''}`}>For sale</li>
          </Link>
          <Link href={'/'}>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">For Rent</li>
          </Link>
          <Link href={'/'}>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">Agent Finder</li>
          </Link>
        </ul>
      </div>
      <div className='flex gap-2'>
        <Button className='flex gap-2'>Post Your Add</Button>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
};

export default Header;
