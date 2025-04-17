import axios from "axios";
import { API_ROOT } from "~/utils/constants";

export const fetchBoardDetailsAPI = async (id) =>{
  const res = await axios.get(`${API_ROOT}/boards/${id}`)
  return res.data;
}