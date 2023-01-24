import { useParams } from "react-router-dom";
import { usePost } from "../../api";

import { Layout, PostDisplay } from "../../components";

export const Post = () => {
  const { id } = useParams();

  const { data, error, isLoading } = usePost(id);
  
  return (
    <Layout>{data ? <PostDisplay post={data} /> : <div>Not Found</div>}</Layout>
  );
};
