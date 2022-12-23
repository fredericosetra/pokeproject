import * as S from "./styles";

function Card({ namePokemon }) {
  return (
    <S.Container>
      <S.MainImageCustom />

      <S.NumberPokemon>#001</S.NumberPokemon>
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
          <S.TypesDescription>60</S.TypesDescription>
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
          <S.TypesDescription>Choque</S.TypesDescription>
        </S.AlignTypes>
      </S.SubCard>

      <S.CardEvolution>
        <S.TitleEvolution>Evoluções</S.TitleEvolution>
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
