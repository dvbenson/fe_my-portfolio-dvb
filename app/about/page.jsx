import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/about.module.css';

export default function page() {
  return (
    <DefaultLayout styles={styles} page={'about'}>
      <main className='min-h-screen bg-electric-lime'>
        <div className='container mx-auto px-4 md:px-0'>
          <div className='h-48 bg-black flex items-center'>
            <div className='flex items-center justify-center w-full'>
              <h1 className='text-white text-7xl'>
                About Me<span className='text-electric-lime'>.</span>
              </h1>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
