'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import Brand from '../public/assets/brand.svg';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export default function Navbar({ styles, page }) {
  const pathname = usePathname();

  const defaultClass = 'fixed w-full h-24 bg-electric-lime';
  const projectClass = 'fixed w-full h-24 bg-blue';
  const contactClass = 'fixed w-full h-24 bg-pink';
  return (
    <>
      <nav
        className={
          page === 'home' || page === 'about'
            ? defaultClass
            : page === 'projects'
            ? projectClass
            : contactClass
        }
      >
        <div className='flex justify-between items-center h-full w-full px-4 2x1:px-16'>
          <div className='ml-4'>
            {page === 'home' ? (
              <Image
                src={Brand}
                alt='brand'
                width='205'
                height='auto'
                className='cursor-pointer'
              />
            ) : null}
          </div>
          <div>
            <ul className='hidden sm:flex'>
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
            </ul>
          </div>
          <div className='md:hidden cursor-pointer pl-24'>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </>
  );
}
