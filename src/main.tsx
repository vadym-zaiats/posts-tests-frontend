import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { io } from "socket.io-client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const socket = io(`http://localhost:8001`);
socket.on("connect", () => {
  console.log("socket.io connected");
});
socket.emit("newpost", {
  message: "New post created",
});
