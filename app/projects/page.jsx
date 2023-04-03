import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/projects.module.css';

export default function page() {
  return (
    <DefaultLayout styles={styles} page={'projects'}>
      <main className='min-h-screen bg-blue pl-16 pt-48'>
        <h1 className='text-4xl font-bold'>Projects</h1>
      </main>
    </DefaultLayout>
  );
}
