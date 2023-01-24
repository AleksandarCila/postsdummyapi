import React from "react";

import { usePosts } from "../../api";

export const Home = () => {
  const { data, error, isLoading } = usePosts();
  console.log(data)
  return <div>Home</div>;
};
