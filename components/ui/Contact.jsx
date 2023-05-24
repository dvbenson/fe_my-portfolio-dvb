import ContactForm from '../ContactForm';

export default function Contact() {
  return (
    <>
    <div className='container mx-auto px-4 md:px-0 w-[380px] sm:w-[620px] md:w-[748px] lg:w-[1000px] xl:w-[1200px]'>
        <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-[#444545] pb-2'>
          <div className=''>
            <p className='text-[#EDE7E3] text-lg ml-4 mr-48 sm:mr-72 whitespace-nowrap'>
              Reach out
            </p>
          </div>
          <div
            className=''
            style={{
              background:
                'linear-gradient(to right, #CCFF00, #FFEA20 55%, #FF7A18)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <h1 className='text-[#000500] text-6xl sm:text-7xl'>
              Contact<span className='text-electric-lime'>.</span>
            </h1>
          </div>
        </div>
      </div>
      <ContactForm />
      </>
  )
}
