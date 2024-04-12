import React from "react";
import ReactLoading from "react-loading"
const types = [
  "blank",
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

const Loading = ({color = "#42b883", type = getRandomType()}) => {
  return <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />;
};

export default Loading;
