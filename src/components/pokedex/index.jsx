import { useState, useEffect } from "react";
import Card from "../card/index";
import pokeapi from "../../services/pokeapi";
import * as S from "./styles";
import Loading from "../loading";

function Pokedex() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [amountPokemon, setAmountPokemon] = useState(9);

  async function getPokemonData(data) {
    setLoading(false);

    const url = [];
    const statusPokemon = [];

    data.map((item) => {
      url.push(item.url);
      return "";
    });

    for (let index = 0; index < url.length; index++) {
      pokeapi
        .get(url[index])
        .then(function (response) {
          statusPokemon.push(response.data);
          setDataPokemon(statusPokemon);
        })
        .catch(function (error) {
          // manipula erros da requisição
          console.error(error);
        });
    }

    setLoading(true);
  }

  useEffect(() => {
    pokeapi
      .get("/pokemon?limit=99&offset=0")
      .then(function (response) {
        getPokemonData(response.data.results);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      });
  }, []);

  console.log(dataPokemon);

  return loading ? (
    <S.Container>
      {dataPokemon &&
        dataPokemon.map((pokemon, index) => {
          return (
            <Card
              key={index}
              backgroundColor={pokemon.types[0].type.name}
              tagBackground={pokemon.types[0].type.name}
              namePokemon={pokemon.name}
              id={pokemon.id}
              MainPhoto={
                pokemon.sprites.other["official-artwork"].front_default
              }
              weightPokemon={pokemon.weight}
              typePokemon={pokemon.types[0].type.name}
            />
          );
        })}
      <S.MorePokemonsBtn>Veja Mais...</S.MorePokemonsBtn>
    </S.Container>
  ) : (
    <Loading />
  );
}

export default Pokedex;
