import { useQuery } from "react-query";
import { PostPreview } from "../../Models";
import { fetchDummyApi } from "../fetchDummyApi";

export const usePosts = () => {
  const postsUrl = "https://dummyapi.io/data/v1/post?limit=10";

  return useQuery(["posts"], () => fetchDummyApi<PostPreview[]>(postsUrl));
};
