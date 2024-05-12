import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function PostList(props) {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.length > 0 ? (
        posts.map((post, index) => {
          return (
            <PostListItem
              key={post.id}
              post={post}
              onClick={() => {
                onClickItem(post);
              }}
            />
          );
        })
      ) : (
        <h2>There is no post to show</h2>
      )}
    </Wrapper>
  );
}

export default PostList;
