import { Inter } from '@next/font/google';
import { Header, Posts, Footer } from '@/components';

import { getPosts } from './api/posts'
import { STEP_POSTS } from '@/utils/constants';

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: any) {
  return (
    <>
      <Header />
      <Posts posts={props.posts}/>
      <Footer />
    </>
  )
};

export const getServerSideProps = async () => {
  const {posts, total} = await getPosts(0, STEP_POSTS);

  return{
    props: {
      posts,
      total
    }
  }
};
