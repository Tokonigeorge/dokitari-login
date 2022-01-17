import SentMessage from "./SentMessage";

const ChatArea = ({ chat }) => {
  console.log(chat);
  return (
    <div className="md:h-3/4 h-3/4 overflow-y-scroll styleScroll relative">
      <div className="absolute top-0 pt-4 pb-6 left-0 w-full">
        {/* {chat.map((i, indx) => {
          <SentMessage
            key={indx + `${i.message}`}
            date={i.timestamp}
            message={i.message}
          />;
        })} */}
        {chat.map((i, indx) => {
          return <SentMessage key={indx + `${i}`} message={i} />;
        })}
      </div>
    </div>
  );
};

export default ChatArea;
