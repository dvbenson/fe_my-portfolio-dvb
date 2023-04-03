'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import Brand from '../public/assets/brand.svg';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faXmark,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export default function Navbar({ styles, page }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav
        className={
          page === 'home'
            ? 'fixed w-full h-24 bg-electric-lime border-t-0 shadow-none'
            : page === 'about'
            ? 'fixed w-full h-24 bg-electric-lime border-t-0 shadow-none'
            : page === 'projects'
            ? 'fixed w-full h-24 bg-blue border-t-0 shadow-none'
            : 'fixed w-full h-24 bg-pink border-t-0 shadow-none'
        }
      >
        <div className='flex justify-between items-center h-full w-full px-4 2x1:px-16'>
          <div className='ml-4'>
            {page === 'home' ? (
              <Image
                src={Brand}
                alt='brand'
                className='w-160 h-auto md:w-120 cursor-pointer'
              />
            ) : (
              <Image
                src={Brand}
                alt='brand'
                className=' hidden w-160 h-auto md:w-120 cursor-pointer'
              />
            )}
          </div>
          <div className='hidden lg:flex'>
            <ul className='hidden lg:flex -space-x-8'>
              <li className='p-4'>
                <Link href='/'>
                  <button
                    className={
                      pathname === '/' ? styles.button_active : styles.button
                    }
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li className='p-4'>
                <Link href='/about'>
                  <button
                    className={
                      pathname === '/about'
                        ? styles.button_active
                        : styles.button
                    }
                  >
                    About
                  </button>
                </Link>
              </li>
              <li className='p-4'>
                <Link href='/projects'>
                  <button
                    className={
                      pathname === '/projects'
                        ? styles.button_active
                        : styles.button
                    }
                  >
                    Projects
                  </button>
                </Link>
              </li>
              <li className='p-4'>
                <Link href='/contact'>
                  <button
                    className={
                      pathname === '/contact'
                        ? styles.button_active
                        : styles.button
                    }
                  >
                    Contact
                  </button>
                </Link>
              </li>
              <div className='flex -space-x-8'>
                <li className='p-4 mx-4'>
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    size='2xl'
                    className={styles.divider}
                  />
                </li>
                <li className='p-4'>
                  <a
                    target='_blank'
                    href='https://github.com/dvbenson'
                    rel='noopener noreferrer'
                  >
                    <button className={styles.button_circle}>
                      <FontAwesomeIcon
                        icon={faGithubAlt}
                        className={styles.icon}
                      />
                    </button>
                  </a>
                </li>

                <li className='p-4'>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/in/danielvictorbenson/'
                    rel='noopener noreferrer'
                  >
                    <button className={styles.button_circle}>
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className={styles.icon}
                      />
                    </button>
                  </a>
                </li>

                <li className='p-4'>
                  <button className={styles.button_circle}>T</button>
                </li>
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
        <div
          className={
            menuOpen
              ? 'fixed left-0 top-0 w-[65%] sm:w-[30%] lg:hidden h-screen bg-electric-lime p-10 sm:p-30 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className='flex w-full justify-end items-center'>
            <div onClick={handleNav} className='cursor-pointer'>
              <FontAwesomeIcon icon={faXmark} size='xl' />
            </div>
          </div>
          <div className='flex-col py-4'>
            <ul>
              <li
                className='py-4 cursor-pointer'
                onClick={() => setMenuOpen(false)}
              >
                <Link href='/'>
                  <button
                    className={
                      pathname === '/'
                        ? styles.button_active_sidenav
                        : styles.button_sidenav
                    }
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li
                className='py-4 cursor-pointer'
                onClick={() => setMenuOpen(false)}
              >
                <Link href='/about'>
                  <button
                    className={
                      pathname === '/about'
                        ? styles.button_active_sidenav
                        : styles.button_sidenav
                    }
                  >
                    About
                  </button>
                </Link>
              </li>
              <li
                className='py-4 cursor-pointer'
                onClick={() => setMenuOpen(false)}
              >
                <Link href='/projects'>
                  <button
                    className={
                      pathname === '/projects'
                        ? styles.button_active_sidenav
                        : styles.button_sidenav
                    }
                  >
                    Projects
                  </button>
                </Link>
              </li>
              <li
                className='py-4 cursor-pointer'
                onClick={() => setMenuOpen(false)}
              >
                <Link href='/contact'>
                  <button
                    className={
                      pathname === '/contact'
                        ? styles.button_active_sidenav
                        : styles.button_sidenav
                    }
                  >
                    Contact
                  </button>
                </Link>
              </li>

              <li className='py-4 cursor-pointer'>
                <a
                  target='_blank'
                  href='https://github.com/dvbenson'
                  rel='noopener noreferrer'
                >
                  <button className={styles.button_circle_sidenav}>
                    <FontAwesomeIcon
                      icon={faGithubAlt}
                      className={styles.icon}
                    />
                  </button>
                </a>
              </li>

              <li className='py-4 cursor-pointer'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/danielvictorbenson/'
                  rel='noopener noreferrer'
                >
                  <button className={styles.button_circle_sidenav}>
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className={styles.icon}
                    />
                  </button>
                </a>
              </li>

              <li className='py-4 cursor-pointer'>
                <button className={styles.button_circle_sidenav}>T</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
