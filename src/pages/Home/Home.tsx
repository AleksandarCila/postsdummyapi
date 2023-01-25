import { useEffect } from "react";
import { usePosts } from "../../api";

import { Layout, Pagination, Title,Spinner } from "../../components";
import { PostPreviewList } from "./components";

import { usePagination } from "./hooks";

export const Home = () => {
  const { currPage, handlePageChanged } = usePagination();
  const { data, error, isLoading, refetch } = usePosts(currPage);

  useEffect(() => {
    refetch();
  }, [currPage, refetch]);

  if (isLoading) return <Spinner/>;

  if (error) return <div>Error</div>;

  return (
    <Layout>
      <Title title={"Latest posts"} />
      <hr />
      <PostPreviewList posts={data?.data} />
      <hr />
      {data && (
        <Pagination
          total={data?.total}
          perPage={data?.limit}
          currPage={currPage}
          onChange={handlePageChanged}
        />
      )}
    </Layout>
  );
};
