const BASE_URL = import.meta.env.BASE_URL;

export const useFetch = (api, method = "GET", body) => {
  const fetchData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/${api}.json`, {
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: body && JSON.stringify(body),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  return fetchData;
};
