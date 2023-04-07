import Navbar from './Navbar';
// import Footer from './Footer';

export default function DefaultLayout({ children, styles, page }) {
  return (
    <div>
      <Navbar styles={styles} page={page} />
      {children}
      {/* <Footer styles={styles} page={page} /> */}
    </div>
  );
}
