import React, { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

type Props = {};

const ContributionCalendar = (props: Props) => {
  const [tooltip, showTooltip] = useState(true);

  return (
    <div className="mt-4 mb-20 rounded-lg border border-gray-700 p-6 pb-0 pl-1 ">
      <CalendarHeatmap
        onMouseOver={() => showTooltip(true)}
        onMouseLeave={() => {
          showTooltip(false);
          setTimeout(() => showTooltip(true), 50);
        }}
        showWeekdayLabels={true}
        showOutOfRangeDays={true}
        gutterSize={2}
        startDate={new Date("2022-01-01")}
        endDate={new Date("2022-12-31")}
        values={[
          { date: "2022-01-01", count: 1 },
          { date: "2022-01-22", count: 2 },
          { date: "2022-01-30", count: 3 },
          { date: "2022-11-12", count: 4 },

          // ...and so on
        ]}
        tooltipDataAttrs={(value: any) => {
          if (value.count == null) {
            return {
              "data-tip": `Dude's chilling`,
            };
          }
          return {
            "data-tip": ` ${value.count} contributions on ${value.date}`,
          };
        }}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
      />
      {tooltip && <ReactTooltip backgroundColor="#6e7681" />}
    </div>
  );
};

export default ContributionCalendar;
