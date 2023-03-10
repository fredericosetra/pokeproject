import styled from "styled-components";
import pikachu from "./pikachu.png";

export const Container = styled.div`
  width: 260px;
  padding: 40px 32px;
  background: ${(props) => props.backgroundColor ?? "grey"};
  border-radius: 30px;
  margin: 0 64px 80px 0;
`;

export const MainImageCustom = styled.div`
  width: 220px;
  height: 220px;
  background-size: cover;
  margin: -127px 0 0 132px;
  position: absolute;
  background-image: url(${(props) => props.MainPhoto ?? pikachu});
`;

export const NumberPokemon = styled.div`
  font-size: 24px;
  color: white;
  text-transform: uppercase;
  margin: 10px 0 0 0;
  text-shadow: 1px 2px 4px #000;
`;

export const NamePokemon = styled.div`
  font-size: 32px;
  color: white;
  text-transform: uppercase;
  position: relative;
  text-shadow: 1px 2px 4px #000;
`;

export const Description = styled.div`
  font-size: 16px;
  color: white;
  margin: 16px 0 0 0;
  text-align: justify;
  height: 120px;
  text-transform: lowercase;
`;

export const SubCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  margin: 24px 0 42px 0;
  padding: 12px;
`;

export const AlignTypes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TypesTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const TypesDescription = styled.div`
  font-size: 16px;
  text-transform: capitalize;
`;

export const CardEvolution = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  padding: 24px 0;
`;

export const TitleEvolution = styled.div`
  background-color: ${(props) => props.tagBackground};
  border-radius: 8px;
  position: absolute;
  margin: -36px 0 0 0;
  text-transform: uppercase;
  padding: 5px 20px;
  color: white;
`;

export const AlignEvolution = styled(AlignTypes)`
  padding: 0 10px;
  cursor: pointer;
`;

export const EvolutionsImageCustom = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-image: url(${pikachu});
  margin: 0 10px;
`;

export const EvolutionsName = styled.div`
  font-size: 12px;
  color: black;
  font-weight: bold;
`;
