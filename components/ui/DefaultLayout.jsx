import Navbar from './Navbar';
import Footer from './Footer';

export default function DefaultLayout({ children, styles }) {
  return (
      <>
      <Navbar styles={styles} />
      {children}
      <Footer styles={styles} />
   </>
  );
}
