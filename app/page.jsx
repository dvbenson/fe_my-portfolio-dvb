'use client';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import DefaultLayout from '../components/DefaultLayout';
import styles from '../styles/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export default function Home() {
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
    <DefaultLayout styles={styles}>
      <main className='flex flex-col items-center justify-center bg-white pt-40'>
        <section id='home' className=' mt-16 sm:mt-24 min-h-screen'>
          <p className='text-center subpixel-antialiased text-3xl md:text-4xl lg:text-5xl text-electric-lime tracking-normal'>
            <span className='text-black '>I'm Daniel VB</span>
          </p>

          <p className='text-center subpixel-antialiased text-6xl md:text-7xl lg:text-8xl text-electric-lime tracking-normal'>
            <span className='underline underline-offset-8 decoration-white'>
              <span className='text-black'>A</span> Full Stack
            </span>
          </p>

          <p className='text-center subpixel-antialiased text-6xl md:text-7xl lg:text-8xl text-electric-lime tracking-normal'>
            Web Developer
            <span className='text-black'>.</span>
          </p>
          <div className='flex justify-center items-center mt-16'>
            <a
              target='_blank'
              href='https://docs.google.com/document/d/1r39N-vulIz3M0qfF1d2GJqh5Wagn9sEmxQuTyPdGEh0/export?format=pdf'
              rel='noopener noreferrer'
            >
              <button className={styles.first_button}>Download CV</button>
            </a>
            <a target='blank' href='#projects' rel='noopener noreferrer'>
              <button className={styles.first_button}>My Projects</button>
            </a>
          </div>
        </section>
        <section id='about' className='min-h-screen'>
          <div className={styles.content_wrapper}>
            <div className='container mx-auto px-4 md:px-0'>
              <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-electric-lime pb-2'>
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
          </div>
          <section>
            <div className='container mx-auto px-4 flex flex-col'>
              <div className='container mx-auto px-4 w-full flex flex-col mt-16 gap-5 md:gap-24'>
                <div
                  id='img-text block 1'
                  className='container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-x-20'
                >
                  <div className='flex justify-center items-center'>
                    <img
                      src='/assets/food_cartoon.svg'
                      alt='about'
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div className='flex flex-col gap-4 min-[480px]:w-[400px] min-[480px]:h-[280px]'>
                    <h2 className='text-3xl lg:text-4xl xl:text-5xl'>
                      Get to know me.
                    </h2>
                    <p className='font-serif font-medium text-base md:text-lg  xl:text-xl'>
                      I'm a full stack developer, I love the JavaScript
                      eco-system and I'm a highly intuitive self-teacher.
                    </p>

                    <p className='font-serif font-medium text-base md:text-lg  xl:text-xl'>
                      Outside of programming you can find me drawing, designing,
                      baking or cooking. I'm an avid Linguist, having majored in
                      Languages, so I love learning a new phrase or two!
                    </p>
                  </div>
                </div>
                <div
                  id='img-text block 2'
                  className='container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-x-20'
                >
                  <div className='flex justify-center items-center md:order-2'>
                    <img
                      src='/assets/coding_cartoon.svg'
                      alt='about'
                      className='w-full h-full object-contain '
                    />
                  </div>
                  <div className='flex flex-col  gap-4 min-[480px]:w-[400px] min-[480px]:h-[280px] md:order-1'>
                    <h2 className='text-3xl lg:text-4xl xl:text-5xl'>
                      Experience.
                    </h2>

                    <p className='font-serif font-medium text-base md:text-lg  xl:text-xl'>
                      With a background in user-centred services and products,
                      Agile is a methodology I am confident in and have used to
                      deliver successful products.
                    </p>
                    <p className='font-serif font-medium text-base md:text-lg  xl:text-xl'>
                      Since then I have trained with Northcoders in full stack
                      development, working intensively to develop my skills and
                      hone in on what makes me tick as a developer.
                    </p>
                  </div>
                </div>
                <div
                  id='img-text block 3'
                  className='container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-x-20 md:mb-16 2xl:mb-24'
                >
                  <div className='flex justify-center items-center'>
                    <img
                      src='/assets/draw_cartoon.svg'
                      alt='about'
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div className='flex flex-col  gap-4 min-[480px]:w-[400px] min-[480px]:h-[280px]'>
                    <h2 className='text-3xl lg:text-4xl xl:text-5xl'>
                      Skills.
                    </h2>

                    <p className='font-serif font-medium text-base md:text-lg  xl:text-xl'>
                      I am able to take a product through its entire lifecycle.
                      Whether that's confidently building a backend REST API in
                      Node, routing with Express or creating a frontend UI in
                      React or Next.js.
                    </p>
                    <p className='font-serif font-medium text-base md:text-lg  xl:text-xl'>
                      I have taken a particular interest in UI/UX design,
                      becoming knowledgeable in design practices and prototyping
                      using Figma and Framer, and styling with vanilla CSS or
                      Tailwind to develop mobile-first, accessible and
                      responsive products.
                    </p>
                  </div>
                </div>
                <div
                  id='img-text block 4'
                  className='container mx-auto px-4 flex flex-col md:flex-row justify-center items-center mt-16 md:mt-0 gap-x-20 xl:gap-x-56'
                >
                  <div className='flex justify-center items-center md:order-2'>
                    <img
                      src='/assets/error_cartoon.svg'
                      alt='about'
                      className='w-full h-full object-contain max-[640px]:mb-8'
                    />
                  </div>
                  <div className='flex flex-col gap-4 min-[480px]:w-[400px] min-[480px]:h-[280px] md:order-1'>
                    <h2 className='text-3xl text-center md:-4xl lg:text-4xl xl:text-5xl'>
                      Stack.
                    </h2>

                    <ul className='font-serif font-medium text-center text-base md:text-lg  xl:text-xl'>
                      <li> JavaScript, HTML, CSS</li>
                      <li> React, Next.js, Vue.js</li>
                      <li>React Native</li>
                      <li> Node.js, Express.js</li>
                      <li> Python, Django, DRF</li>
                      <li> Postgres, SQL</li>
                      <li> Tailwind, Bootstrap</li>
                      <li> Figma, Framer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section id='projects' className='mt-24 min-h-screen'>
          <div className={styles.content_wrapper}>
            <div className='container mx-auto px-4 md:px-0'>
              <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-electric-lime pb-2'>
                <div className='flex items-center justify-center'>
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
          </div>
          <section>
            <div className='overflow-x-auto w-[900px] h-[720px]'>
              <ul
                id='wrapper'
                className='list-none flex justify-center items-center mx-8 md:mx-auto gap-20 py-4 pl-20'
              >
                {projects.map((project) => {
                  return (
                    <li
                      key={uuidv4()}
                      className='first:ml-[900px] snap-start last:mr[900px]'
                    >
                      <div
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
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </section>
        <section id='contact' className='mt-24 min-h-screen'>
          <div className={styles.content_wrapper}>
            <div className='container mx-auto px-4 md:px-0'>
              <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-electric-lime pb-2'>
                <div className='flex items-center justify-center'>
                  <p className='text-gray text-lg mr-48 sm:mr-72 whitespace-nowrap'>
                    Reach out
                  </p>
                </div>
                <div className='flex items-center justify-center w-full'>
                  <h1 className='text-black text-6xl sm:text-7xl'>
                    Contact<span className='text-white'>.</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <section>
            <ContactForm />
          </section>
        </section>
      </main>
    </DefaultLayout>
  );
}
