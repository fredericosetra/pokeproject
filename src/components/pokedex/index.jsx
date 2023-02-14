import { useState, useEffect } from "react";
import Card from "../card/index";
import pokeapi from "../../services/pokeapi";
import * as S from "./styles";
// import Loading from "../loading";
import axios from "axios";

function Pokedex() {
  const [dataPokemon, setDataPokemon] = useState([]);
  // const [loading, setLoading] = useState(false);

  //faz um busca nos detalhes do pokemons e organizar as informações para passa para construir a tela.
  async function getDataPokemons(data) {
    const response = await axios.all(data.map((item) => axios.get(item.url)));
    console.log(response);
    // const responseSpecies = await axios.all(
    //   response.map((item) => axios.get(item.data.species.url))
    // );

    setDataPokemon(response);
  }

  //recebe os primeiros pokemons
  useEffect(() => {
    pokeapi
      .get("/pokemon?limit=20&offset=0")
      .then(function (response) {
        getDataPokemons(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <S.Container>
      {dataPokemon.length &&
        dataPokemon?.map((pokemon, index) => {
          return (
            <Card
              key={index}
              backgroundColor={pokemon.data.types[0].type.name}
              tagBackground={pokemon.data.types[0].type.name}
              namePokemon={pokemon.data.name}
              id={pokemon.data.order}
              MainPhoto={
                pokemon.data.sprites.other["official-artwork"].front_default
              }
              weightPokemon={pokemon.data.weight}
              typePokemon={pokemon.data.types[0].type.name}
            />
          );
        })}
      <S.MorePokemonsBtn>Veja Mais...</S.MorePokemonsBtn>
    </S.Container>
  );
}

export default Pokedex;
