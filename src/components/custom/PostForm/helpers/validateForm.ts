import { Post } from "../../../../Models";

import { POST_KEYS, validateFormValue } from "./validateFormValue";

export const validateForm = (post: Post) => {
  let error = "";

  Object.values(POST_KEYS).forEach((value) => {
    const { error: valueError } = validateFormValue(value, post[value]);
    error += valueError;
  });

  return { error };
};
