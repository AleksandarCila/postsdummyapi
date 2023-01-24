import React from "react";

import { Layout, Title } from "../../components";

import { usePosts } from "../../api";
import { PostPreviewList } from "./components";

export const Home = () => {
  const { data, error, isLoading } = usePosts();
  console.log(data);

  if(isLoading) return <div>Loading...</div>

  if(error) return <div>Error</div>

  return (
    <Layout>
      <Title title={"Latest posts"} />
      <hr />
      <PostPreviewList posts={data?.data} />
    </Layout>
  );
};
