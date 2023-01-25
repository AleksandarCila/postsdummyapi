import { FC } from "react";

import { Link } from "react-router-dom";

import {
  PostWrapper,
  PostCreationDetails,
  PostImage,
  PostText,
  LikesContainer,
  TextButton,
} from "./styles";
import { PostTags } from "../PostTags";
import { Title } from "../Title";
import { AiFillHeart } from "react-icons/ai";
import { CommentsList } from "../CommentsList";
import { NewComment } from "../NewComment";

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
        <Link to={`/${post.id}/edit`}>
          <TextButton>Edit Post</TextButton>
        </Link>
      </LikesContainer>
      <Title title="Comments" />
      <hr style={{ width: "100%" }} />
      <CommentsList postId={post.id} />
      <NewComment postId={post.id} ownerId={post.owner.id} />
    </PostWrapper>
  );
};
