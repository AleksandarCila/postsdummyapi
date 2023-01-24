import { useParams } from "react-router-dom";
import { usePost } from "../../api";

import { Layout } from "../../components";

export const Post = () => {
  const { id } = useParams();

  const {data,error,isLoading} = usePost(id);
  console.log(data)
  return <Layout>Post</Layout>;
};
