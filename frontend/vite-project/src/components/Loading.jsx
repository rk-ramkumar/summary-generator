import React from "react";
import ReactLoading from "react-loading";
const types = [
  "balls",
  "bars",
  "bubbles",
  "cubes",
  "cylon",
  "spin",
  "spinningBubbles",
  "spokes",
];

const getRandomType = () => {
  const randomType = types[Math.floor(Math.random() * types.length)];
  return randomType;
};

const Loading = ({
  color = "#42b883",
  type = getRandomType(),
  isLoading = true,
}) => {
  return (
    <div
      className={`${
        isLoading ? "block" : "hidden"
      } flex justify-center items-center mt-6`}
    >
      <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />;
    </div>
  );
};

export default Loading;
