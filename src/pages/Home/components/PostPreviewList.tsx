import { FC } from "react";
import { PostPreviewComponent } from "../../../components";
import { PostPreview } from "../../../Models";

type PostPreviewListProps = {
  posts?: PostPreview[];
};

export const PostPreviewList: FC<PostPreviewListProps> = ({ posts }) => {
  if (!posts) return <div> No Posts</div>;
  return (
    <div>
      {posts.map((post) => (
        <PostPreviewComponent key={post.id} post={post} />
      ))}
    </div>
  );
};
