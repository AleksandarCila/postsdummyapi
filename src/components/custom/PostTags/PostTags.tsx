import { FC } from "react";

import { TagsWrapper, Tag } from "./styles";

type PostTagsProps = {
  tags: string[];
};

export const PostTags: FC<PostTagsProps> = ({ tags }) => {
  return (
    <TagsWrapper>
      {tags
        .filter((tag) => tag.length > 0)
        .map((tag, ind) => (
          <Tag key={`${tag}${ind}`}>{tag}</Tag>
        ))}
    </TagsWrapper>
  );
};
