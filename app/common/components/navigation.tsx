import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaPaperPlane } from 'react-icons/fa';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`flex px-4 md:px-20 h-16 items-center justify-center fixed top-0 left-0 right-0 z-50 transition-colors duration-700
        ${scrolled ? 'backdrop-blur bg-background/50' : ''}`}
    >
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Link
          to='/'
          className='font-bold tracking-tighter text-lg flex items-center'
        >
          <img src='/images/laon_logo.png' alt='Laon Studio' className='w-10' />
        </Link>
      </div>
      <div className='ml-auto'>
        <a
          href='#contact'
          className='px-5 py-2 rounded-full bg-primary text-white font-semibold shadow-md flex items-center gap-2 hover:bg-primary/80 transition'
        >
          Inquiry <FaPaperPlane size={16} />
        </a>
      </div>
    </nav>
  );
}
