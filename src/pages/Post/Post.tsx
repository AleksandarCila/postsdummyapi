import { useParams } from "react-router-dom";
import { usePost } from "../../api";

import { Layout, PostDisplay, Spinner } from "../../components";

export const Post = () => {
  const { id } = useParams();

  const { data, error, isLoading } = usePost(id);

  if (isLoading) return <Spinner />;

  if (error) return <div>Error</div>;

  return (
    <Layout>{data ? <PostDisplay post={data} /> : <div>Not Found</div>}</Layout>
  );
};
