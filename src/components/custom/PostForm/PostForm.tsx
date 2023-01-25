import { ChangeEvent, FC } from "react";

import {
  PostFormWrapper,
  FormLabel,
  TwoColumnGrid,
  GridItem,
  ErrorWrapper,
  ButtonWrapper,
} from "./styles";
import { Button, Input, Textarea } from "../../generic";

import { usePostData } from "./hooks";

import { Post } from "../../../Models";

type PostFormProps = {
  postId?: string;
  onSubmit: (post: Post) => void;
};

export const PostForm: FC<PostFormProps> = ({ postId, onSubmit }) => {
  const { postState, error, handlePostDataChange } = usePostData(postId);

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    handlePostDataChange(e.target.name, e.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSubmit(postState);
  };

  const isFormDisabled = error.length > 0;

  return (
    <PostFormWrapper>
      <FormLabel>Post text: </FormLabel>
      <Textarea
        name="text"
        minLength={6}
        maxLength={50}
        placeholder="Start typing the post..."
        value={postState.text}
        onChange={handleInputChange}
      />
      <TwoColumnGrid>
        <GridItem>
          <FormLabel>Number of likes: </FormLabel>
          <Input
            type="number"
            name="likes"
            min="0"
            placeholder="Enter the number of likes"
            value={postState.likes}
            onChange={handleInputChange}
          />
        </GridItem>
        <GridItem>
          <FormLabel>Image URL: </FormLabel>
          <Input
            name="image"
            placeholder="Enter the Image URL"
            value={postState.image}
            onChange={handleInputChange}
          />
        </GridItem>
      </TwoColumnGrid>
      <FormLabel>Post tags: (separated by comma)</FormLabel>
      <Input
        name="tags"
        placeholder="Enter the post tags"
        value={postState.tags}
        onChange={handleInputChange}
      />
      {isFormDisabled && <ErrorWrapper>{error}</ErrorWrapper>}
      <ButtonWrapper>
        <Button disabled={isFormDisabled} onClick={handleSubmit}>
          Save Post
        </Button>
      </ButtonWrapper>
    </PostFormWrapper>
  );
};
