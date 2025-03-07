import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMANDS_API } from "../utils/constants";
import CommandContainer from "./CommandContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    fetchCommands();
    dispatch(closeMenu());
  }, []);

  const fetchCommands = async () => {
    try {
      const data = await fetch(YOUTUBE_COMMANDS_API);
      const json = await data.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex">
        <div>
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="ml-1 w-full ">
          <LiveChat />
        </div>
      </div>
      <div className="mt-5">
        <CommandContainer />
      </div>
    </div>
  );
};

export default WatchPage;
