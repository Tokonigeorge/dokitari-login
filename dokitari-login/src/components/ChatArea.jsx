import SentMessage from "./SentMessage";
import "../styles/scrollbar.css";

const ChatArea = ({ chat }) => {

  return (
    <div className="md:h-3/4 h-3/4 overflow-y-scroll styleScroll relative">
      <div className="absolute top-0 pt-4 pb-6 left-0 w-full">
        {chat.map((i, indx) => {
          return (
            <SentMessage
              key={indx + `${i.timestamp}`}
              message={i.message}
              date={i.timestamp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatArea;
