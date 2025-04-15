import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { BlogData, BlogDataListProps } from '../types/blog';
import { GetBlogs } from '../apis/blog';
import Layout from '../layouts/Content';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
      {/* Profile */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
      </div>
      <div>
        <div className="container mx-auto max-w-xl overflow-hidden my-2">
          <div>
            <p className="text-lg font-bold text-center">Seiichi Arai</p>
            <div className="mx-4 my-2">
              <p>1988 Born in Japan</p>
              <p>2088 Dead in Japan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Recent Blogs</h2>
      </div>
      <div>
        {blogs.map((blog) => (
          <div
            className="flex flex-col items-center justify-center mt-6 cursor-pointer"
            key={blog.id}>
            <Link href="blog/[id]" as={`blog/${blog.id}`}>
              <div className="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-gray-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div className="flex items-center justify-between px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-700 mr-2">{blog.title}</h3>
                  <span className="block text-gray-600 font-light text-sm ml-2">
                    {blog.id.slice(0, 4)}/{blog.id.slice(4, 6)}/{blog.id.slice(6)}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="flex items-center justify-center mt-12">
          <button
            className="flex items-center text-gray-600 hover:underline hover:text-gray-500"
            onClick={() => router.push('/blog')}>
            <span>View More</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
