import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar/AppBar";
import BoarBar from "./BoardBar/BoarBar";
import BoardContent from "./BoardContent/boardContent";
import { mockData } from "~/apis/mock-data";
function Board() {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: "100vh", backgroundColor: "#B0E2FF" }}
      >
        <AppBar />

        <BoarBar board={ mockData?.board } />

        <BoardContent board={ mockData?.board } />
      </Container>
    </>
  );
}

export default Board;
