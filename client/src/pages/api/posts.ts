import { sanityClient } from '../../sanity/client';

const getPosts = async (start: number, end: number) => {
  const query = `{
    "posts": *[_type == "posts"] {_id, mainTitle, title, publishedDate, description, body, slug},
    "total": count(*[_type == "posts"])
  }`;
  
  const {posts, total} = await sanityClient.fetch(query);
  
  return {posts, total};
}; 

export { getPosts };