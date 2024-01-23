import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { navigationPages } from 'global/data';

export default function Sidebar() {
  const [activeUrl, setActiveUrl] = useState('/');

  useEffect(() => {
    setActiveUrl(window.location.pathname);
  }, []);

  return (
    <aside className='h-screen w-72 py-6 px-8 shadow-md flex flex-col gap-6 justify-start items-start mr-10'>
      <div className='flex flex-col justify-start items-start gap-2'>
        <h1 className='py-1 font-bold border-b-4 border-primary text-2xl'>
          ERP
        </h1>
        <p className='font-normal italic text-gray-400 text-sm'>
          Enterprise Resource Planning
        </p>
      </div>
      <nav className='w-full flex flex-col justify-start items-start gap-2 flex-grow'>
        {navigationPages.map((navigation) => {
          return (
            <Link
              className={activeUrl === navigation.path ? 'bg-secondary' : ''}
              href={navigation.path}
              key={navigation.id}
            >
              {navigation.text}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
