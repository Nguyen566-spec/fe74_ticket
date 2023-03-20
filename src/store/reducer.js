import { combineReducers } from "redux";
import ticketReducer from "../components/movie/reducer";

const rootReducer = combineReducers({
  ticketReducer,
});

export { rootReducer };
