import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/about.module.css';

export default function page() {
  return (
    <DefaultLayout styles={styles} page={'about'}>
      <main className='min-h-screen bg-electric-lime'>
        <section>
          <div className='container mx-auto px-4 md:px-0'>
            <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-black pb-2'>
              <div className='flex items-center justify-center'>
                <p className='text-gray mr-64 sm:mr-72'>It's all</p>
              </div>
              <div className='flex items-center justify-center w-full'>
                <h1 className='text-white text-6xl sm:text-7xl'>
                  About Me<span className='text-electric-lime'>.</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container drop-shadow-xl mx-auto px-4 md:px-0'>
            <div className='flex flex-col sm:flex-row flex-nowrap items-start justify-start h-auto sm:h-42 bg-white p-4'>
              <div className='mb-4'>
                <p className='text-black'>
                  <span className='text-xl'>Dedicated</span> problem-solver with
                  over a decade of professional experience, embracing change and
                  focusing on user-centered design.
                </p>
              </div>
              <div className='flex flex-row items-center justify-between space-x-24 mx-8'>
                <div className='flex items-center'>
                  <ul>
                    <li>Collaborate.</li>
                    <li>Create.</li>
                    <li>Adapt.</li>
                  </ul>
                </div>
                <div className='flex items-center'>
                  <button className={styles.cv_button}>
                    View<br></br>
                    CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
