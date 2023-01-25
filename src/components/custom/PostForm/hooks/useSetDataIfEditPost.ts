import { useEffect } from "react";

import { usePost } from "./../../../../api/posts/usePost";

import { Post } from "../../../../Models";

export const useSetDataIfEditPost = (
  postId: string | undefined,
  setPostState: React.Dispatch<React.SetStateAction<Post>>
) => {
  const { data, isLoading, error } = usePost(postId);
  
  useEffect(() => {
    if (!isLoading && data && !error && postId) {
      setPostState(data);
    }
  }, [data, isLoading, setPostState, error, postId]);
};
