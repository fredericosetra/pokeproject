import { useEffect, useState } from "react";
import pokeapi from "../../services/pokeapi";
import Card from "../../components/card";
import * as S from "./styles";
import Header from "../../components/header";

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
    <>
      <Header />
      <S.Container>
        <S.SpacingCard />
        <Card />
        <S.SpacingCard />
        <Card />
        <S.SpacingCard />
        <Card />
      </S.Container>
    </>
  );
}

export default Home;
