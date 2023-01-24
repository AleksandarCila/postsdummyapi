import { FC } from "react";

import { Link } from "react-router-dom";

import {
  PostPreviewWrapper,
  PostImage,
  PostDetails,
  PostTitle,
  PostDate,
  PostDateLikesContainer,
  LikesContainer,
  PostOwner,
} from "./styles";
import { PostTags } from "../PostTags";

import { AiFillHeart } from "react-icons/ai";

import { PostPreview } from "../../../Models";

type PostPreviewProps = {
  post: PostPreview;
};

export const PostPreviewComponent: FC<PostPreviewProps> = ({ post }) => {
  const ownerFullName = `${post.owner.firstName} ${post.owner.lastName}`;
  return (
    <PostPreviewWrapper>
      <PostImage src={post.image} alt={post.text.slice(0, 20)} />
      <PostDetails>
        <Link to={`/${post.id}`}>
          <PostTitle>{post.text}</PostTitle>
        </Link>
        <PostDateLikesContainer>
          <PostDate>{new Date(post.publishDate).toDateString()}</PostDate>
          <LikesContainer>
            <AiFillHeart style={{ fontSize: 20 }} /> {post.likes}
          </LikesContainer>
        </PostDateLikesContainer>

        <hr style={{ width: "100%" }} />
        <PostTags tags={post.tags} />
        <PostOwner>
          <span>Created by: {ownerFullName}</span>
        </PostOwner>
      </PostDetails>
    </PostPreviewWrapper>
  );
};
