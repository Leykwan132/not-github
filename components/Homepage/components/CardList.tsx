import React from "react";
import { useRecoilValue } from "recoil";

import { userDataState } from "./../../../atoms/userAtoms";
import Card from "./Card";

type Props = {};

const CardList = (props: Props) => {
  const userData = useRecoilValue(userDataState);
  const pinned_array = [0, 1, 2, 3, 4, 5];
  return (
    <div className="grid grid-cols-2 gap-4">
      {pinned_array.map((item, i) => (
        <Card
          key={i}
          status="In-Progress"
          title={userData.repositories.edges[i].node.name}
          description={userData.repositories.edges[i].node.description}
          url={userData.repositories.edges[i].node.url}
          primaryLanguage={
            userData.repositories.edges[i].node.primaryLanguage.name
          }
          primaryLanguageColor={
            userData.repositories.edges[i].node.primaryLanguage.color
          }
        />
      ))}
      <Card addProject />
    </div>
  );
};

export default CardList;
