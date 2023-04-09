import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/projects.module.css';

export default function page() {
  const projects = [
    {
      Title: 'node API',
      Category: 'Backend',
      URL: 'https://badsauce-webservices.onrender.com/api',
      Repo: 'https://github.com/dvbenson/be_nc-news',
      Objectives: 'Create a node API to serve data to the frontend',
      Technologies: 'Node, Express, MongoDB, Mongoose, Heroku, Render',
      Learning: 'How to create a node API, how to deploy to Heroku and Render',
    },
    {
      Title: 'React frontend',
      Category: 'Frontend',
      URL: 'https://badsauce-nc-news.netlify.app/',
      Repo: 'https://github.com/dvbenson/fe_nc-news',
      Objectives: 'Create a React frontend to consume the node API',
      Technologies: 'React, Axios, Netlify',
      Learning: 'How to create a React frontend, how to deploy to Netlify',
    },
  ];

  return (
    <DefaultLayout styles={styles} page={'projects'}>
      <main className='min-h-screen bg-blue'>
        <section>
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
        </section>
        <section>
          <div className='flex flex-row sm:flex-row items-center justify-center mt-4'>
            <button className={styles.filter_button}>Backend</button>
            <button className={styles.filter_button}>Frontend</button>
          </div>
        </section>
        <section>
          <div id='wrapper'>
            <div
              id='container'
              className='flex flex-row justify-center items-center mt-4'
            >
              <div
                id='card'
                className='bg-[#336666] flex flex-col mx-8 lg:flex-row p-4 rounded-xl lg:w-[800px] lg:h-[320px] shadow-2xl'
              >
                <div id='image-card' className='flex flex-col lg:mr-2'>
                  <div
                    id='project-title'
                    className=' bg-[#969696] rounded-xl h-12 mb-1 text-center items-center justify-center flex'
                  >
                    <h1>Project Title</h1>
                  </div>
                  {/* <div
                    id='site-image'
                    className='w-auto min-[976px]:w-36 h-48 mt-1'
                  > */}
                  <img
                    src='/assets/fe_nc-news.jpeg'
                    alt='fe_nc-news'
                    className='w-full h-auto'
                  />
                  {/* </div> */}
                  <div
                    id='link-buttons'
                    className='flex flex-row justify-center items-center gap-2 mt-2'
                  >
                    <button className='rounded-xl bg-[#9BCFCF] p-2 grow mb-2 shadow-md'>
                      Repo
                    </button>
                    <button className='rounded-xl bg-[#9BCFCF] p-2 grow mb-2 shadow-md'>
                      Host
                    </button>
                  </div>
                </div>
                <div
                  id='tabs-card'
                  className='flex  flex-col bg-gray p-2 lg:ml-2 rounded-xl w-80 lg:w-[480px] h-auto '
                >
                  <div id='tab' className='bg-white p-2 rounded-xl h-80'>
                    <p className='text-[#2C3333]'>Tab</p>
                  </div>
                  <div
                    id='tabs-buttons'
                    className='flex flex-row justify-center items-center gap-2'
                  >
                    <button className='rounded-xl bg-[#969696] p-2 mt-2 grow shadow-md'>
                      Objectives
                    </button>
                    <button className='rounded-xl bg-[#969696] p-2 mt-2 grow shadow-md'>
                      Stack
                    </button>
                    <button className='rounded-xl bg-[#969696] p-2 mt-2 grow shadow-md'>
                      Learnings
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
