import { Post, UserPreview } from "../../../../Models";

export const getEmptyPost = (): Post => {
  return {
    id: "",
    text: "",
    image: "",
    likes: 0,
    link: "",
    tags: [""],
    publishDate: "",
    owner: {} as UserPreview,
  };
};
