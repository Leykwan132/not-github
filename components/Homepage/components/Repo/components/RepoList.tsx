import React from "react";
import RepoRow from "./RepoRow";

type Props = {};

const status = {
  inProgress: "In-Progress",
  done: "Done",
  onHold: "On-hold",
};

const RepoList = (props: Props) => {
  return (
    <div className="mt-4">
      <RepoRow status={status.inProgress} />
      <RepoRow status={status.done} />
      <RepoRow status={status.onHold} />
      <RepoRow status={status.done} />
      <RepoRow status={status.inProgress} />
      <RepoRow status={status.onHold} />
      <RepoRow status={status.inProgress} />
      <RepoRow status={status.onHold} />
    </div>
  );
};

export default RepoList;
