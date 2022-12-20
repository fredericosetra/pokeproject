import { useEffect, useState } from "react";
import pokeapi from "../../services/pokeapi";

function Home() {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    pokeapi
      .get("/pokemon")
      .then(function (response) {
        setPokemons(response.data.results);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
      .then(function () {
        // sempre será executado
      });
  }, []);

  return (
    <div>
      <p>{pokemons[0].name}</p>
    </div>
  );
}

export default Home;
