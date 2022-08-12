import React from "react";
import ActivityOverview from "../ActivityOverview";
import CardList from "../CardList";
import ContributionCalendar from "../ContributionCalendar";

type Props = {};

const Overview = (props: Props) => {
  return (
    <>
      <div className="mt-6 flex flex-col text-gray-400">
        <h1 className="mb-3">Popular repositories</h1>
        {/* CardList component */}
        <CardList />
      </div>
      <p className="mt-6 text-gray-300 ">Total Contribution in 2022</p>
      <ContributionCalendar />
      <ActivityOverview />
    </>
  );
};
export default Overview;
