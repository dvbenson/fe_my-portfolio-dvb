import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/contact.module.css';

export default function page() {
  return (
    <DefaultLayout styles={styles} page={'contact'}>
      <main className={styles.main}>
        <h1 className='text-4xl font-bold'>Contact</h1>
      </main>
    </DefaultLayout>
  );
}
