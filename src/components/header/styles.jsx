import styled from "styled-components";
import Logo from "../../assets/img/logo1.png";
import Charizard from "../../assets/img/charizard.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  margin: 0 0 0 24px;
`;

export const AlignLeftItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const LogoCustom = styled.div`
  background-image: url(${Logo});
  width: 100%;
  height: 100px;
  background-repeat: no-repeat;
  margin: 24px 0 0 0;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 64px;
  padding: 64px 0 0 0;
`;

export const Description = styled.div`
  font-size: 20px;
  width: 500px;
  padding: 32px 0;
`;

export const ButtonCustom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
`;

export const AlignRightItens = styled.div`
  width: 50%;
`;

export const SquareWallpaper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #b8c370;
  transform: skew(-10deg, 0deg);
  margin: 0 0px 0 70px;
`;

export const CharizardImg = styled.div`
  background-image: url(${Charizard});
  width: 70%;
  height: 70%;
  background-repeat: no-repeat;
  background-size: cover;
`;

// export const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   height: 80vh;
//   background-color: white;
//   margin: 0 0 0 24px;
// `;

// export const SquareWallpaper = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: #b8c370;
//   transform: skew(-10deg, 0deg);
//   margin: 0 -146px 0 0;
// `;

// export const LogoCustom = styled.div`
//   background-image: url(${Logo});
//   width: 100%;
//   background-repeat: no-repeat;
//   margin: 24px 0 0 0;
// `;

// export const AlignHeader = styled.div`
//   display: flex;
// `;

// export const Title = styled.div`
//   font-weight: bold;
//   font-size: 24px;
// `;
