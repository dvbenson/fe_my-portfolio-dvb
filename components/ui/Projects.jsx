import projects from '../../data/projects';
import ProjectCard from '@/components/ProjectCard';
import ScrollArea from '@/components/ScrollArea';
import { v4 as uuidv4 } from 'uuid';


export default function Projects() {
return (

<section id='projects' className='mb-24'>
  <div className='container mx-auto px-4 md:px-0 w-[380px] sm:w-[620px] md:w-[748px] lg:w-[1000px] xl:w-[1200px]'>
    <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-[#444545] pb-2'>
      <div className='flex items-center justify-center'>
        <p className='text-[#EDE7E3] text-lg mr-48 sm:mr-72 whitespace-nowrap'>
          The good stuff
        </p>
      </div>
        <div
          className='flex flex-nowrap items-center justify-center'
          style={{
          background:
            'linear-gradient(to right, #CCFF00, #FFEA20 55%, #FF7A18)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          }}
          >
          <h1 className='text-electric-lime text-6xl sm:text-7xl pb-2'>
          Projects<span className='text-[#E9E3E6]'>.</span>
          </h1>
        </div>
    </div>
  </div>

  <section>
      <ScrollArea>    
        <ul
          className='list-none flex flex-col sm:flex-row justify-center items-center py-4 gap-10 sm:h-[637px]'
            >
                {projects.map((project) => {
                  return (
                    <li
                      key={uuidv4()}
                      className=''
                      >
                        <ProjectCard project={project} />
                    </li>
              );
          })}
        </ul>
      </ScrollArea>
  </section>
</section>
)}
