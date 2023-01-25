import { UserPreview } from "./UserPreview";

export type Comment = {
  id: string;
  message: string;
  owner: UserPreview;
  post: string;
  publishDate: string;
};
