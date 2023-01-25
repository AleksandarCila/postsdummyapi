import { Layout, PostForm, Title } from "../../components";

export const CreatePost = () => {
  return (
    <Layout>
      <Title title="Create a new post" />
      <hr/>
      <PostForm />
    </Layout>
  );
};
