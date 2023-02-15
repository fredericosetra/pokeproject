import { useState, useEffect } from "react";
import Card from "../card/index";
import pokeapi from "../../services/pokeapi";
import * as S from "./styles";
// import Loading from "../loading";
import axios from "axios";

function Pokedex() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [speciesPokemon, setSpeciesPokemon] = useState([]);
  // const [loading, setLoading] = useState(false);

  //faz um busca nos detalhes do pokemons e organizar as informações para passa para construir a tela.
  async function getDataPokemons(data) {
    const response = await axios.all(data.map((item) => axios.get(item.url)));
    // console.log(response[0].data.name);
    // console.log(response);

    const responseSpecies = await axios.all(
      response.map((item) => pokeapi.get(`/pokemon-species/${item.data.name}`))
    );

    // console.log(responseSpecies[0].data.flavor_text_entries[7].flavor_text);

    setDataPokemon(response);
    setSpeciesPokemon(responseSpecies);
  }

  //recebe os primeiros pokemons
  useEffect(() => {
    pokeapi
      .get("/pokemon?limit=50&offset=0")
      .then(function (response) {
        getDataPokemons(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  function weightCalc(weight) {
    var calculo = Math.floor(weight.length - 1);
    var resultado = weight.substr(0, calculo) + "," + weight.substr(calculo);
    return resultado;
  }

  function typeCustom(data) {
    if (data.length === 2) {
      const types = [];
      types.push(data[0].type.name, data[1].type.name);
      return types.toString().replace(",", "/");
    } else {
      return data[0].type.name;
    }
  }

  function formatDescription(description) {
    return description.replace("", " ");
  }

  return (
    <S.Container>
      {dataPokemon.length &&
        dataPokemon?.map((pokemon, index) => {
          return (
            <Card
              key={index}
              backgroundColor={typeCustom(pokemon.data.types)}
              tagBackground={pokemon.data.types[0].type.name}
              namePokemon={pokemon.data.name}
              id={pokemon.data.order}
              MainPhoto={
                pokemon.data.sprites.other["official-artwork"].front_default
              }
              descripton={formatDescription(
                speciesPokemon[index].data.flavor_text_entries[7].flavor_text
              )}
              weightPokemon={`${weightCalc(pokemon.data.weight.toString())} kg`}
              typePokemon={typeCustom(pokemon.data.types)}
            />
          );
        })}
      <S.MorePokemonsBtn>Veja Mais...</S.MorePokemonsBtn>
    </S.Container>
  );
}

export default Pokedex;
