import Navbar from './Navbar';

export default function DefaultLayout({ children, styles, page }) {
  return (
    <div>
      <Navbar styles={styles} page={page} />
      {children}
    </div>
  );
}
