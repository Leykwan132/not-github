import React from "react";
import RepoRow from "./RepoRow";

type Props = {};

const RepoList = (props: Props) => {
  return (
    <div className="mt-4">
      <RepoRow />
      <RepoRow />
      <RepoRow />
      <RepoRow />
      <RepoRow />
      <RepoRow />
      <RepoRow />
      <RepoRow />
    </div>
  );
};

export default RepoList;
