import { FC } from "react";

import { TagsWrapper, Tag } from "./styles";

type PostTagsProps = {
  tags: string[];
};

export const PostTags: FC<PostTagsProps> = ({ tags }) => {
  return (
    <TagsWrapper>
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </TagsWrapper>
  );
};
