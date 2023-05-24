const projects = [
    {
      title: 'Node.js REST API',
      category: 'Backend',
      URL: 'https://badsauce-webservices.onrender.com/api',
      repo: 'https://github.com/dvbenson/be_nc-news',
      image: '/assets/be_nc-news.jpeg',
      objectives: 'REST API using Node.js and Express.js, PostgreSQL relational database, Full CRUD functionality, MVC architecture, Modularisation of endpoints with Express Router, Robust unit testing using Jest, Jest-supertest, Nodemon and Insomnia for endpoint tests',
      stack: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Render',
      ],
    },
    {
      title: 'React frontend',
      category: 'Frontend',
      URL: 'https://badsauce-nc-news.netlify.app/',
      repo: 'https://github.com/dvbenson/fe_nc-news',
      image: '/assets/fe_nc-news.jpeg',
      objectives: 'Build a React frontend on a Node.js backend API, React Router implemented for site navigation, Bootstrap and vanilla CSS, React custom components, Modularising AXIOS to create cleaner code, Mobile-first, responsive design,React Hooks and state management: useState, useEffect, useContext',
      stack: ['React', 'Bootstrap', 'Axios', 'Netlify'],
    },
    {
      title: 'Next.js Portfolio',
      category: 'Frontend',
      URL: 'https://danielvb.dev/',
      repo: 'https://github.com/dvbenson/my-portfolio-dvb',
      image: '/assets/portfolio.jpeg',
      objectives:'Figma design-systems and prototyping, Next.js 13s new app directory, TailwindCSS for styling, Utilise turbopack to optimise build times, Understanding of SSR/CSR and how Next.js leverages both, Custom components in Next.js, Mobile first design and accessibility',
      stack: ['Next.js', 'TailwindCSS', 'SendGrid', 'Vercel'],
    },
    {
      title: 'Next.js eCommerce App',
      category: 'Full Stack',
      URL: 'https://badsauce.co.uk/',
      repo: 'https://github.com/dvbenson/badsauce_frontend',
      image: '/assets/portfolio.jpeg',
      objectives: 'Create eCommerce app using Next.js 13 app directory and Stripe.',
      stack: ['Next.js', 'TailwindCSS', 'Stripe API', 'Vercel'],
    },
  ];

    export default projects;