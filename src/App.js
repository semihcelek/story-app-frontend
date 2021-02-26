import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import LoginPage from "./pages/login-page";
import StoryPage from "./pages/story-page";
import { setLocalUser } from "./reducers/user-reducer";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserJson = window.localStorage.getItem("storyAppUser");
    if (getUserJson) {
      const getStoreduser = JSON.parse(getUserJson);
      dispatch(setLocalUser(getStoreduser));
      console.log("user is stored from local storage");
    }
  }, []);
  return (
    <div className="App">
      <LoginPage />
      <StoryPage />
    </div>
  );
}

export default App;
