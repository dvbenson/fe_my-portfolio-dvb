'use client';
import { v4 as uuidv4 } from 'uuid';
import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/projects.module.css';

export default function page() {
  const projects = [
    {
      Title: 'Node.js REST API',
      Category: 'Backend',
      URL: 'https://badsauce-webservices.onrender.com/api',
      Repo: 'https://github.com/dvbenson/be_nc-news',
      image: '/assets/be_nc-news.jpeg',
      Objectives: [
        'REST API using Node.js and Express.js',
        'PostgreSQL relational database',
        'Full CRUD functionality',
        'MVC architecture',
        'Modularisation of endpoints with Express Router',
        'Robust unit and integrated testing using Jest',
        'Jest-supertest, Nodemon and Insomnia for endpoint tests',
      ],
      Stack: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Husky',
        'Dotenv',
        'Jest',
        'Nodemon',
        'Render',
      ],
    },
    {
      Title: 'React frontend',
      Category: 'Frontend',
      URL: 'https://badsauce-nc-news.netlify.app/',
      Repo: 'https://github.com/dvbenson/fe_nc-news',
      image: '/assets/fe_nc-news.jpeg',
      Objectives: [
        'Build a React frontend on a Node.js backend API',
        'React Router implemented for site navigation',
        'Bootstrap and vanilla CSS',
        'React custom components',
        'Modularising AXIOS to create cleaner code',
        'Mobile-first, responsive design',
        'React Hooks and state management: useState, useEffect, useContext',
      ],
      Stack: ['React', 'Bootstrap', 'Axios', 'Netlify'],
    },
    {
      Title: 'Next.js Portfolio',
      Category: 'Frontend',
      URL: 'https://danielvb.dev/',
      Repo: 'https://github.com/dvbenson/my-portfolio-dvb',
      image: '/assets/dvb_portfolio.jpeg',
      Objectives: [
        'Figma design-systems and prototyping',
        'Next.js 13s new app directory',
        'TailwindCSS for styling',
        'Utilise turbopack to optimise build times',
        'Understanding of SSR/CSR and how Next.js leverages both',
        'Custom components in Next.js',
        'Mobile first design and accessibility',
      ],
      Stack: ['Next.js', 'TailwindCSS', 'Turbopack', 'Vercel'],
    },
  ];

  return (
    <DefaultLayout styles={styles} page={'projects'}>
      <main className='min-h-screen bg-gray-black'>
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
          <div
            id='wrapper'
            className='flex flex-col lg:flex-row lg:flex-wrap justify-center items-center mx-8 md:mx-auto gap-20 py-4'
          >
            {projects.map((project) => {
              return (
                <div
                  key={uuidv4()}
                  id='card-container'
                  className='container flex flex-col max-w-[480px]  mt-16 hover:shadow-2xl transition-all duration-300 ease-in-out transform even:hover:-rotate-1 odd:hover:rotate-1 hover:scale-105'
                >
                  <div
                    id='card'
                    className='flex flex-col rounded-xl w-auto shadow-xl'
                  >
                    <div className='relative'>
                      <img
                        src={project.image}
                        alt={project.Title}
                        className='w-auto h-auto max-w-full md:max-w-[480px] rounded-t-xl shadow-md'
                      />
                      <div
                        id='project-title'
                        className='absolute -top-6 inset-x-0 left-1/2 transform -translate-x-1/2 bg-purple rounded-full h-12 w-48 p-2 mb-1 text-center items-center justify-center flex'
                      >
                        <h1>{project.Title}</h1>
                      </div>
                      <div
                        id='link-buttons'
                        className='absolute bottom-0 right-0 flex flex-row justify-center items-center gap-2 m-2'
                      >
                        <button className='rounded-full bg-gray w-12 h-9 active:bg-black active:text-white'>
                          <a
                            target='_blank'
                            href={project.URL}
                            rel='noopener noreferrer'
                          >
                            Host
                          </a>
                        </button>
                        <button className='rounded-full bg-gray w-12 h-9 active:bg-black active:text-white'>
                          <a
                            target='_blank'
                            href={project.Repo}
                            rel='noopener noreferrer'
                          >
                            Repo
                          </a>
                        </button>
                      </div>
                    </div>
                    <div id='body' className='bg-black-gray'>
                      <ul className='font-serif font-medium text-[#FAF9F6] text-center mx-4 py-4 leading-relaxed'>
                        {project.Objectives.map((item) => {
                          return (
                            <li
                              key={uuidv4()}
                              className='odd:bg-[#5A6662] p-1 first:rounded-t-xl last:rounded-b-xl'
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div id='footer' className='bg-gray rounded-b-xl'>
                      <ul className='font-serif font-medium flex flex-row flex-wrap mx-3 py-3 justify-center gap-x-4'>
                        {project.Stack.map((tech) => {
                          return (
                            <li key={uuidv4()}>
                              <span className='text-white'>#</span>
                              {tech}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
