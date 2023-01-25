import { FC } from "react";

import { usePostComments } from "../../../api";

import { CommentListItem } from "./components";

type CommentsListProps = {
  postId: string;
};

export const CommentsList: FC<CommentsListProps> = ({ postId }) => {
  const { data, error, isLoading } = usePostComments(postId);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div>
      {data?.data.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
