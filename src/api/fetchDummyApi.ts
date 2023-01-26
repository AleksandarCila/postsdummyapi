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

  if (!res.ok) {
    const code = res.status;
    const error = await res.json();
    throw Error(`${code} - ${error.error}`);
  }
  return (await res.json()) as T;
};
