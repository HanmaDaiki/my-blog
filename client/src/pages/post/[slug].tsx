import { Footer, Header } from '@/components';
import { sanityClient } from '@/sanity/client';

import styles from './index.module.scss';

const Post: React.FC = ({ post }: any) => {
  const myPost = post[0];
  console.log(myPost);
  
  
  return(
    <>
      <Header />
      <main>
        <div className={styles.container}>
        <h1 className={styles.previewpost__title}>{myPost.title}</h1>
        {myPost.body.map((item: any) => {
          return <item.style key={item._key}>{item.children[0].text}</item.style>
        })}
        </div>
      </main>
      <Footer />
    </>
    );
};

export default Post;

export async function getStaticPaths() {
  const query =  `*[type == "posts"] {
    slug {
      current
    }
  }`;
  
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: any) => {
    params: {
      slug: post.slug.current
    }
  });

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params: { slug }}: any) {
  const query = `*[_type == "posts" && slug.current == '${slug}']`

  const post = await sanityClient.fetch(query);
  
  return {
    props: {
      post
    }
  }
}