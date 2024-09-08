import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const useTimeline = () => {
  const [timeline, setTimeline] = React.useState<GSAPTimeline | null>(null);
  
  useGSAP(() => {
    const timeline = gsap.timeline();
    setTimeline(timeline);
  });

  return timeline;
};

export default useTimeline;
