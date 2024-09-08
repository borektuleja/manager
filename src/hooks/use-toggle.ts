import React from "react";

const useToggle = () => {
  const [on, setOn] = React.useState(false);
  const toggle = (state?: boolean) => setOn((current) => state ?? !current);
  return { on, toggle };
};

export default useToggle;
