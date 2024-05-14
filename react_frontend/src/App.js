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
  return (
    <BrowserRouter>
      <MainTitleText>BLOG</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
        <Route path="post-write" element={<PostWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
