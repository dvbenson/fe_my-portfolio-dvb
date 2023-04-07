import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/projects.module.css';

export default function page() {
  return (
    <DefaultLayout styles={styles} page={'projects'}>
      <main className='min-h-screen bg-blue'>
        <div className='container mx-auto px-4 md:px-0'>
          <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-electric-lime pb-2'>
            <div className='flex flex-nowrap items-center justify-center'>
              <p className='text-gray text-lg mr-48 sm:mr-72 whitespace-nowrap'>
                The good stuff
              </p>
            </div>
            <div className='flex flex-nowrap items-center justify-center w-full'>
              <h1 className='text-black text-6xl sm:text-7xl'>
                Projects<span className='text-white'>.</span>
              </h1>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
