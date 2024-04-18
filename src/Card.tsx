import { Component } from "solid-js";

const CardComponent: Component<{ title: string; value: number }> = (props) => {
  return (
    <>
      <div class=" text-red-700">{props.title}</div>
      <div>{props.value}</div>
    </>
  );
};
export default CardComponent;
