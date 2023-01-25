
import { NewCommentWrapper, NewCommentTitle, ButtonWrapper } from "./styles";

import { Textarea, Button } from "../../generic";

export const NewComment = () => {
  return (
    <NewCommentWrapper>
      <NewCommentTitle>
        What do you think about this post? Let everybody know!
      </NewCommentTitle>
      <Textarea
        placeholder="Write your opinion..."
        minLength={5}
        maxLength={500}
      />
      <ButtonWrapper>
        <Button>Post Comment</Button>
      </ButtonWrapper>
    </NewCommentWrapper>
  );
};
