export const fetchDummyApi = async <T>(url:string) => {
    const res = await fetch(url, {
      method: "GET",
      headers: { "app-id": "63cfd474cfd72cf338197b9e" },
    });

    if(!res.ok) throw Error(res.statusText)
    return await res.json() as T;
  };