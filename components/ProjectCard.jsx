import { v4 as uuidv4 } from 'uuid';
import ImageFrame from './ImageFrame';
import Button from './Button';
import Link from 'next/link';

export default function ProjectCard({ project }) {
return (

<div className='flex flex-col w-full rounded-xl'>
<div className='flex flex-col rounded-xl xxs:w-[290px] xs:w-[300px] md:w-[400px] xxs:h-[586px] xs:h-[565px] drop-shadow-xl hover:drop-shadow-xl '>
<div className='bg-purple rounded-t-xl h-8 w-auto p-2 text-center items-center justify-center flex'>
    <h1 className='text-[#121212] font-heading text-lg'>
      {project.title}
    </h1>
  </div>
<div className='relative'>
    <ImageFrame 
    src={project.image}
    alt={project.title}
    width={500}
    height={250}
    priority={true}
    className='object-fill'
    variant=''
    />
  <div
    id='link-buttons'
    className='absolute bottom-0 right-0 flex flex-row justify-center items-center gap-2 m-2'
  >
  <Button label={<Link
        target='_blank'
        href={project.URL}
        rel='noopener noreferrer'
      >
        Host
      </Link> } variant={'quinary'}/>
    <Button label={<Link
        target='_blank'
        href={project.repo}
        rel='noopener noreferrer'
      >
        Repo
      </Link>} variant={'quinary'}/>
  </div>
</div>
<div className='bg-[#404040] xxs:h-[288px] xs:h-[258px] sm:h-[208px] text-left p-4 leading-relaxed font-serif font-medium text-[#FAF9F6] font-sans'>
    <p className=''>{project.description}</p>
</div>
<div id='footer' className='bg-gray rounded-b-xl min-h-[60px] flex justify-evenly'>
  <ul className='font-sans font-semibold flex flex-row flex-wrap p-2 justify-center items-center gap-x-4 text-electric-lime drop-shadow-sm'>
    {project.stack.map((tech) => {
      return (
        <li
          key={uuidv4()}
          className='snap-start'
        >
          <p><span className='text-white'>#</span>{tech}</p>
        </li>
      );
    })}
  </ul>
</div>
</div>
</div>

)
}
