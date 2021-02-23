import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/login-page";
import StoryPage from "./pages/story-page";
import { UserContext } from "./services/userContext";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserJson = window.localStorage.getItem("storyAppUser");
    if (getUserJson) {
      const user = JSON.parse(getUserJson);
      setUser(user);
    }
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <UserContext.Provider value={[user, setUser]}>
        <LoginPage />
        <StoryPage />
      </UserContext.Provider>
    </div>
  );
}

export default App;
