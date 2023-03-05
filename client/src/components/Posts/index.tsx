import { PreviewPost } from '../';
import { IPost } from '@/interface/IPost';

import styles from './index.module.scss';

interface IProps { 
  posts: Array<IPost>,
}

const Posts: React.FC<IProps> = ({ posts }) => {
  return(
    <div className={styles.posts}>
      {
        posts.map((post) => {
          return <div key={post._id}><PreviewPost title={post.mainTitle} date={post.publishedDate} description={post.description} slug={post.slug}/></div>
        })
      }
    </div>
  );
}

export { Posts };