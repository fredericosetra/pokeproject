import * as S from "./styles";

const background = {
  grass: "#5FBD58",
  bug: "#92BC2C",
  dark: "#595761",
  dragon: "#0C69C8",
  electric: "#ffd800",
  fairy: "#d581ce",
  fighting: "#D3425F",
  fire: "#dc872f",
  flying: "#A1BBEC",
  ghost: "#5F6DBC",
  ground: "#DA7C4D",
  ice: "#75D0C1",
  normal: "#A0A29F",
  poison: "#B763CF",
  psychic: "#ff2ca8",
  rock: "#a38c21",
  steel: "#5695A3",
  water: "#539DDF",
};

const tagColor = {
  grass: "#3aa132",
  bug: "#668913",
  dark: "#595761",
  dragon: "#0C69C8",
  electric: "#d5b60a",
  fairy: "#e342d5",
  fighting: "#8f2036",
  fire: "#c1711e",
  flying: "#A1BBEC",
  ghost: "#26358d",
  ground: "#a95328",
  ice: "#75D0C1",
  normal: "#6a6a6a",
  poison: "#792691",
  psychic: "#bb0e74",
  rock: "#685704",
  steel: "#5695A3",
  water: "#256fb1",
};

function Card({
  namePokemon,
  id,
  MainPhoto,
  typePokemon,
  weightPokemon,
  backgroundColor,
}) {
  return (
    <S.Container backgroundColor={background[backgroundColor]}>
      <S.MainImageCustom MainPhoto={MainPhoto} />

      <S.NumberPokemon>#{id}</S.NumberPokemon>
      <S.NamePokemon>{namePokemon}</S.NamePokemon>
      <S.Description>
        Pikachu (ピカチュウ Pikachū?) é uma espécie fictícia pertencente à
        franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez no
        Japão em 1996, nos jogos eletrônicos Pokémon Red and Blue, e foi criado
        por Satoshi Tajiri. Originalmente criado como um personagem secundário
      </S.Description>
      <S.SubCard>
        <S.AlignTypes>
          <S.TypesTitle>Peso</S.TypesTitle>
          <S.TypesDescription>{weightPokemon}</S.TypesDescription>
        </S.AlignTypes>
        <S.AlignTypes>
          <S.TypesTitle>HP</S.TypesTitle>
          <S.TypesDescription>600</S.TypesDescription>
        </S.AlignTypes>
        <S.AlignTypes>
          <S.TypesTitle>Gênero</S.TypesTitle>
          <S.TypesDescription>TBF</S.TypesDescription>
        </S.AlignTypes>
        <S.AlignTypes>
          <S.TypesTitle>Tipo</S.TypesTitle>
          <S.TypesDescription>{typePokemon}</S.TypesDescription>
        </S.AlignTypes>
      </S.SubCard>

      <S.CardEvolution>
        <S.TitleEvolution tagBackground={tagColor[backgroundColor]}>
          Evoluções
        </S.TitleEvolution>
        <S.AlignEvolution>
          <S.EvolutionsImageCustom />
          <S.EvolutionsName>Pichu</S.EvolutionsName>
        </S.AlignEvolution>
        <S.AlignEvolution>
          <S.EvolutionsImageCustom />
          <S.EvolutionsName>Pikachu</S.EvolutionsName>
        </S.AlignEvolution>
        <S.AlignEvolution>
          <S.EvolutionsImageCustom />
          <S.EvolutionsName>Raichu</S.EvolutionsName>
        </S.AlignEvolution>
      </S.CardEvolution>
    </S.Container>
  );
}

export default Card;
