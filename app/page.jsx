import Link from 'next/link';
import DefaultLayout from '../components/DefaultLayout';
import styles from '../styles/home.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export default function Home() {
  return (
    <DefaultLayout styles={styles} page={'home'}>
      <main className='flex flex-col items-center justify-center in the parent div min-h-screen bg-black pt-40'>
        <p className='text-center subpixel-antialiased text-xl sm:text-3xl md:text-4xl lg:text-5xl text-electric-lime tracking-normal'>
          <span className='text-white '>I'm Daniel VB</span>
        </p>

        <p className='text-center subpixel-antialiased text-4xl sm:text-8xl md:text-7xl lg:text-8xl text-electric-lime tracking-normal'>
          <span className='underline underline-offset-8 decoration-white'>
            <span className='text-white'>A</span> Full Stack
          </span>
        </p>

        <p className='text-center subpixel-antialiased text-4xl sm:text-8xl md:text-7xl lg:text-8xl text-electric-lime tracking-normal'>
          Software Developer
          <span className='text-white'>.</span>
        </p>
        <div className='animate-bounce mt-3'>
          <button className={styles.first_button}>
            <Link href='/about'>
              <FontAwesomeIcon icon={faRightLong} />
            </Link>
          </button>
        </div>
      </main>
    </DefaultLayout>
  );
}
