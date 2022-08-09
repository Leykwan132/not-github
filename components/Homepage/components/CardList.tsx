import React from "react";
import Card from "./Card";

type Props = {};

const CardList = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card status="In-Progress" />
      <Card status="Done" />
      <Card status="Done" />
      <Card status="On-hold" />

      <Card addProject />
    </div>
  );
};

export default CardList;
