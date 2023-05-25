import projects from '../../data/projects';
import ProjectCard from '@/components/ProjectCard';
import ScrollArea from '@/components/ScrollArea';
import { v4 as uuidv4 } from 'uuid';

export default function Projects() {
return (
<>
  <div className='mx-auto px-8 w-full'>
    <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-[#444545] pb-2'>
      <div className='flex items-center justify-center '>
        <p className='text-[#EDE7E3] text-sm sm:text-base xxs:mr-36 sm:mr-48 md:mr-72 font-heading'>The good stuff</p>
      </div>
        <div
          className='flex items-center justify-center'
          style={{
          background:
            'linear-gradient(to right, #CCFF00, #FFEA20 55%, #FF7A18)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          }}
          >
          <h1 className='text-electric-lime xxs:text-5xl xs:text-6xl sm:text-7xl pb-2 font-heading'>
          Projects<span className='text-[#E9E3E6]'>.</span>
          </h1>
        </div>
    </div>
  </div>
  <ScrollArea>
  <ul
          className='list-none flex flex-col sm:flex-row justify-center items-center gap-10 max-sm:snap-x sm:snap-y'
            >
                {projects.map((project) => {
                  return (
                    <li
                      key={uuidv4()}
                      className='snap-always snap-start xxs:first:ml-0 sm:first:ml-[55rem] md:first:ml-[61.5rem] lg:first:ml-[50rem] min-[1200px]:first:ml-[40rem] xl:first:ml-[20rem]'
                      >
                        <ProjectCard project={project} />
                    </li>
              );
          })}
        </ul>
  </ScrollArea>
</>
)}
