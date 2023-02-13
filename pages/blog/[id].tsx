import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { BlogData, BlogDataProps } from '../../types/blog';
import { GetBlogs, GetBlog } from '../../apis/blog';
import Content from '../../layouts/Content';

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const blogs: BlogData[] = await GetBlogs();
  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          id: blog.id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogDataProps, Params> = async (context) => {
  const { id } = context.params! as Params;
  const blog: BlogData = await GetBlog(id);
  return {
    props: {
      blog,
    },
  };
};

const Post: NextPage<BlogDataProps> = ({ blog }: BlogDataProps) => {
  return (
    <Content>
      <h1>{blog.title}</h1>

      <p>{blog.body}</p>
    </Content>
  );
};

export default Post;
