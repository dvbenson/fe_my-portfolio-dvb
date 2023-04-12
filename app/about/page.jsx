import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/about.module.css';

export default function page() {
  return (
    <DefaultLayout styles={styles} page={'about'}>
      <main className='min-h-screen bg-white pb-16'>
        <section>
          <div className='container mx-auto px-4 md:px-16'>
            <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-pink pb-2'>
              <div className='flex items-center justify-center'>
                <p className='text-gray mr-64 sm:mr-72'>It's all</p>
              </div>
              <div className='flex items-center justify-center w-full'>
                <h1 className='text-black-gray text-6xl sm:text-7xl'>
                  About Me<span className='text-white'>.</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='flex flex-col justify-center items-center'>
            <div className='p-8 w-full sm:w-[520px] flex flex-col justify-center items-center gap-5  sm:mt-16'>
              <h1 className='text-3xl sm:text-5xl'>Let's cut to the chase.</h1>
              <div className='w-full sm:w-[380px]'>
                <p className='text-base sm:text-xl'>
                  {' '}
                  I'm going to keep this short and sweet, imagine this white
                  background and soft pink header as a blank page if you will.
                  The only thing is, it isn't. But there's a button here, and
                  that's the juicy bit.
                </p>
              </div>
              <div className='flex justify-center items-center'>
                <div className='relative'>
                  <div className='flex items-center'>
                    <p className={styles.emoji}>👉</p>
                    <button className={styles.cv_button}>
                      View
                      <br />
                      CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
