// 'use client';
import Navbar from './Navbar';
// import styles from '../styles/navbar.module.css';

export default function DefaultLayout({ children, styles, page }) {
  return (
    <div>
      <Navbar styles={styles} page={page} />
      {children}
    </div>
  );
}
