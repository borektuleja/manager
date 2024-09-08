import React from "react";

export const TimelineContext = React.createContext<GSAPTimeline | null>(null);

const useTimelineContext = () => {
  const timeline = React.useContext(TimelineContext);
  return timeline;
};

export default useTimelineContext;
