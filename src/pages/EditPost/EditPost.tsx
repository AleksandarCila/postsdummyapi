import { useParams } from "react-router-dom";

import { useSubmitUpdatePost } from "./hooks";

import { Layout, PostForm, Title } from "../../components";

export const EditPost = () => {
  const { id } = useParams();

  const { isLoading, handleEditPostSubmit } = useSubmitUpdatePost(id);
  return (
    <Layout>
      <Title title="Edit post" />
      <hr />
      <PostForm
        postId={id}
        onSubmit={handleEditPostSubmit}
        isLoading={isLoading}
      />
    </Layout>
  );
};
