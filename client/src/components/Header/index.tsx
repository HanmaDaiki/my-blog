import { Logo } from '../';
import styles from './index.module.scss';

const Header: React.FC = () => {
  return(
    <header className={styles.header}>
      <Logo />
    </header>
  );
}

export { Header };