import Routers from './Routes';
import styles from './app.module.css'

export const App = () => {  
  return (
    <div
      className={styles.mainBox}
    >
     <Routers />
    </div>
  );
};
