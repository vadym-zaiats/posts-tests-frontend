import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import { Main } from "./assets/components/Main/Main.tsx";
import { PostPage } from "./assets/components/PostPage/Post.tsx";
import { FormPage } from "./assets/components/FormPage/FormPage.tsx";
import { ChatComponent } from "./assets/components/Chat/Chat.tsx";
// import { RequireAuth } from "./assets/private/RequireAuth.tsx";

const socket = io(`http://localhost:8001`);
socket.on("connect", () => {
  console.log("connected");
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
