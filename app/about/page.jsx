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
          <div className='container shadow-xl mx-auto sm:mx-42 px-4 md:px-0 mt-8'>
            <div className='flex flex-col sm:flex-row flex-nowrap items-start justify-start h-auto sm:mx-42 sm:h-42 bg-white p-4'>
              <div className='mb-4 sm:mt-4 sm:ml-4'>
                <p className='text-black sm:text-2xl lg:text-4xl'>
                  <span className='text-2xl sm:text-4xl lg:text-5xl'>
                    Dedicated
                  </span>{' '}
                  <span className='text-[#CAB8FF]'>problem-solver</span> with
                  over a decade of professional experience, embracing change and
                  focusing on{' '}
                  <span className='text-[#CAB8FF]'>user-centered</span> design.
                </p>
              </div>
              <div className='flex flex-row items-center justify-between space-x-2 mx-2 sm:mt-8 min-[490px]:mt-16 md:mt-8 min-[490px]:flex-col md:flex-row lg:mt-4 '>
                <div className='flex items-center'>
                  <ul className='text-3xl'>
                    <li>Communicate.</li>
                    <li>Collaborate.</li>
                    <li>Create.</li>
                  </ul>
                </div>

                <div className='relative'>
                  <div className='flex items-center sm:mt-4 min-[490px]:mt-8 md:mt-4'>
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
          <div className='flex flex-col md:flex-row mx-12 lg:mx-24'>
            <div className='mt-8  md:mt-16 lg:mt-6 flex justify-center md:justify-start md:mr-4'>
              <div className='w-full max-w-[320px] sm:w-80'>
                <div
                  className='bg-[#CAB8FF] border border-black rounded-lg p-4'
                  style={{
                    width: '100%',
                    maxWidth: '320px',
                    minHeight: '520px',
                    borderRadius: '25px',
                    borderWidth: '9px',
                    boxShadow:
                      '0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <p className='text-[#2C3333] text-center'>
                    Blerby Blurb. Yerb.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-center sm:justify-start md:ml-4'>
              <ul className='mb-8  sm:flex sm:flex-row sm:flex-wrap justify-around'>
                {Object.entries(about_cards).map(([key, value]) => {
                  return (
                    <li className='mt-8'>
                      <div className='w-60 '>
                        <div
                          className='bg-[#2C3333] rounded-lg p-4 flex items-center justify-center'
                          style={{
                            width: '100%',
                            maxWidth: '240px',
                            minHeight: '240px',
                            borderRadius: '25px',
                            boxShadow:
                              '0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.5)',
                          }}
                        >
                          <p className='text-xl text-white text-center'>
                            {key} + {value}
                          </p>
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
          <div className='container shadow-xl mx-auto sm:mx-42 px-4 md:px-0 mt-8'>
            <div className='flex flex-col sm:flex-row flex-nowrap items-start justify-start h-auto sm:mx-42 sm:h-42 bg-white p-4 lg:mx-42'>
              <div className='mb-4 sm:mt-4 sm:ml-4'>
                <p className='text-black sm:text-2xl lg:text-4xl'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis neque congue, rhoncus eros eget, dapibus est. Duis
                  commodo, lectus nec faucibus laoreet, erat sapien tempus
                  augue, a volutpat turpis risus vitae magna.
                </p>
              </div>
              <div className='mb-4 sm:mt-4 sm:ml-4'>
                <p className='text-black sm:text-2xl lg:text-4xl'>
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
