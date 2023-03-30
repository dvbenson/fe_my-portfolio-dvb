import Navbar from './Navbar';
export default function Home() {
  return (
    <>
      <Navbar />
      <section className='ml-24 mt-72'>
        <p className='subpixel-antialiased text-8xl  text-electric-lime tracking-normal'>
          <span className='underline underline-offset-8'>Daniel Benson</span>
          <br />
          Software Developer
          <span className='text-white'>.</span>
          <br />
          Full Stack
          <span className='text-white'>.</span>
          <br />
        </p>
      </section>
    </>
  );
}
