import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useUpdatePost } from '../../../api';

import { Post } from '../../../Models';

export const useSubmitUpdatePost = (id:string | undefined) => {
  const navigate = useNavigate();

  const { mutate, isLoading, error, isSuccess } = useUpdatePost(id || "");


  const handleEditPostSubmit = (post: Post) => {
    
    const postData: Post = {
      ...post,
      tags: post.tags[0].length > 0 ? post.tags[0].split(",") : [],
    };
    
    mutate(postData);
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Post created successfully!");
      navigate("/");
    }
    if (error) alert(error);
  }, [navigate, error, isSuccess]);

  return {isLoading, handleEditPostSubmit}
};
