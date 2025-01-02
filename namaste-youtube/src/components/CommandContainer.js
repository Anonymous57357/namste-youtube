import React from "react";

const commentsData = [
  {
    id: "1",
    name: "Level 1",
    text: "This is level 1",
    replies: [
      {
        id: "1-1",
        name: "Level 2",
        text: "This is level 2",
        replies: [
          {
            id: "1-1-1",
            name: "Level 3",
            text: "This is level 3",
            replies: [
              {
                id: "1-1-1-1",
                name: "Level 4",
                text: "This is level 4",
                replies: [
                  {
                    id: "1-1-1-1-1",
                    name: "Level 5",
                    text: "This is level 5",
                    replies: [
                      {
                        id: "1-1-1-1-1-1",
                        name: "Level 6",
                        text: "This is level 6",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Normal Object 1",
    text: "This is a normal object at the root level",
    replies: [],
  },
  {
    id: "3",
    name: "Normal Object 2",
    text: "Another normal object at the root level",
    replies: [],
  },
  {
    id: "4",
    name: "Normal Object 3",
    text: "Third normal object with no replies",
    replies: [],
  },
  {
    id: "5",
    name: "Normal Object 4",
    text: "Fourth normal object with no replies",
    replies: [],
  },
];
const Command = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-200 hover:bg-gray-300 rounded-lg my-1 py-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      ></img>
      <div className="px-3">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const ComandList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Command data={comment} />
      {/* commentts like name and text */}
      <div className="pl-2 border border-l ml-5 border-l-amber-950">
        {/* replies section (nested commands) */}
        <ComandList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommandContainer = () => {
  // data passind form parent to child
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold py-1">Comments:</h1>
      <ComandList comments={commentsData} />
    </div>
  );
};

export default CommandContainer;
