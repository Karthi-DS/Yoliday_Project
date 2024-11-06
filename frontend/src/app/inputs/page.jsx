import styles from "../homepage.module.css";
import {Portfolio} from "../components/portfolio/Portfolio";


export default function Home() {
  return (
      <div className={styles.container}>
      <Portfolio addInputPage={true}/>
    </div>
    
  );
}
