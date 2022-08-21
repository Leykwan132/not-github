import React from "react";
import { useRecoilValue } from "recoil";
import { userDataState } from "../../../../../atoms/userAtoms";
import RepoRow from "./RepoRow";

type Props = {};

const status = {
  inProgress: "In-Progress",
  done: "Done",
  onHold: "On-hold",
};

const RepoList = (props: Props) => {
  const userData = useRecoilValue(userDataState);
  return (
    <div className="mt-4">
      {userData.repositories.edges.map((user) => (
        <RepoRow
          title={user.node.name}
          description={user.node.description}
          url={user.node.url}
          primaryLanguage={user.node.primaryLanguage?.name}
          primaryLanguageColor={user.node.primaryLanguage?.color}
          updatedAt={user.node.updatedAt}
          isFork={user.node.isFork}
        />
      ))}
    </div>
  );
};

export default RepoList;
