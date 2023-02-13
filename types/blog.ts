export interface BlogData {
  id: string;
  title: string;
  body: string;
}

export interface BlogDataProps {
  blog: BlogData;
}

export interface BlogDataListProps {
  blogs: BlogData[];
}
