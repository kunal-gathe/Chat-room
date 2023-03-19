import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import Search from './Search'
import '../style.css'
import { Link } from "react-router-dom";

const Chat = () => {
  const { data } = useContext(ChatContext);
  console.log(data.user?.displayName);

  const off = () => {
    document.querySelector(".search").classList.toggle("search");
  }

  const handleEvent = () => {
    document.querySelector(".search").addEventListener("click", off())
  }


  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <Link to="./Cam"> <img src={Cam} alt="" /> </Link>
          <img src={Add} alt="" onClick={handleEvent} />
        </div>
        <Search />
      </div>

      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
