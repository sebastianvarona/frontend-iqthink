const api: string = 'https://the-one-api.dev/v2';
// const api2: string = 'https://jsonplaceholder.typicode.com/comments';

async function httpGetCharacters() {
  try {
    const response = await fetch(`${api}/character`, {
      headers: {
        Authorization: 'Bearer pwcX8ZajN7Fc0p7GmRkG',
      },
    });
    // const response = await fetch(api2);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export { httpGetCharacters };
