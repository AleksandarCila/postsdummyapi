import React from "react";

import { Layout } from "../../components";

import { usePosts } from "../../api";

export const Home = () => {
  const { data, error, isLoading } = usePosts();
  console.log(data)
  return <Layout>Home</Layout>;
};
