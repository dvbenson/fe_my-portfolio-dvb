import { ScrollOffset }  from '../ScrollOffset';
import Projects from './Projects';
import Contact from './Contact';
import Hero from './Hero';
import About from './About';

export default function Main({styles}) {
  return (
    <>
    <ScrollOffset id='home' />
    <main className='flex flex-col items-center justify-center bg-[#222222] pt-40'>
    <section className='mt-8 sm:mt-16   mb-52 sm:mb-64 min-[1400]:mb-80'>
      <Hero styles={styles}/>
    </section>
    <ScrollOffset id='about' />
    <section className='mb-24 min-h-screen'>
     <About />
    </section>
    <ScrollOffset id='projects' />
    <section>
    <Projects/>
    </section>
    <ScrollOffset id='contact' />
    <section className='min-h-screen'>
      <Contact />
    </section>
  </main>
</>
  )
}
