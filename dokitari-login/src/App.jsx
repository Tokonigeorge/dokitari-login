import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App h-screen w-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center mt-24 w-full">
        <p className="text-blue-500 text-2xl font-semibold">Sign In</p>
        <Login />
      </div>
    </div>
  );
}

export default App;
