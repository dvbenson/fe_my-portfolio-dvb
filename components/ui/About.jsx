import ImageFrame from "../ImageFrame";

export default function About() {
  return (
    <>
     <div className='mx-auto px-8 w-full'>
        <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-[#444545] pb-2'>
          <div className='flex items-center justify-center'>
            <p className='text-[#EDE7E3] xxs:text-sm sm:text-base xxs:mr-48 mr-64 sm:mr-72 font-heading'>It's all</p>
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
            <h1 className='text-electric-lime xxs:text-5xl xs:text-6xl sm:text-7xl font-heading'>
              About Me<span className='text-[#E9E3E6]'>.</span>
            </h1>
          </div>
        </div>
      </div>

      <section className=''>
        <div className='mx-auto px-4'>
          <div className='mx-auto px-4 w-full flex flex-col mt-16 gap-5 md:gap-24'>
            <div
              id='img-text block 1'
              className='mx-auto px-4 flex flex-col gap-5 md:flex-row justify-center items-center '
            >
              <div className='flex justify-center items-center md:w-1/2 mb-16 sm:mb-32 md:mb-16'>
                <ImageFrame
                  src={'/images/cooking.png'}
                  alt={'cooking picture'}
                  height={400}
                  width={550}
                  priority={true}
                  className='sm:w-[350px] sm:h-[200px] grid grid-cols-1 place-items-center'
                  
                />
              </div>
              <div className='grid grid-cols-1 gap-4  md:w-1/2'>
                <h2 className='text-purple text-3xl lg:text-4xl xl:text-5xl font-heading'>
                  Get to know me.
                </h2>
                <p className='text-[#E9E3E6] font-serif text-base md:text-lg  xl:text-xl font-sans'>
                  Co-dependant on my white board and post-it notes long
                  before the coding bug bit. Building things has always been
                  my go-to, a golden thread of sorts, one that has clicked
                  into place since I first opened up my terminal.
                </p>
                <p className='text-[#E9E3E6] font-sans text-base md:text-lg  xl:text-xl'>
                  My teenage years were a lot of playing World of Warcraft
                  whilst making snazzy forum signatures. Before then and
                  onwards, I’m a creative person - drawing, illustrating,
                  doodling for endless hours.
                </p>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
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
              className=' mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-5'
            >
              <div className='flex justify-center items-center md:order-2 md:w-1/2 my-16 sm:mb-32 md:mb-16'>
                <ImageFrame
                  src={'/images/coding.png'}
                  alt={'coding picture'}
                  height={400}
                  width={550}
                  priority={true}
                  className='sm:w-[350px] sm:h-[200px] grid grid-cols-1 place-items-center'
                  variant=''
                />
              </div>
              <div className='grid grid-cols-1 gap-4 md:order-1 md:w-1/2'>
                <h2 className='text-purple text-3xl lg:text-4xl xl:text-5xl font-heading'>
                  Experience.
                </h2>

                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                  As a career-changer and a recent Northcoder bootcamp
                  graduate, my journey to become a web developer has taken a
                  route consisting of self-taught fundamentals, almost 500
                  coding hours over 13 weeks and countless days and nights
                  of self-learning.
                </p>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                  Over a decade of professional experience has led me from
                  civil engineering, to education and a few trips into
                  user-centred service.
                </p>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                  Fortunately, across that time I’ve garnered a toolset that
                  has positioned me uniquely into the flows of understanding
                  Agile methodologies, having worked in industries that
                  follow similar iterative approaches.
                </p>
              </div>
            </div>
            <div
              id='Image-text block 3'
              className='mx-auto px-4 flex flex-col gap-5 md:flex-row justify-center items-center  md:mb-16 2xl:mb-24'
            >
              <div className='flex justify-center items-center md:w-1/2 my-16 sm:mb-32 md:mb-16'>
                <ImageFrame
                  src={'/images/drawing.png'}
                  alt={'drawing picture'}
                  height={400}
                  width={550}
                  priority={true}
                  className='sm:w-[350px] sm:h-[200px] grid grid-cols-1 place-items-center'
                  variant=''
                />
              </div>
              <div className='grid grid-cols-1  gap-4 md:w-1/2'>
                <h2 className='text-purple text-3xl lg:text-4xl xl:text-5xl font-heading'>
                  Skills.
                </h2>

                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                  My training in PERN has equipped me with the knowledge of
                  full stack development and the ability, confidence and
                  motivation to work alone, creating effective, viable
                  products with the latest technologies.
                </p>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                  I am able to take a product through its entire lifecycle.
                  Whether that's confidently building a backend REST API in
                  Node, routing with Express or creating frontend components
                  in React or Next.js.
                </p>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                  I have particular interest in UI/UX design, building solid
                  knowledge in design practices and prototyping using Figma
                  and Framer, and styling with vanilla CSS or Tailwind to
                  develop mobile-first, accessible and responsive products.
                </p>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                  This is all fuel in the engine as I follow my trajectory
                  into web development, being open and actively pursuing
                  roles that are full stack or front end in the react
                  universe.
                </p>
              </div>
            </div>
            <div
              id='Image-text block 4'
              className='mx-auto px-4 flex flex-col gap-5 md:flex-row justify-center items-center mt-16 md:mt-0'
            >
              <div className='flex justify-center items-center md:order-2 md:w-1/2 mb-16 sm:mb-32 md:mb-16'>
                <ImageFrame
                  src={'/images/error.png'}
                  alt={'error picture'}
                  height={400}
                  width={550}
                  priority={true}
                  className='sm:min-w-[350px] sm:h-[200px] grid grid-cols-1 place-items-center'
                  variant=''
                />
              </div>
              <div className='grid grid-cols-1 gap-4 md:order-1 md:w-1/2'>
                <h2 className='text-purple text-3xl text-center md:-4xl lg:text-4xl xl:text-5xl font-heading'>
                  Stack.
                </h2>
                <ul className='text-[#E9E3E6] font-sans  text-center text-base md:text-lg  xl:text-xl'>
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
