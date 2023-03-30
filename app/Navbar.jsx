import Image from 'next/image';
import Brand from '../public/assets/brand.svg';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className='bg-electric-lime w-full h-24'>
        <div className='flex justify-between items-center h-full w-full px-4 2x1:px-16'>
          <div className='ml-4'>
            <Image src={Brand} alt='brand' />
          </div>
          <div>
            <ul className='flex'>
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
                  <button className={styles.button_circle}>G</button>
                </a>
              </li>

              <li className='p-4'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/danielvictorbenson/'
                  rel='noopener noreferrer'
                >
                  <button className={styles.button_circle}>L</button>
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
