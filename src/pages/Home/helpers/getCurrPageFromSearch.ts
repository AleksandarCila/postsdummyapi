export const getCurrPageFromSearch = (search: URLSearchParams) => {
  const searchPage = parseInt(search.get("page") || "0");
  
  return searchPage > 0 ? searchPage : 0;
};
