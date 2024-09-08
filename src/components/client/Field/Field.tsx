import React from "react";

import { styled } from "@/utils";

import * as styles from "./Field.styles";

interface FieldProps {
  icon: JSX.Element;
}

const Field = React.forwardRef<HTMLInputElement, FieldProps & React.ComponentProps<"input">>(({ icon, className, ...delegated }, ref) => (
  <div className={styles.wrapper}>
    <span className={styles.icon}>
      {icon}
    </span>
    <input className={styled(styles.input, className)} ref={ref} {...delegated} />
  </div>
));

export default Field;
