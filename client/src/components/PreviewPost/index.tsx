import styles from './index.module.scss';

interface IProps {
  title: string,
  date: string,
  description: string
}

const PreviewPost: React.FC<IProps> = ({ title, date, description }) => {
  return(
    <article className={styles.previewpost}>
      <h2 className={styles.previewpost__title}>{title}</h2>
        <p className={styles.previewpost__date}>{date}</p>
        <p className={styles.previewpost__description}>
          {description}
        </p>
    </article>
  );
};

export { PreviewPost };