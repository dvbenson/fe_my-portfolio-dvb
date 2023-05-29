'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import SideNavBar from './SideNavBar';
import NavItem from '../NavItem';
import Logo from '../Logo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        id='navbar'
        className='fixed w-full h-24 bg-[#222222] border-t-0 shadow-none z-50'
      >
        <div className='flex justify-between items-center h-full w-full px-4 2x1:px-16'>
         <Logo/>
          <div className='hidden lg:flex'>
            <ul className='hidden lg:flex -space-x-8'>
            <NavItem label={<Button label={'Home'} variant={'primary'}/>} href={'#home'} className='p-4' />
            <NavItem label={<Button label={'About'} variant={'primary'}/>} href={'#about'} className='p-4' />
            <NavItem label={<Button label={'Projects'} variant={'primary'}/>} href={'#projects'} className='p-4' />
            <NavItem label={<Button label={'Contact'} variant={'primary'}/>} href={'#contact'} className='p-4' />
              <div className='flex -space-x-8'>
                <li className='p-4 mx-4'>
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    size='2xl'
                    className='bg-[#121212]  text-[#121212] rounded-full my-1 mx-2.5'                    
                  />
                </li>
            <NavItem 
            label={<Button label={<FontAwesomeIcon icon={faGithubAlt} />} variant={'secondary'}/>}  target='_blank'
            href='https://github.com/dvbenson'
            rel='noopener noreferrer'
            className='p-4'
            />
            <NavItem label={ <Button variant={'secondary'} label={ <FontAwesomeIcon icon={faLinkedinIn} />}/>} 
            target='_blank'
            href='https://www.linkedin.com/in/dvbenson/'
            rel='noopener noreferrer'
            className='p-4'
            />
              </div>
            </ul>
          </div>
          <div onClick={handleNav} className='lg:hidden cursor-pointer pl-24'>
            <FontAwesomeIcon
              icon={faBars}
              className='text-2xl sm:text-4xl sm:mr-2'
            />
          </div>
        </div>
        <SideNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleNav={handleNav} />
      </nav>
    </>
  );
}
