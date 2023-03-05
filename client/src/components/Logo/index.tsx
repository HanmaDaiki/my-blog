import Link from 'next/link';
import styles from './index.module.scss';

const Logo: React.FC = () => {
  return(
    <Link href='/'>
    <div className={styles.logo}></div>
    </Link>
  );
};

export { Logo };