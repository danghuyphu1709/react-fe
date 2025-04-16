import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar/AppBar";
import BoarBar from "./BoardBar/BoarBar";
import BoardContent from "./BoardContent/boardContent";
import { mockData } from "~/apis/mock-data";
import { fetchBoardDetailsAPI } from "~/apis";
function Board() {
  const [board, setBoard] = useState(null);
  useEffect(() => {
    // call api
    const boardId = "67fe206fd1bc2a9f3870482e";
    fetchBoardDetailsAPI(boardId).then((board) => {
      setBoard(board);
    });

    console.log("🚀 ~ Board ~ board:", board);
  }, []);

  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: "100vh", backgroundColor: "#B0E2FF" }}
      >
        <AppBar />

        <BoarBar board={mockData?.board} />

        <BoardContent board={mockData?.board} />
      </Container>
    </>
  );
}

export default Board;
