import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { usePostCreate } from '../../../api';

import { PostCreate,Post } from '../../../Models';

export const useSubmitCreatePost = () => {
  const navigate = useNavigate();

  const { mutate, isLoading, error, isSuccess } = usePostCreate();

  const handleCreatePostSubmit = (post: Post) => {
    const postCreateData: PostCreate = {
      text: post.text,
      image: post.image,
      likes: post.likes,
      tags: post.tags[0].length > 0 ? post.tags[0].split(",") : [],
      owner: "60d0fe4f5311236168a109f6",
    };

    mutate(postCreateData);
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Post created successfully!");
      navigate("/");
    }
    if (error) alert(error);
  }, [navigate, error, isSuccess]);

  return {isLoading, handleCreatePostSubmit}
};
