import projects from '../../data/projects';
import ProjectCard from '@/components/ProjectCard';
import ScrollArea from '@/components/ScrollArea';
import Header from '../Header';
import { v4 as uuidv4 } from 'uuid';


export default function Projects() {
return (
<>
<Header tag={'The good stuff'} title={'Projects'}/>
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
