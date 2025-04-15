import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { BlogData, BlogDataListProps } from '../../types/blog';
import Layout from '../../layouts/Content';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetBlogs } from '../../apis/blog';

export const getStaticProps: GetStaticProps = async (_context) => {
  // fetch list of posts
  const blogs: BlogData[] = await GetBlogs();
  return {
    props: {
      blogs,
    },
  };
};

const IndexPage: NextPage<BlogDataListProps> = ({ blogs }: BlogDataListProps) => {
  const router = useRouter();
  return (
    <Layout>
      {blogs.map((blog) => (
        <div
          className="flex flex-col items-center justify-center mt-6 cursor-pointer"
          key={blog.id}></div>
      ))}
    </Layout>
  );
};

export default IndexPage;
