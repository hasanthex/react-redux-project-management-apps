import { createStore } from "redux";
import BoardReducer from "./board/boardReducer";

const store = createStore(BoardReducer);

export default store;