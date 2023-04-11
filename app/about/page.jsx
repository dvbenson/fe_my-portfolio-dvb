import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/about.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function page() {
  const about_cards = {
    Experience: [
      'Full Stack Development',
      'REST API',
      'UI/UX Design',
      'Deployment/Hosting',
      'Agile Methodologies',
      'Project Management',
      'Team Leadership',
      'Product Delivery',
      'User-Centered Service',
    ],
    Values: [
      'Communication',
      'Transparency',
      'Empathy',
      'Collaboration',
      'Creativity',
    ],
    Interests_prof: [
      'Full Stack',
      'Frontend',
      'Design',
      'UI/UX',
      'AI/LLMs',
      'Product Management',
    ],
    Interests_pers: [
      'Cooking',
      'Baking',
      'Illustration',
      'Travel',
      'Language-Learning',
    ],
    Skills: [
      'Test Driven Development',
      'Paired Programming',
      'Object Oriented Programming',
      'Functional Programming',
      'Mobile-First',
      'Responsive Design',
      'Accessibility',
      'Version Control',
      'Databases',
    ],
    Stack: [
      'JavaScript',
      'HTML',
      'CSS',
      'Node.js',
      'Express.js',
      'Postgres',
      'SQL',
      'React',
      'Next.js',
      'Tailwind',
      'Bootstrap',
      'Jest',
    ],
    Design: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Framer'],
  };
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
        </section>
        <section>
          <div className='flex flex-col lg:flex-row justify-center items-center m-12 lg:m-16'>
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
                            <ul>
                              {value.map((value) => {
                                return <li key={uuidv4()}>{value}</li>;
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
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
