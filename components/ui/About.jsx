export default function About() {
  return (
    <>
     <div className='container mx-auto px-4 md:px-0 w-[380px] sm:w-[620px] md:w-[748px] lg:w-[1000px] xl:w-[1200px]'>
        <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-[#444545] pb-2'>
          <div className='flex items-center justify-center'>
            <p className='text-[#EDE7E3] mr-64 sm:mr-72'>It's all</p>
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
            <h1 className='text-electric-lime text-6xl sm:text-7xl'>
              About Me<span className='text-[#E9E3E6]'>.</span>
            </h1>
          </div>
        </div>
      </div>

      <section>
        <div className='container mx-auto px-4 flex flex-col'>
          <div className='container mx-auto px-4 w-full flex flex-col mt-16 gap-5 md:gap-24'>
            <div
              id='img-text block 1'
              className='container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-x-20'
            >
              <div className='flex justify-center items-center'>
                <img
                  src='/assets/food_cartoon.svg'
                  alt='about'
                  className='w-full h-full object-contain'
                />
              </div>
              <div className='flex flex-col gap-4 min-[480px]:w-[400px] min-[480px]:h-[280px]'>
                <h2 className='text-purple text-3xl lg:text-4xl xl:text-5xl'>
                  Get to know me.
                </h2>
                <p className='text-[#E9E3E6] font-serif font-medium text-base md:text-lg  xl:text-xl'>
                  Co-dependant on my white board and post-it notes long
                  before the coding bug bit. Building things has always been
                  my go-to, a golden thread of sorts, one that has clicked
                  into place since I first opened up my terminal.
                </p>
                <p className='text-[#E9E3E6] font-serif font-medium text-base md:text-lg  xl:text-xl'>
                  My teenage years were a lot of playing World of Warcraft
                  whilst making snazzy forum signatures. Before then and
                  onwards, I’m a creative person - drawing, illustrating,
                  doodling for endless hours.
                </p>
                <p className='text-[#E9E3E6] font-serif font-medium text-base md:text-lg  xl:text-xl'>
                  That curiosity to create and need to make also fuels my
                  love to learn, leading me to travel and learn languages. I
                  love to cook and bake. I keep on top of my fitness to
                  combat cookie consumption and I’m generally tinkering or
                  fiddling with something.
                </p>
              </div>
            </div>
            <div
              id='img-text block 2'
              className='container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-x-20'
            >
              <div className='flex justify-center items-center md:order-2'>
                <img
                  src='/assets/coding_cartoon.svg'
                  alt='about'
                  className='w-full h-full object-contain '
                />
              </div>
              <div className='flex flex-col  gap-4 min-[480px]:w-[400px] min-[480px]:h-[280px] md:order-1'>
                <h2 className='text-purple text-3xl lg:text-4xl xl:text-5xl'>
                  Experience.
                </h2>

                <p className='text-[#E9E3E6] font-serif font-medium text-base md:text-lg  xl:text-xl'>
                  As a career-changer and a recent Northcoder bootcamp
                  graduate, my journey to become a web developer has taken a
                  route consisting of self-taught fundamentals, almost 500
                  coding hours over 13 weeks and countless days and nights
                  of self-learning.
                </p>
                <p className='text-[#E9E3E6] font-serif font-medium text-base md:text-lg  xl:text-xl'>
                  Over a decade of professional experience has led me from
                  civil engineering, to education and a few trips into
                  user-centred service.
                </p>
                <p className='text-[#E9E3E6] font-serif font-medium text-base md:text-lg  xl:text-xl'>
                  Fortunately, across that time I’ve garnered a toolset that
                  has positioned me uniquely into the flows of understanding
                  Agile methodologies, having worked in industries that
                  follow similar iterative approaches.
                </p>
              </div>
            </div>
            <div
              id='img-text block 3'
              className='container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-x-20 md:mb-16 2xl:mb-24'
            >
              <div className='flex justify-center items-center'>
                <img
                  src='/assets/draw_cartoon.svg'
                  alt='about'
                  className='w-full h-full object-contain'
                />
              </div>
              <div className='flex flex-col  gap-4 min-[480px]:w-[400px] min-[480px]:h-[280px]'>
                <h2 className='text-purple text-3xl lg:text-4xl xl:text-5xl'>
                  Skills.
                </h2>

                <p className='text-[#E9E3E6] font-serif font-medium text-base md:text-lg  xl:text-xl'>
                  My training in PERN has equipped me with the knowledge of
                  full stack development and the ability, confidence and
                  motivation to work alone, creating effective, viable
                  products with the latest technologies.
                </p>
                <p className='text-[#E9E3E6] font-serif font-medium text-base md:text-lg  xl:text-xl'>
                  I am able to take a product through its entire lifecycle.
                  Whether that's confidently building a backend REST API in
                  Node, routing with Express or creating frontend components
                  in React or Next.js.
                </p>
                <p className='text-[#E9E3E6] font-serif font-medium text-base md:text-lg  xl:text-xl'>
                  I have particular interest in UI/UX design, building solid
                  knowledge in design practices and prototyping using Figma
                  and Framer, and styling with vanilla CSS or Tailwind to
                  develop mobile-first, accessible and responsive products.
                </p>
                <p className='text-[#E9E3E6] font-serif font-medium text-base md:text-lg  xl:text-xl'>
                  This is all fuel in the engine as I follow my trajectory
                  into web development, being open and actively pursuing
                  roles that are full stack or front end in the react
                  universe.
                </p>
              </div>
            </div>
            <div
              id='img-text block 4'
              className='container mx-auto px-4 flex flex-col md:flex-row justify-center items-center mt-16 md:mt-0 gap-x-20 xl:gap-x-56'
            >
              <div className='flex justify-center items-center md:order-2'>
                <img
                  src='/assets/error_cartoon.svg'
                  alt='about'
                  className='w-full h-full object-contain max-[640px]:mb-8'
                />
              </div>
              <div className='flex flex-col gap-4 min-[480px]:w-[400px] min-[480px]:h-[280px] md:order-1'>
                <h2 className='text-purple text-3xl text-center md:-4xl lg:text-4xl xl:text-5xl'>
                  Stack.
                </h2>

                <ul className='text-[#E9E3E6] font-serif font-medium text-center text-base md:text-lg  xl:text-xl'>
                  <li> JavaScript, TypeScript</li>
                  <li> React, Next.js</li>
                  <li>React Native</li>
                  <li> Node.js, Express.js</li>
                  <li> Postgres, SQL</li>
                  <li> Tailwind, Bootstrap</li>
                  <li> Figma, Framer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}
