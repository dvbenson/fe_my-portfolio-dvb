import DefaultLayout from '../components/DefaultLayout';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <DefaultLayout styles={styles} page={'home'}>
      <main className='min-h-screen bg-black pl-8 sm:pl-16 lg:pl-32 pt-48 md:pt-64'>
        <p className='subpixel-antialiased text-4xl sm:text-8xl md:text-7xl lg:text-8xl text-electric-lime tracking-normal'>
          <span className='underline underline-offset-8 decoration-white'>
            Daniel Benson
          </span>
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
