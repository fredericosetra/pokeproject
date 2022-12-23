import { useState, useEffect } from "react";
import Card from "../card/index";
import pokeapi from "../../services/pokeapi";
import * as S from "./styles";

function Pokedex() {
  const [pokemons, setPokemons] = useState();
  //   const [urlPokemon, setUrlPokemon] = useState();
  //   const [statusPokemon, setStatusPokemon] = useState();

  useEffect(() => {
    pokeapi
      .get("/pokemon?limit=30&offset=0")
      .then(function (response) {
        setPokemons(response.data.results);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      });
  }, []);

  //   pokemons && console.log(pokemons);
  //   pokemons && console.log(pokemons[24].name);

  return (
    <S.Container>
      {pokemons &&
        pokemons.map((pokemon, index) => {
          return <Card key={index} namePokemon={pokemon.name} />;
        })}
    </S.Container>
  );
}

export default Pokedex;
