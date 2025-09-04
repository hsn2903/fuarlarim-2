import { getAllBlogs } from "@/app/_actions/blogs";
import React from "react";

const BlogsContainer = async () => {
  const blogs = await getAllBlogs();
  return <div>BlogsContainer</div>;
};

export default BlogsContainer;
