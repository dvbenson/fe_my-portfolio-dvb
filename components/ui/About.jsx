import ImageFrame from "../ImageFrame";
import Header from "../Header";

export default function About() {
  return (
    <>
      <Header tag={`It's all`} title={'About Me'} />
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
                  how I learn best, a golden thread in life. 
                </p>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                  I fell into learning and studying modern foreign languages, which satiated a need and curiosity to understand the world around me. 
                  Travelling and living abroad was a way to experience the world and learn how things work outside of my sphere of understanding.
                </p>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                When not in front of a screen, I can be found in the kitchen, baking or cooking, or keeping on-top of my fitness to combat cookie consumption. Generally tinkering or fiddling with something. Have been known to make hot sauce.
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
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl '>
                  Over a decade of professional experience in:
                </p>
                <ul className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl list-none'>
                  <li> ✅  Project Management</li>
                  <li> ✅  Product Management</li>
                  <li> ✅  Business Development</li>
                  <li> ✅  User-centred Service</li>
                  <li> ✅  Team and Line Management</li>
                </ul>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                My skills and experience have been honed in the fast-paced, ever-changing world of service and product development.
                This has given me a unique perspective on how to approach problems and find solutions. 
                </p>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                I can position myself in the shoes of the user, the business and the team to design and build products that are viable, feasible and desirable.
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
                  My training in PERN has equipped me the experience to created effective, viable
                  products with the latest technologies. I am able to take a product through its entire lifecycle.
                </p>
                
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                  I have particular interest in UI/UX design and frontend development, building solid
                  knowledge in design practices and prototyping using Figma, and styling with vanilla CSS or Tailwind to
                  develop mobile-first, accessible and responsive products.
                </p>
                <p className='text-[#E9E3E6] font-sans  text-base md:text-lg  xl:text-xl'>
                  This is all fuel in the engine as I follow my trajectory
                  into web development, being open and actively pursuing
                  roles that are full stack or front end in the react
                  ecosystem.
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
                  className='sm:min-w-[350px] sm:max-w-[350px] sm:h-[200px] grid grid-cols-1 place-items-center'
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
                  <li> Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}
