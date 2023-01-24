export const getCurrPageFromSearch = (search: URLSearchParams) => {
  return parseInt(search.get("page") || "0");
};
