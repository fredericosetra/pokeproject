import CircularProgress from "@mui/material/CircularProgress";
import * as S from "./styles";

function Loading() {
  return (
    <S.Container>
      <CircularProgress />
    </S.Container>
  );
}

export default Loading;
