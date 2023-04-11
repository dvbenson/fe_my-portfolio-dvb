'use client';
import React, { useState } from 'react';
import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/projects.module.css';

export default function page() {
  const [tabDisplay, setTabDisplay] = useState('objectives');

  const projects = [
    {
      Title: 'node REST API',
      Category: 'Backend',
      URL: 'https://badsauce-webservices.onrender.com/api',
      Repo: 'https://github.com/dvbenson/be_nc-news',
      image: '/assets/be_nc-news.jpeg',
      Objectives: [
        'Build a REST API using Node.js and Express.js',
        'Use PostgreSQL to develop a relational database',
        'Create a robust set of endpoints to serve CRUD operations',
        'Deploy the API to Render',
        'Use TDD to build the API',
        'Utilise express router',
      ],
      Stack: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Husky',
        'Dotenv',
        'Jest',
        'Supertest',
        'Nodemon',
        'Insomnia',
        'Render',
      ],
      Learning: [
        'MVC architecture',
        'HTTPS requests',
        'TDD',
        'Modularisation of endpoints and error handling middleware using Express router',
        'Deploying and hosting a node API',
        'Environmenet setup for deployment using dotenv',
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
        'Use Axios to make HTTP requests to the API',
        'Style frontend with Bootstrap and vanilla CSS',
        'Deploy the frontend to Netlify',
      ],
      Stack: ['React', 'Bootstrap', 'Axios', 'Netlify'],
      Learning: [
        'Building custom components in React',
        'Modularising AXIOS to create cleaner code',
        'Understanding the limitations and strengths of Bootstrap vs custom design',
        'Mobile First Responsive design and accessibility',
        'React Hooks and state management: useState, useEffect, useContext',
        'General loading and error handling',
        'Deploying and hosting a website to Netlify',
      ],
    },
    {
      Title: 'Next.js Portfolio',
      Category: 'Frontend',
      URL: 'https://danielvb.dev/',
      Repo: 'https://github.com/dvbenson/my-portfolio-dvb',
      image: '/assets/dvb_portfolio.jpeg',
      Objectives: [
        'Build a portfolio to showcase my skills and projects in a unique and creative way',
        'Learn a new framework: Next.js 13 and understand its experimental app directory and project structure',
        'Use TailwindCSS for styling',
        'Utilise turbopack to optimise build times',
        'Deploy to Vercel',
      ],
      Stack: ['Next.js', 'TailwindCSS', 'Turbopack', 'Vercel'],
      Learning: [
        'SSR/CSR and how Next.js leverages both',
        'Custom components in Next.js',
        'Differences between TailwindCSS and other libraries such as Bootstrap',
        'What turbopack is and how it optimises build times',
        'Error and Load wrappers',
        'Deploying to Vercel',
        'Mobile first design and accessibility (focus on colour contrast)',
      ],
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
          <div
            id='wrapper'
            className='flex flex-col justify-center items-center'
          >
            <div className='mb-16 mt-8 flex flex-col justify-center items-center gap-10'>
              {projects.map((item) => (
                <div
                  id='container'
                  className='flex flex-row justify-center items-center mt-8 mb-8'
                >
                  <div
                    id='card'
                    className='relative bg-[#336666] flex flex-col mx-8 min-[800px]:flex-row p-4 rounded-xl lg:w-[800px] lg:h-[320px] shadow-2xl'
                  >
                    <div
                      id='image-card'
                      className='flex flex-col min-[800px]:mr-2'
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className='w-full h-auto lg:w-96 max-w-sm max-h-sm mt-4 rounded-xl shadow-md'
                      />
                      <div
                        id='project-title'
                        className='absolute -top-6 inset-x-0 left-1/2 min-[800px]:left-1/4 transform -translate-x-1/2 bg-gray rounded-full h-12 w-48 p-2 mb-1 text-center items-center justify-center flex'
                      >
                        <h1>{item.Title}</h1>
                      </div>

                      <div
                        id='link-buttons'
                        className='flex flex-row justify-center items-center gap-2 mt-2'
                      >
                        <a
                          target='_blank'
                          href={item.URL}
                          rel='noopener noreferrer'
                        >
                          <button className='rounded-xl bg-[#9BCFCF] p-2 grow mb-3 shadow-md'>
                            Host
                          </button>
                        </a>

                        <a
                          target='_blank'
                          href={item.Repo}
                          rel='noopener noreferrer'
                        >
                          <button className='rounded-xl bg-[#9BCFCF] p-2 grow mb-3 shadow-md'>
                            Repo
                          </button>
                        </a>
                      </div>
                    </div>
                    <div
                      id='tabs-card'
                      className='flex  flex-col bg-gray p-2 min-[800px]:ml-2 rounded-xl w-80 lg:w-[480px] h-auto w-auto max-h-80'
                    >
                      <div id='tab' className='bg-white p-2 rounded-xl h-80'>
                        <p className='text-[#2C3333]'>
                          {tabDisplay === 'objectives'
                            ? item.Objectives
                            : tabDisplay === 'stack'
                            ? item.Stack
                            : tabDisplay === 'learning'
                            ? item.Learning
                            : item.Objectives}
                        </p>
                      </div>
                      <div
                        id='tabs-buttons'
                        className='flex flex-row justify-center items-center gap-2'
                      >
                        <button
                          onClick={() => setTabDisplay('objectives')}
                          className='rounded-xl bg-[#969696] p-2 mt-2 grow shadow-md'
                        >
                          Objectives
                        </button>
                        <button
                          onClick={() => setTabDisplay('stack')}
                          className='rounded-xl bg-[#969696] p-2 mt-2 grow shadow-md'
                        >
                          Stack
                        </button>
                        <button
                          onClick={() => setTabDisplay('learning')}
                          className='rounded-xl bg-[#969696] p-2 mt-2 grow shadow-md'
                        >
                          Learnings
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
