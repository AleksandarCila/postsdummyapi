import { useQuery } from "react-query";
import { fetchDummyApi } from "../fetchDummyApi";
import { Post } from "../../Models";

export const usePost = (postId = "") => {
  const postUrl = `https://dummyapi.io/data/v1/post/${postId}`;

  return useQuery(["post", postId], () => fetchDummyApi<Post>(postUrl));
};
