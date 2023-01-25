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

type PostFormProps = {
  postId?: string;
};

export const PostForm: FC<PostFormProps> = ({ postId }) => {
  const { postState, error, handlePostDataChange } = usePostData(postId);

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    handlePostDataChange(e.target.name, e.target.value);
  };

  const isFormDisabled = error.length > 0;
    console.log(error)
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
      <FormLabel>Post tags: </FormLabel>
      <Input
        name="tags"
        placeholder="Enter the post tags"
        value={postState.tags}
        onChange={handleInputChange}
      />
      {isFormDisabled && <ErrorWrapper>{error}</ErrorWrapper>}
      <ButtonWrapper>
        <Button disabled={isFormDisabled}>Save Post</Button>
      </ButtonWrapper>
    </PostFormWrapper>
  );
};
