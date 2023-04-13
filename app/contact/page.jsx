import ContactForm from '@/components/ContactForm';
import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/contact.module.css';

export default function page() {
  return (
    <DefaultLayout styles={styles} page={'contact'}>
      <main className='min-h-screen bg-pink'>
        <section>
          <div className='container mx-auto px-4 md:px-0'>
            <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-electric-lime pb-2'>
              <div className='flex flex-nowrap items-center justify-center'>
                <p className='text-gray text-lg mr-48 sm:mr-72 whitespace-nowrap'>
                  Reach out
                </p>
              </div>
              <div className='flex flex-nowrap items-center justify-center w-full'>
                <h1 className='text-black text-6xl sm:text-7xl'>
                  Contact<span className='text-white'>.</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='flex flex-col justify-center items-center mt-8 bg-white'>
            <div className=' rounded-full p-2 bg-gray w-40 h-12 text-center flex justify-center items-center'>
              <h1 className='text-2xl xl:text-6xl'>Get in touch:</h1>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
