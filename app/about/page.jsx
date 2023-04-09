import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/about.module.css';

export default function page() {
  const about_cards = {
    Experience: 'Here it is',
    Values: 'Here it is',
    Interests: 'Here it is',
    Skills: 'Here it is',
    Stack: 'Here it is',
    Design: 'Here it is',
  };
  return (
    <DefaultLayout styles={styles} page={'about'}>
      <main className='min-h-screen bg-electric-lime pb-16'>
        <section>
          <div className='container mx-auto px-4 md:px-16'>
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
          <div className='container mx-auto sm:mx-42 px-4 md:px-0 mt-8'>
            <div className='flex flex-col sm:flex-row flex-nowrap items-start justify-start md:space-x-16 h-auto sm:mx-42 sm:h-36 bg-white p-4 shadow-xl'>
              <div className='mb-4 sm:mt-4 sm:ml-4 min-[976px]:w-6/12'>
                <p className='text-left text-black sm:text-2xl lg:text-3xl'>
                  <span className='text-2xl sm:text-4xl lg:text-5xl'>
                    Dedicated
                  </span>{' '}
                  <span className='text-red'>problem-solver</span> with over a
                  decade of professional experience, embracing change and
                  focusing on <span className='text-red'>user-centered</span>{' '}
                  design.
                </p>
              </div>
              <div className='flex justify-center items-center flex-row space-x-2 mx-2 sm:mt-8 min-[490px]:mt-16 md:mt-6 min-[490px]:flex-col md:flex-row lg:mt-4 '>
                <div className='flex justify-center items-center'>
                  <ul className='text-3xl md:mt-6'>
                    <li>Communicate.</li>
                    <li>Collaborate.</li>
                    <li>Create.</li>
                  </ul>
                </div>

                <div className='relative'>
                  <div className='flex items-center sm:mt-4 min-[490px]:mt-8'>
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
        <section>
          <div className='flex flex-col lg:flex-row justify-center items-center m-12 lg:m-16'>
            <div className='md:flex md:flex-col md:justify-center md:items-center md:mx-8 min-[1048px]:my-36 min-[1340px]:my-0'>
              <div id='bg-card_container' className={styles.bgcard_container}>
                <div id='bg-card' className={styles.bgcard}>
                  <h1 className='text-[#2C3333] text-center'>Big Bleeerb.</h1>
                  <p className='text-[#2C3333] text-center'>
                    Blerby Blurb. Yerb.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex md:ml-4'>
              <ul className='gap-10 sm:flex sm:flex-row sm:flex-wrap justify-center items-center'>
                {Object.entries(about_cards).map(([key, value]) => {
                  return (
                    <li className='mt-8 sm:mt-0'>
                      <div id='container' className={styles.container}>
                        <div id='card' className={styles.card}>
                          <div id='card-front' className={styles.front}>
                            <p className='text-3xl'>{key}.</p>
                          </div>
                          <div id='card-back' className={styles.back}>
                            <p>{value}.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className='container mx-auto sm:mx-42 px-4 md:px-0 mt-8'>
            <div className='flex flex-col sm:flex-row flex-nowrap items-start justify-start h-auto sm:mx-42 sm:h-36 bg-white p-4 lg:mx-42 shadow-xl'>
              <div className='mb-4 sm:mt-4 sm:ml-4 md:w-6/12'>
                <p className='text-black sm:text-2xl lg:text-3xl'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis neque congue, rhoncus eros eget, dapibus est. Duis
                  commodo, lectus nec faucibus laoreet, erat sapien tempus
                  augue, a volutpat turpis risus vitae magna.
                </p>
              </div>
              <div className='mb-4 sm:mt-4 sm:ml-4 md:w-6/12'>
                <p className='text-black sm:text-2xl lg:text-3xl'>
                  {' '}
                  Curabitur posuere est sit amet ex tincidunt, non viverra eros
                  pretium. Mauris a elementum nisi. Fusce ut est pulvinar,
                  placerat mi eget, pellentesque mauris.{' '}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
