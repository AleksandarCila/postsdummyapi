import { FC } from "react";

import {
  CommentWrapper,
  CommentDetailsWrapper,
  CommentOwnerImage,
  CommentCreationDetails,
  Divider,
  CommentText,
} from "./styles";

import { Comment } from "../../../../Models";

type CommentListItemProps = {
  comment: Comment;
};

export const CommentListItem: FC<CommentListItemProps> = ({ comment }) => {
  const ownerFullName = `${comment.owner.firstName} ${comment.owner.lastName}`;
  return (
    <CommentWrapper>
      <CommentOwnerImage src={comment.owner.picture} />
      <CommentDetailsWrapper>
        <CommentCreationDetails>
          <span>Created by: {ownerFullName}</span>
          <span>, {new Date(comment.publishDate).toDateString()} </span>
        </CommentCreationDetails>
        <Divider />
        <CommentText>{comment.message}</CommentText>
      </CommentDetailsWrapper>
    </CommentWrapper>
  );
};
