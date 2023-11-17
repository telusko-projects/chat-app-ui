import { useState } from "react";
import { JoiningForm } from "./components/joining-form";
import { ChatRoom } from "./components/chat-room";

function App() {
  const [userName, setUserName] = useState<string>("");
  return (
    <div className="w-full">
      {!userName && (
        <JoiningForm userName={userName} setUserName={setUserName} />
      )}
      {userName.length > 0 && <ChatRoom />}
    </div>
  );
}

export default App;
