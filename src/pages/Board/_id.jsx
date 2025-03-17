import Container from "@mui/material/Container";
import AppBar from "../../components/AppBar/AppBar";
import BoarBar from "./BoardBar/BoarBar";
import BoardContent from "./BoardContent/BoardContent";

function Board() {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: "100vh", backgroundColor: "yellowgreen" }}
      >
        <BoarBar />

        <AppBar />

        <BoardContent />

      </Container>
    </>
  );
}

export default Board;
