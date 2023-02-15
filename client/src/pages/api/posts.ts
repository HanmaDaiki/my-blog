import { sanityClient } from '../../sanity/client';

const getPosts = async (start: number, end: number) => {
  const query = `{
    "posts": *[_type == "posts"],
    "total": count(*[_type == "posts"])
  }`;
  
  const {posts, total} = await sanityClient.fetch(query);
  
  return {posts, total};
}; 

export { getPosts };