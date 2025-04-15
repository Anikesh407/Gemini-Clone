import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
