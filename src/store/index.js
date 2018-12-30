import { createStore } from "redux";

import messageReducer from "./ducks/landing";

const store = createStore(messageReducer);

export default store;