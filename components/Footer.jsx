import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer({ styles }) {
  return (
    <footer className='bg-electric-lime h-24 font-serif font-semibold text-black-gray'>
      <div className='container mx-auto px-4 h-full flex flex-col justify-end'>
        <ul className='flex flex-col justify-center text-center items-center'>
          <div className='flex -space-x-8'>
            <li className='p-4'>
              <a
                target='_blank'
                href='https://github.com/dvbenson'
                rel='noopener noreferrer'
              >
                <button className={styles.button_circle}>
                  <FontAwesomeIcon icon={faGithubAlt} className={styles.icon} />
                </button>
              </a>
            </li>

            <li className='p-4'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/danielvictorbenson/'
                rel='noopener noreferrer'
              >
                <button className={styles.button_circle}>
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className={styles.icon}
                  />
                </button>
              </a>
            </li>
          </div>
          <li>
            <p className='text-center text-sm'>danielvb@danielvb.dev</p>
          </li>
          <li>
            <p className='text-center text-xs'>© 2023 All Rights Reserved</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
