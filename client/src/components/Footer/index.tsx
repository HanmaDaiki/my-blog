import Link from 'next/link';
import styles from './index.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
      <section className={styles.footer__about}>
        <h2 className={styles.footer__title}>Обо мне</h2>
        <p className={styles.footer__text}>
          Я родился и живу в Москве, учился в РГАУ МСХА им. Тимирязева на
          факультете экономики по направлению подготовки - Информационные системы
          и технологии. Главное увлечение - компьютеры: их сборка и
          программирование. До веб-разработки учил такие языки, как Python и R.
          Хорошо освоил PyQt5, немного изучал в университете библиотеки Python
          для статистики, анализа данных и машинного обучения. Итогом стало
          увлечение дизайном, а в последствие создание сайтов.  
        </p>
      </section>

      <section className={styles.footer__social}>
        <h2 className={styles.footer__title}>Социальные сети</h2>
        <ul className={styles.footer__icons}>
          <li><Link href='/' className={styles.footer__icon + ' ' + styles.footer__icon_type_git}></Link></li>
          <li><Link href='/' className={styles.footer__icon + ' ' + styles.footer__icon_type_mail}></Link></li>
          <li><Link href='/' className={styles.footer__icon + ' ' + styles.footer__icon_type_telegram}></Link></li>
        </ul>
        <Link  className={styles.footer__buymecoffee} href='/'>Купить мне кофе</Link>
      </section>
      </div>
    </footer>
  );
};

export { Footer };
