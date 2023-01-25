import { usePostCreate } from "../../api";

import { Layout, PostForm, Title } from "../../components";

import { Post, PostCreate } from "../../Models";

export const CreatePost = () => {
  const { mutate, isLoading, error } = usePostCreate();

  const handleCreatePostSubmit = (post: Post) => {
    const postCreateData:PostCreate = {
      text: post.text,
      image: post.image,
      likes: post.likes,
      //@ts-ignore
      tags: post.tags.split(','),
      owner: "60d0fe4f5311236168a109f6",
    };

    mutate(postCreateData);
  };

  return (
    <Layout>
      <Title title="Create a new post" />
      <hr />
      <PostForm onSubmit={handleCreatePostSubmit}/>
    </Layout>
  );
};
