import React from "react";
import ErrorMessage from "../../../components/UI/ErrorMessage";
import Row from "../../../components/UI/Row";
import Title from "../../../components/UI/Title";
import Post from "./Post";

const Blog = ({ posts }) => {
  const lastPost = {
    title: "Это все на сегодня ✅",
    body: "Проверьте позже...",
    lastPost: true,
  };

  return (
    <div>
      <Title size={2}>📝 Ежедневыне новости</Title>
      <Row flexWrap="wrap" justifyContent="flex-start" alignItems="stretch" margin="-10px 0 0 0">
        {posts?.length && posts.map((post, i) => <Post key={i} post={post} />)}
        {posts?.length && <Post post={lastPost} />}
        {!posts?.length && <ErrorMessage>Упс, что-то пошло не так</ErrorMessage>}
      </Row>
    </div>
  );
};
export default Blog;
