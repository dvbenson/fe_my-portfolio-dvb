import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/about.module.css';

export default function page() {
  const fetchMoreData = async () => {};

  return (
    <DefaultLayout styles={styles} page={'about'}>
      <main className='min-h-screen bg-electric-lime pl-16 pt-48'>
        <h1 className='text-4xl font-bold text-black'>About</h1>
      </main>
    </DefaultLayout>
  );
}
