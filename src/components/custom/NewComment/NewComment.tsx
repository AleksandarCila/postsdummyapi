import { FC } from "react";

import { NewCommentWrapper, NewCommentTitle, ButtonWrapper } from "./styles";

import { Textarea, Button, Spinner } from "../../generic";
import { useCreateCommentForm } from "./hooks";

type NewCommentProps = {
  postId: string;
  ownerId: string;
};

export const NewComment: FC<NewCommentProps> = ({ postId, ownerId }) => {
  const { commentData, isLoading, handleMessageChange, handleSubmit } =
    useCreateCommentForm(ownerId, postId);

  return (
    <NewCommentWrapper>
      <NewCommentTitle>
        What do you think about this post? Let everybody know!
      </NewCommentTitle>
      <Textarea
        placeholder="Write your opinion..."
        minLength={2}
        maxLength={500}
        value={commentData.message}
        onChange={handleMessageChange}
      />
      <ButtonWrapper>
        <Button onClick={handleSubmit}>
          {isLoading ? <Spinner /> : <>Post Comment</>}
        </Button>
      </ButtonWrapper>
    </NewCommentWrapper>
  );
};
