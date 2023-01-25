import { useState, useEffect } from "react";

import { useSetDataIfEditPost } from "./useSetDataIfEditPost";

import { getEmptyPost, validateForm, validateFormValue } from "../helpers";

export const usePostData = (postId?: string) => {
  const [postState, setPostState] = useState(getEmptyPost());
  const [error, setError] = useState("");

  useSetDataIfEditPost(postId, setPostState);

  const handlePostDataChange = (key: string, formValue: string) => {
    const { value } = validateFormValue(key, formValue);

    setPostState((prev) => ({ ...prev, [key]: value }));
    setError(error);
  };

  useEffect(() => {
    const { error } = validateForm(postState);
    setError(error);
  }, [postState]);

  return { postState, error, handlePostDataChange };
};
