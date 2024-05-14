import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import axios from "axios";
//import { use } from "../../../../node_server/routes/post";

const Wrapper = styled.div`
  padding: 16px;
  width: calc() (100%-32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function PostWritePage(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addpost = async () => {
    try {
      const response = await axios.post("/post", {
        title: title,
        content: content,
      });
      if (response.status === 200) {
        console.log("성공");
        navigate("/");
        throw new Error("task can not be added");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <TextInput
          height={400}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button
          title="글 작성하기"
          onClick={() => {
            addpost();
          }}
        />
      </Container>
    </Wrapper>
  );
}
export default PostWritePage;
