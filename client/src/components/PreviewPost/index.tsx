import { ISlug } from '@/interface/ISlug';
import Link from 'next/link';

import styles from './index.module.scss';

interface IProps {
  title: string,
  date: string,
  description: string,
  slug: ISlug,
}

const PreviewPost: React.FC<IProps> = ({ title, date, description, slug }) => {
  return(
    <article className={styles.previewpost}>
      <Link className={styles.previewpost__link} href={`/post/${encodeURIComponent(slug.current)}`}><h2 className={styles.previewpost__title}>{title}</h2></Link>
      <p className={styles.previewpost__date}>{date}</p>
      <p className={styles.previewpost__description}>
        {description}
      </p>
    </article>
  );
};

export { PreviewPost };