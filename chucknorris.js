const url = "https://api.chucknorris.io/jokes";

const fetchRandomJokes = async () => {
  try {
    const response = await fetch(`${url}/random`);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("ERRO",e);
  }
};

const fetchAllCategories = async () => {
  try {
    const response = await fetch(`${url}/categories`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const fetchCategory = async (cat) => {
  try {
    const response = await fetch(`${url}/random?categories=${cat}`);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

const main = async () => {
  const teste = await fetchAllCategories();
  fetchCategory(teste[2]);
};

fetchRandomJokes();
