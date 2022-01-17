import { useState } from "react";
import ChatArea from "./ChatArea";
import "../styles/loadinganimation.css";

const Chat = () => {
  const [data, setData] = useState([]);

  const handleData = (value) => {
    function Data(value) {
      this.message = value;
      this.timestamp = new Date();
    }
    let _data = new Data(value);
    setData((prevState) => [...prevState, _data]);
  };
  return (
    <div className="bg-gray-200 h-full rounded-md md:relative w-full">
      <div className="sticky top-0 py-3.5 font-bold text-textBlue border-b border-gray-500 border-opacity-20 pl-4 block">
        Messages
      </div>
      <ChatArea chat={data} />
      <ChatInput handleData={handleData} />
    </div>
  );
};

export default Chat;

const ChatInput = ({ handleData }) => {
  const [value, setValue] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleData(value);
    setValue("");
  };

  return (
    <div className="absolute bottom-0 left-0 w-full z-10 bg-transparent pt-2 ">
      {typing && <Typing />}
      <div className="mx-4 bg-gray-200 pb-2">
        <form
          className="flex bg-white w-full mb-2 md:mb-6 rounded-lg"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            placeholder="send a message"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setTyping(true)}
            onBlur={() => setTyping(false)}
            className="w-full bg-transparent outline-none py-3 px-2 text-xs text-black"
          />
          <button
            type="button"
            onClick={(e) => handleSubmit(e)}
            className="bg-green-800 px-2.5 my-1 mr-1.5 rounded-lg text-gray-100"
          >
            <Sendicon style={{ textColor: "white" }} />
          </button>
        </form>
      </div>
    </div>
  );
};

const Sendicon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 20 20"
      fill="currentColor"
      className=" transform rotate-45"
    >
      <path
        fill="currentColor"
        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 
      1.428a1 1 0 001.17-1.408l-7-14z"
      />
    </svg>
  );
};

const Typing = () => {
  return (
    <div className="flex items-center pb-2 ml-4 md:bg-transparent bg-gray-200">
      <div className="bg-bgWhite w-7 h-7 rounded-full mr-2 relative">
        <div className="dot-flashing"></div>
      </div>
      <p className="text-textBlue text-xs"> You are typing</p>
    </div>
  );
};
