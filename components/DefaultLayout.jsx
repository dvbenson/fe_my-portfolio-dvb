import Navbar from './Navbar';
// import styles from '../styles/navbar.module.css';

export default function DefaultLayout({ children, styles, logo }) {
  return (
    <div>
      <Navbar styles={styles} logo={logo} />
      {children}
    </div>
  );
}
