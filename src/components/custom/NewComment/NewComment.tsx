import { ChangeEvent, FC, useState } from "react";

import { NewCommentWrapper, NewCommentTitle, ButtonWrapper } from "./styles";

import { Textarea, Button, Spinner } from "../../generic";
import { useCreateComment } from "../../../api/comments";

import { CommentCreate } from "../../../Models";

type NewCommentProps = {
  postId: string;
  ownerId: string;
};

export const NewComment: FC<NewCommentProps> = ({ postId, ownerId }) => {
  const [commentData, setCommentData] = useState<CommentCreate>({
    owner: ownerId,
    post: postId,
    message: "",
  });

  const { mutate, error, isLoading } = useCreateComment(commentData);

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData((prev) => ({ ...prev, message: e.target.value }));
  };

  const handleSubmit = () => {
    mutate();
  };

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
