import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";
const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  const [postList, setPostList] = useState([]);
  const getPosts = async () => {
    const response = await axios.get("/post");

    setPostList(response.data.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <BrowserRouter>
      <MainTitleText>BLOG</MainTitleText>
      <Routes>
        <Route index element={<MainPage postList={postList} />} />
        <Route path="post/:postId" element={<PostViewPage />} />
        <Route path="post-write" element={<PostWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
