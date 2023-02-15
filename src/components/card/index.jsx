import * as S from "./styles";
import { background, tagColor } from "./colors";

function Card({
  namePokemon,
  id,
  MainPhoto,
  descripton,
  typePokemon,
  weightPokemon,
  backgroundColor,
}) {
  function handleColors(color) {
    if (color.includes("/")) {
      const linearBackground = `linear-gradient(0deg, ${background[backgroundColor]}`;
      return linearBackground;
    } else {
      return background[backgroundColor];
    }
  }

  return (
    <S.Container backgroundColor={handleColors(backgroundColor)}>
      <S.MainImageCustom MainPhoto={MainPhoto} />

      <S.NumberPokemon>#{id}</S.NumberPokemon>
      <S.NamePokemon>{namePokemon}</S.NamePokemon>
      <S.Description>
        {descripton
          ? descripton
          : "Sorry!, We couldn't find information about this pokemon"}
      </S.Description>
      <S.SubCard>
        <S.AlignTypes>
          <S.TypesTitle>Peso</S.TypesTitle>
          <S.TypesDescription>{weightPokemon}</S.TypesDescription>
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
