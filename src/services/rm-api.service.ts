const apiUri = import.meta.env.VITE_API_URL_CHAR;

export const getCharacters = async () => {
  const res = await fetch(apiUri);
  const data = await res.json();
  return data;
};
