import React from "react";
import styled from "styled-components";

import Card from "../../../components/UI/Card";
import Chip from "../../../components/UI/Chip";
import Title from "../../../components/UI/Title";

const Post = ({ post }) => {
  const categories = post?.categories?.split("|").slice(0, 3);
  const title = post?.title?.substr(0, 70);
  const body = post?.body?.substr(0, 95) + " ...";
  return (
    <StyledPost>
      <Card className={`${post.lastPost && "post-last"} post`}>
        <div className="info">
          {categories?.map((category, i) => (
            <Chip key={i} className="info-chip">
              {category}
            </Chip>
          ))}
        </div>
        <Title size={5} className="title">
          {post?.imageurl && <img src={post?.imageurl} alt={post?.title} />}
          {title}
        </Title>
        <p dangerouslySetInnerHTML={{ __html: body }}></p>
        <div className="footer">
          <a href={post?.guid} target="_blank" rel="noreferrer">
            {post?.guid && "Read More"}
          </a>
        </div>
      </Card>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  margin: 10px;
  width: calc(33.3% - 20px);
  height: 100%;

  &:nth-child(4n) {
    width: calc(66.6% - 20px);
  }
  &:nth-child(6n) {
    width: calc(100% - 20px);
  }

  @media (max-width: 730px) {
    width: calc(50% - 20px);

    &:nth-child(4n) {
      width: calc(50% - 20px);
    }
    &:nth-child(6n) {
      width: calc(50% - 20px);
    }
    &:nth-child(7n-4) {
      width: calc(100% - 20px);
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 10px 0 10px 0;
    &:nth-child(4n),
    &:nth-child(6n),
    &:nth-child(7n-4) {
      width: 100%;
    }
  }

  .post {
    min-height: 196px;
    height: 100%;
    height: max-content;
    overflow: hidden;
    transition: 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    h5 {
      font-weight: 400;
    }
    p {
      font-weight: 300;
    }
    &-last {
      align-items: center;
      justify-content: center;
      h5 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    &:hover {
      filter: brightness(105%);
    }
    .info {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &-chip {
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .title {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;

        @media (max-width: 730px) {
          display: none;
        }
        @media (max-width: 430px) {
          display: block;
        }
      }
    }
    p {
      color: var(--text-gray);
      margin-bottom: 20px;
      height: 52px;
      overflow: hidden;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      margin-top: auto;
      a {
        color: var(--blue);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        &:visited {
          color: var(--text-gray);
        }
      }
    }
  }
`;

export default Post;
