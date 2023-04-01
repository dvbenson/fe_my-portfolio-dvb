import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/projects.module.css';

export default function page() {
  return (
    <DefaultLayout styles={styles} logo={false}>
      <main className={styles.main}>
        <h1 className='text-4xl font-bold'>Projects</h1>
      </main>
    </DefaultLayout>
  );
}
