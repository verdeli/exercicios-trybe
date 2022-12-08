const URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  // Adicionar lógica aqui!
  const object = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const response = await fetch(URL, object);
  const data = await response.json();
  console.log(data.joke);
  const h2Container = document.querySelector('#jokeContainer');
  h2Container.innerHTML = await data.joke;
};
fetchJoke();
