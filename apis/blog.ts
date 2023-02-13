import { BlogData } from '../types/blog';

const sampleBlogsData: BlogData[] = [
  {
    id: '20230101',
    title: 'title1',
    body: 'body1',
  },
  {
    id: '20230102',
    title: 'title2',
    body: 'body2',
  },
];

export async function GetBlog(id: string): Promise<BlogData> {
  // TODO: get from server
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${id}`
  // )
  // const postData: PostData = (await response.json()) as PostData
  // return postData
  return Promise.resolve(sampleBlogsData.find((blog) => blog.id === id) as BlogData);
}

export async function GetBlogs(): Promise<BlogData[]> {
  // TODO: get from server
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
  // const postList: PostData[] = (await response.json()) as PostData[];
  // return postList;
  return Promise.resolve(sampleBlogsData);
}
