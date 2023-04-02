// 'use client';
import DefaultLayout from '../components/DefaultLayout';
import styles from '../styles/home.module.css';
export default function Home() {
  return (
    <DefaultLayout styles={styles} page={'home'}>
      <main className={styles.main}>
        <p className='subpixel-antialiased text-4xl md:text-8xl  text-electric-lime tracking-normal'>
          <span className='underline underline-offset-8'>Daniel Benson</span>
          <br />
          Software Developer
          <span className='text-white'>.</span>
          <br />
          Full Stack
          <span className='text-white'>.</span>
          <br />
        </p>
      </main>
    </DefaultLayout>
  );
}
