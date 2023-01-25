import { useQuery } from "react-query";
import { fetchDummyApi } from "../fetchDummyApi";
import { List,Comment } from "../../Models";

export const usePostComments = (postId="") => {
  const postUrl = `https://dummyapi.io/data/v1/post/${postId}/comment`;

  return useQuery(["comments",postId], () => fetchDummyApi<List<Comment>>(postUrl));
};
