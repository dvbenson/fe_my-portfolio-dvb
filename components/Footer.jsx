import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer({ styles }) {
  return (
    <footer className='bg-[#222222] h-24 font-serif font-semibold text-[#E9E3E6]'>
      <div className='container mx-auto px-4 h-full flex flex-col justify-end'>
        <ul className='flex flex-col justify-center text-center items-center mb-2'>
          <li className='p-2'>
            <div className='flex'>
              <a
                target='_blank'
                href='https://github.com/dvbenson'
                rel='noopener noreferrer'
              >
                <button className={styles.button_circle}>
                  <FontAwesomeIcon icon={faGithubAlt} className={styles.icon} />
                </button>
              </a>

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
            </div>
          </li>
          <li>
            <p className='text-center text-sm'>danielvb@danielvb.dev</p>
          </li>
          <li className=''>
            <p className='text-center text-xs'>© 2023 All Rights Reserved</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
