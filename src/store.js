import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import storyReducer from "./reducers/story-reducer";
import userReducer from "./reducers/user-reducer";

const reducer = combineReducers({
  user: userReducer,
  stories: storyReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
