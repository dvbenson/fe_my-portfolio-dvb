const projects = [
  {
    title: 'Next.js eCommerce App',
    category: 'Full Stack',
    URL: 'https://badsauce.co.uk/',
    repo: 'https://github.com/dvbenson/badsauce_frontend',
    image: '/screens/badsauce.png',
    description: 'Full-stack eCommerce website built using Next.js, TailwindCSS, and the Stripe API. Project includes a custom cart and checkout system that leverages Zustand for state management. The project features custom illustrations designed by myself with open-source or AI-generated photos.',
    stack: ['Next.js', 'TailwindCSS', 'Stripe API', 'Zustand'],
  },
  {
    title: 'Next.js Portfolio',
    category: 'Frontend',
    URL: 'https://danielvb.dev/',
    repo: 'https://github.com/dvbenson/my-portfolio-dvb',
    image: '/screens/portfolio.png',
    description: 'My personal portfolio provides an online space for outreach by other members of the community, collaborators, and potential professional partners - which will be built upon with features such as a blog and a newsletter, with future plans for sharing custom components and animations.',
    stack: ['Next.js', 'TailwindCSS', 'SendGrid', 'Vercel'],
  },
  {
    title: 'React frontend',
    category: 'Frontend',
    URL: 'https://badsauce-nc-news.netlify.app/',
    repo: 'https://github.com/dvbenson/fe_nc-news',
    image: '/screens/ncnewsreact.png',
    description: 'A React frontend news website that is integrated with a Node.js REST API for full CRUD functionality. The project is a demonstration of a mobile-first, responsive, and accessible app using Bootstrap.',
    stack: ['React', 'Bootstrap', 'Axios', 'Netlify'],
  },
  {
    title: 'Node.js REST API',
    category: 'Backend',
    URL: 'https://badsauce-webservices.onrender.com/api',
    repo: 'https://github.com/dvbenson/be_nc-news',
    image: '/screens/ncnewsapi.png',
    description: 'API facilitating user interaction through a comments section and aggregated article reviews, with voting functionality. Includes full CRUD capabilities built on a PostgreSQL database. Modularised routes and resource management for improved efficiency and maintainability. All testing written with Jest.',
    stack: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Render',
    ],
  },
];

export default projects;

