import { createStore } from "redux";
import Root_reducer from "../reducer/Root_reducer";
const Store = createStore(Root_reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;