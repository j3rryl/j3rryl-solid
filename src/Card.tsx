import { Component } from "solid-js";

const Card: Component<{ title: string; value: number }> = (props) => {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.value}</div>
    </>
  );
};
export default Card;
