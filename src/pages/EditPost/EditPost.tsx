import { useParams } from "react-router-dom";
import { useUpdatePost } from "../../api";

import { Layout, PostForm, Title } from "../../components";
import { Post } from "../../Models";

export const EditPost = () => {
  const { id } = useParams();

  const { mutate, isLoading, error } = useUpdatePost(id || "");

  const handleEditPostSubmit = (post: Post) => {
    const postCreateData: Post = {
      ...post,
      //@ts-ignore
      tags: post.tags.split(","),
    };

    mutate(postCreateData);
  };

  return (
    <Layout>
      <Title title="Edit post" />
      <hr />
      <PostForm postId={id} onSubmit={handleEditPostSubmit} />
    </Layout>
  );
};
