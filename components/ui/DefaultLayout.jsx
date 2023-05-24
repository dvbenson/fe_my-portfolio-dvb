import Navbar from './Navbar';
import Footer from './Footer';

export default function DefaultLayout({ children, styles }) {
  return (
    <div>
      <Navbar styles={styles} />
      {children}
      <Footer styles={styles} />
    </div>
  );
}
