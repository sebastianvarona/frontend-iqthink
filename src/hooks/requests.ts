const api: string = 'https://the-one-api.dev/v2';
const API_KEY = import.meta.env.VITE_API_KEY;

async function httpGetCharacters() {
  try {
    const response = await fetch(`${api}/character`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export { httpGetCharacters };
