import ChatMembers from "./ChatMembers";
import MembersTypes from "./MembersTypes";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";
import { useMainContext } from "../../hooks/customHooks";

const Chat = () => {
  const { miniChat } = useMainContext();

  return (
    <article
      className={`fixed right-2 bottom-0 bg-white z-50 rounded-lg flex flex-col gap-2 overflow-x-hidden overflow-y-auto w-72 transition duration-200 ease-linear ${
        miniChat
          ? "translate-y-[386px] lg:translate-y-[417px]"
          : "translate-y-0"
      }`}
    >
      <ChatHeader />
      <hr />
      <ChatInput />
      <MembersTypes />
      <ChatMembers />
      <hr />
      <ChatMembers />
      <hr />
      <ChatMembers />
      <hr />
      <ChatMembers />
    </article>
  );
};

export default Chat;
