import Layout from '../layout/layout';
import styles from './app.module.scss';


export default function App() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Layout />
      </div>
    </div>
  );
}
