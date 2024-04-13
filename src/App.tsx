import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./assets/components/Main/Main.tsx";
import { PostPage } from "./assets/components/PostPage/Post.tsx";
import { FormPage } from "./assets/components/FormPage/FormPage.tsx";
import { ChatComponent } from "./assets/components/Chat/Chat.tsx";
// import { RequireAuth } from "./assets/private/RequireAuth.tsx";
import { io } from "socket.io-client";
import { USER } from "./assets/api/url.ts";

const socket = io(`http://localhost:8001`);
socket.on("connect", () => {
  console.log("socket.io connected");
});

socket.on("newpost", async (data) => {
  const token = localStorage.getItem("token");
  const res = await fetch(USER, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Server error");
  }
  const loggedUserEmail = await res.json();

  if (loggedUserEmail === data.userEmail) {
    if (data.log === "alert") {
      alert("новина додана");
    }
    if (data.log === "log") {
      console.log("новина додана");
    }
  }
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route
          path="/edit-post/:id"
          element={
            <RequireAuth>
              <FormPage />
            </RequireAuth>
          }
        /> */}
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/newpost/" element={<FormPage />} />
        <Route path="/chat" element={<ChatComponent />} />
        {/* <Route path="/edit-post/:id" element={<FormPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
