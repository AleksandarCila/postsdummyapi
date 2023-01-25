import { FC, InputHTMLAttributes } from "react";

import { StyledTextarea } from "./styles";

export const Textarea: FC<InputHTMLAttributes<HTMLTextAreaElement>> = (
  props
) => {
  return <StyledTextarea {...props} />;
};
