export const fetchDummyApi = async <T>(
  url: string,
  method = "GET",
  body = {}
) => {
  
  const res = await fetch(url, {
    method: method,
    headers: {
      "app-id": "63cfd474cfd72cf338197b9e",
      "Content-Type": "application/json",
    },
    ...body,
  });

  if (!res.ok) throw Error(res.statusText);
  return (await res.json()) as T;
};
