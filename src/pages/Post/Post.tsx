import { useParams } from "react-router-dom";
import { usePost } from "../../api";

import { Layout, PostDisplay, FetchingDataState } from "../../components";

export const Post = () => {
  const { id } = useParams();

  const { data, error, isLoading } = usePost(id);

  return (
    <Layout>
      <FetchingDataState isLoading={isLoading} error={error}>
        {data ? <PostDisplay post={data} /> : <div>Not Found</div>}
      </FetchingDataState>
    </Layout>
  );
};
