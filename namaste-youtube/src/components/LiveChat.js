import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          text: makeRandomString(10),
        })
      );
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(`form submitted: ${liveMessage}`);

    dispatch(
      addMessage({
        name: "mukesh",
        text: liveMessage, // out local state value updating using s
      })
    );

    setLiveMessage("");
  };

  return (
    <>
      <div className="border border-black ml-2 p-2 h-[600px] bg-slate-100 rounded-xl overflow-y-auto flex flex-col-reverse">
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} messages={message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-md"
        onSubmit={handleSendMessage} // Handle submission here
      >
        <input
          className="px-2 w-96 visible"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)} // Update input value
        />
        <button
          onSubmit={handleSendMessage}
          type="submit" // Explicitly set button type to "submit"
          className="px-4 mx-4 bg-green-100 hover:bg-green-300 rounded-lg"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
