import { useState, useEffect, ChangeEvent } from "react";

import { useCreateComment } from "../../../../api/comments";

import { CommentCreate } from "../../../../Models";

export const useCreateCommentForm = (ownerId: string, postId: string) => {
  const [commentData, setCommentData] = useState<CommentCreate>({
    owner: ownerId,
    post: postId,
    message: "",
  });

  const { mutate, error, isLoading, isSuccess } = useCreateComment(commentData);

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData((prev) => ({ ...prev, message: e.target.value }));
  };

  const clearComment = () => {
    setCommentData((prev)=>({...prev, message:""}))
  }

  const handleSubmit = () => {
    clearComment();
    mutate();
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Comment created successfully!");
    }
    if (error) alert(error);
  }, [error, isSuccess]);

  return {
    commentData,
    isLoading,
    handleMessageChange,
    handleSubmit,
  };
};
