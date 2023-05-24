import projects from '../../data/projects';
import ProjectCard from '@/components/ProjectCard';
import ScrollArea from '@/components/ScrollArea';
import { v4 as uuidv4 } from 'uuid';


export default function Projects() {
return (
<main className="bg-[#222222]">
  <section>
    <ScrollArea>    
      <ul
      className='list-none flex flex-col sm:flex-row justify-center items-center py-4 gap-10'
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
</main>
)
}
