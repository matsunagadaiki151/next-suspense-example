"use client";

import { postsState } from "@/features/stores/postsState";
import React from "react";
import { useRecoilValue } from "recoil";

const PostList = () => {
  const posts = useRecoilValue(postsState);
  return (
    <ul>
      {posts?.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
};

export default PostList;
