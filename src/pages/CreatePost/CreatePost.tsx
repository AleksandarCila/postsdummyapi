import { Layout, PostForm, Title } from "../../components";

import { useSubmitCreatePost } from "./hooks";

export const CreatePost = () => {
  const { isLoading, handleCreatePostSubmit } = useSubmitCreatePost();

  return (
    <Layout>
      <Title title="Create a new post" />
      <hr />
      <PostForm onSubmit={handleCreatePostSubmit} isLoading={isLoading} />
    </Layout>
  );
};
