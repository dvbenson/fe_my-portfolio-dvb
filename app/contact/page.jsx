import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/contact.module.css';

export default function page() {
  return (
    <DefaultLayout styles={styles} page={'contact'}>
      <main className='min-h-screen bg-pink pl-16 pt-48'>
        <h1 className='text-4xl font-bold'>Contact</h1>
      </main>
    </DefaultLayout>
  );
}
