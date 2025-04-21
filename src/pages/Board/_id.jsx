import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar/AppBar";
import BoarBar from "./BoardBar/BoarBar";
import BoardContent from "./BoardContent/boardContent";
import { fetchBoardDetailsAPI } from "~/apis";

function Board() {
  const [boardData, setBoard] = useState(null);

  useEffect(() => {
    const boardId = "6800a6c9adf63563c7f6c819";
    fetchBoardDetailsAPI(boardId).then((res) => {
      if (res?.status) setBoard(res.data);
    });
  }, []);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: "#B0E2FF" }}
    >
      <AppBar />
      <BoarBar board={boardData} />
      <BoardContent board={boardData} />
    </Container>
  );
}

export default Board;
