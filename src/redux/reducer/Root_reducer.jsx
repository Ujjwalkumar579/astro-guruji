import { combineReducers } from "redux";
import Reducer from "./Reducer";

const Root_reducer = combineReducers({
    data: Reducer
})


export default Root_reducer;