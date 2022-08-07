import React from "react";
import Card from "./Card";

type Props = {};

const CardList = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />

      <Card addProject />
    </div>
  );
};

export default CardList;
