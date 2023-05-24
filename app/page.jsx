import DefaultLayout from '../components/ui/DefaultLayout';
import Main from '../components/ui/Main';
import styles from '../styles/home.module.css';

export default function Home() {
  
  return (
    <DefaultLayout styles={styles}>
      <Main styles={styles}/>
    </DefaultLayout>
  );
}
