import Button from '../Button';
import NavItem from '../NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function SideNavBar({ menuOpen, setMenuOpen, handleNav}) {
  return (
    <div
    className={
      menuOpen
        ? `fixed left-0 top-0 w-[65%] sm:w-[30%] lg:hidden h-screen p-10 sm:p-30 ease-in duration-250 z-50 bg-[#222222]`
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
    }
  >
    <div className='flex w-full justify-end items-center'>
      <div onClick={handleNav} className='cursor-pointer'>
        <FontAwesomeIcon icon={faXmark} size='xl' />
      </div>
    </div>
    <div className='flex-col py-4'>
      <ul>
            <NavItem label={<Button label={'Home'} variant={'primary'}/>} href={'#home'} className='py-4 cursor-pointer' onClick={() => setMenuOpen(false)} />
            <NavItem label={<Button label={'About'} variant={'primary'}/>} href={'#about'} className='py-4 cursor-pointer' onClick={() => setMenuOpen(false)} />
            <NavItem label={<Button label={'Projects'} variant={'primary'}/>} href={'#projects'} className='py-4 cursor-pointer' onClick={() => setMenuOpen(false)} />
            <NavItem label={<Button label={'Contact'} variant={'primary'}/>} href={'#contact'} className='py-4 cursor-pointer' onClick={() => setMenuOpen(false)} />
            <NavItem 
                label={<Button label={<FontAwesomeIcon icon={faGithubAlt}/>} variant={'secondary'}/>}  target='_blank'
                href='https://github.com/dvbenson'
                rel='noopener noreferrer'
                className='py-4 cursor-pointer'
            />
            <NavItem label={ <Button variant={'secondary'} label={ <FontAwesomeIcon icon={faLinkedinIn}/>}/>} 
                target='_blank'
                href='https://www.linkedin.com/in/dvbenson/'
                rel='noopener noreferrer'
                className='py-4 cursor-pointer'
            />
      </ul>
    </div>
  </div>
  )
}
