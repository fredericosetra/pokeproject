import * as S from "./styles";

function Header() {
  return (
    <S.Container>
      <S.AlignLeftItens>
        <S.LogoCustom />
        <S.Title>Poke Project</S.Title>
        <S.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </S.Description>
        <S.ButtonCustom>Fale Comigo</S.ButtonCustom>
      </S.AlignLeftItens>
      <S.AlignRightItens>
        <S.SquareWallpaper>
          <S.CharizardImg />
        </S.SquareWallpaper>
      </S.AlignRightItens>
    </S.Container>
  );
}

export default Header;
