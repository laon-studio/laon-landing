import React, { useEffect, useState } from 'react';
import { Separator } from '~/common/components/ui/separator';
import { Link } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/common/components/ui/navigation-menu';

const menus = [
  {
    name: 'Products',
    to: '/products',
    items: [
      {
        name: 'Leaderboard',
        to: '/products/leaderboard',
        description: 'See the top performers in your community',
      },
      {
        name: 'Categories',
        to: '/products/categories',
        description: 'Explore products by category',
      },
      {
        name: 'Search',
        to: '/products/search',
        description: 'Find products quickly with our search feature',
      },
    ],
  },
  {
    name: 'Jobs',
    to: '/jobs',
    items: [
      {
        name: 'Post a Job',
        to: '/jobs/post',
        description: 'Share your job openings with the community',
      },
      {
        name: 'Job Listings',
        to: '/jobs/listings',
        description: 'Browse available job opportunities',
      },
    ],
  },
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Contact',
    to: '/contact',
    items: [
      {
        name: 'Support',
        to: '/contact/support',
        description: 'Get help with your questions or issues',
      },
      {
        name: 'Feedback',
        to: '/contact/feedback',
        description: 'Share your thoughts and suggestions with us',
      },
    ],
  },
];

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
      className={`flex px-20 h-16 items-center justify-between fixed top-0 left-0 right-0 z-50 transition-colors duration-700
        ${scrolled ? 'backdrop-blur bg-background/50' : ''}`}
    >
      <div className='flex items-center'>
        <Link to='/' className='font-bold tracking-tighter text-lg'>
          <img src='/laon_logo.png' alt='Laon Studio' className='w-10' />
        </Link>
        <Separator orientation='vertical' className='h-6 mx-4' />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <NavigationMenuTrigger>
                      <Link to={menu.to}>{menu.name}</Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='p-4 w-[400px] grid'>
                        {menu.items.map((item) => (
                          <li key={item.name} className='mb-2'>
                            <Link
                              to={item.to}
                              className='text-sm text-muted-foreground hover:text-foreground'
                            >
                              {item.name}
                            </Link>
                            {item.description && (
                              <p className='text-xs text-muted-foreground'>
                                {item.description}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    to={menu.to}
                    className='px-4 py-2 text-sm font-medium hover:text-foreground'
                  >
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
