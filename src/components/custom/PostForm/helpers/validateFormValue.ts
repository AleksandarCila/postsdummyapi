export const POST_KEYS = {
  text: "text",
  likes: "likes",
  image: "image",
  tags: "tags",
};

export const validateFormValue = (key: string, value: string) => {
  const validator = {
    [POST_KEYS.text]: (value: string) => {
      if (value.length < 6)
        return { value: value, error: "Text is too short. " };
      return { value: value, error: "" };
    },

    [POST_KEYS.likes]: (value: string) => {
      const valueNumber = parseInt(value);
      if (valueNumber < 0)
        return { value: 0, error: "Likes can not be less than 0. " };
      return { value: value, error: "" };
    },

    [POST_KEYS.image]: (value: string) => {
      if (value.length <= 0)
        return { value, error: "Post must have an image. " };
      return { value, error: "" };
    },

    [POST_KEYS.tags]: (value: string) => {
      return { value: value, error: "" };
    },
  };

  return validator[key](value);
};
