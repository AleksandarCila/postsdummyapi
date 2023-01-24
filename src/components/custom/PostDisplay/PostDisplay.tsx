import { FC } from "react";

import {
  PostWrapper,
  PostCreationDetails,
  PostImage,
  PostText,
  LikesContainer,
} from "./styles";
import { PostTags } from "../PostTags";
import { Title } from "../Title";
import { AiFillHeart } from "react-icons/ai";

import { Post } from "../../../Models";

type PostDisplayProps = {
  post: Post;
};

export const PostDisplay: FC<PostDisplayProps> = ({ post }) => {
  const ownerFullName = `${post.owner.firstName} ${post.owner.lastName}`;
  return (
    <PostWrapper>
      <PostCreationDetails>
        Created by {ownerFullName}, {new Date(post.publishDate).toDateString()}
      </PostCreationDetails>
      <PostImage src={post.image} />
      <PostTags tags={post.tags} />
      <hr style={{ width: "100%" }} />
      <PostText>{post.text}</PostText>
      <LikesContainer>
        <AiFillHeart style={{ fontSize: 20 }} /> {post.likes}
      </LikesContainer>
      <Title title="Comments" />
    </PostWrapper>
  );
};
