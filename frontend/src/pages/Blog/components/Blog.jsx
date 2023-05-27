import React from "react";
import ErrorMessage from "../../../components/UI/ErrorMessage";
import Row from "../../../components/UI/Row";
import Title from "../../../components/UI/Title";
import Post from "./Post";

const Blog = ({ posts }) => {
  const lastPost = {
    title: "That is all for today ✅",
    body: "Check out the blog later...",
    lastPost: true,
  };

  return (
    <div>
      <Title size={2}>📝 Daily feed</Title>
      <Row flexWrap="wrap" justifyContent="flex-start" alignItems="stretch" margin="-10px 0 0 0">
        {posts?.length && posts.map((post, i) => <Post key={i} post={post} />)}
        {posts?.length && <Post post={lastPost} />}
        {!posts?.length && <ErrorMessage>Ops, something went wrong</ErrorMessage>}
      </Row>
    </div>
  );
};
export default Blog;
