'use client';
import Image from 'next/image';
import Brand from '../public/assets/brand.svg';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export default function Navbar({ styles, logo }) {
  // const router = useRouter();
  // const navLink = [
  //   {
  //     name: 'Home',
  //     path: '/',
  //   },
  //   {
  //     name: 'About',
  //     path: '/about',
  //   },
  //   {
  //     name: 'Projects',
  //     path: '/projects',
  //   },
  //   {
  //     name: 'Contact',
  //     path: '/contact',
  //   },
  // ];

  // console.log(useMyRouter.pathname);
  return (
    <>
      <nav className={styles.nav}>
        <div className='flex justify-between items-center h-full w-full px-4 2x1:px-16'>
          <div className='ml-4'>
            {logo ? <Image src={Brand} alt='brand' /> : null}
          </div>
          <div>
            <ul className='flex'>
              {/* {navLink.map(({ path, name }) => (
                <li className='p-4' key={name}>
                  <Link href={`${path}`}>
                    <button
                      className={` ${
                        router.pathname === path
                          ? styles.button_active
                          : styles.button
                      }`}
                    >
                      {name}
                    </button>
                  </Link>
                </li>
              ))} */}
              <li className='p-4'>
                <Link href='/'>
                  <button className={styles.button}>Home</button>
                </Link>
              </li>
              <li className='p-4'>
                <Link href='/about'>
                  <button className={styles.button}>About</button>
                </Link>
              </li>
              <li className='p-4'>
                <Link href='/projects'>
                  <button className={styles.button}>Projects</button>
                </Link>
              </li>
              <li className='p-4'>
                <Link href='/contact'>
                  <button className={styles.button}>Contact</button>
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
        </div>
      </nav>
    </>
  );
}
