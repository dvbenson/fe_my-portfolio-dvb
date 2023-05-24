import { v4 as uuidv4 } from 'uuid';
import ImageFrame from './ImageFrame';

export default function ProjectCard({ project }) {
return (

<div className='container flex flex-col w-full rounded-xl'>
<div className='flex flex-col rounded-xl w-[300px] md:w-[400px] h-[565px] drop-shadow-xl hover:drop-shadow-xl '>
<div className='bg-purple rounded-t-xl h-8 w-auto p-2 text-center items-center justify-center flex'>
    <h1 className='text-[#121212]'>
      {project.title}
    </h1>
  </div>
<div className='relative'>
    <ImageFrame 
    src={project.image}
    alt={project.title}
    fill={true}
    priority={true}
    className='w-[300px] sm:w-[400px] h-[165px] sm:h-[220px] object-contain relative' 
    variant=''
    />
  <div
    id='link-buttons'
    className='absolute bottom-0 right-0 flex flex-row justify-center items-center gap-2 m-2'
  >
    <button className='rounded-full bg-white w-12 h-9 hover:bg-black hover:text-white'>
      <a
        target='_blank'
        href={project.URL}
        rel='noopener noreferrer'
      >
        Host
      </a>
    </button>
    <button className='rounded-full bg-white w-12 h-9 hover:bg-black hover:text-white'>
      <a
        target='_blank'
        href={project.repo}
        rel='noopener noreferrer'
      >
        Repo
      </a>
    </button>
  </div>
</div>
<div className='bg-[#404040] h-[258px] sm:h-[208px] text-left p-4 leading-relaxed font-serif font-medium text-[#FAF9F6]'>
    <p className=''>{project.objectives}</p>
</div>
<div id='footer' className='bg-gray rounded-b-xl min-h-[60px] flex justify-evenly'>
  <ul className='font-serif font-semibold flex flex-row flex-wrap p-2 justify-center items-center gap-x-4 text-electric-lime drop-shadow-sm'>
    {project.stack.map((tech) => {
      return (
        <li
          key={uuidv4()}
          className='snap-start'
        >
          {tech}
        </li>
      );
    })}
  </ul>
</div>
</div>
</div>

)
}
