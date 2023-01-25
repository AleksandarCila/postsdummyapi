import { UserPreview } from "./UserPreview";

export type Post = {
  id: string;
  text: string;
  image: string;
  likes: number;
  link: string;
  tags: string[];
  publishDate: string;
  owner: UserPreview;
  [key:string]: any;
};
