import { useQuery } from "react-query";
import { PostPreview,List } from "../../Models";
import { fetchDummyApi } from "../fetchDummyApi";

export const usePosts = (page=0) => {
  const postsUrl = `https://dummyapi.io/data/v1/post?limit=10&page=${page}`;

  return useQuery(["posts",page], () => fetchDummyApi<List<PostPreview>>(postsUrl));
};
