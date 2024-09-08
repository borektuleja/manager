import { useGSAP } from "@gsap/react";

import useTimelineContext from "@/hooks/use-timeline-context";

import * as styles from "./Header.styles";

const Header = () => {
  const timeline = useTimelineContext();

  useGSAP(() => {
    timeline
      ?.delay(0.5)
      ?.fromTo("#app-header-h2", { opacity: 0 }, { opacity: 1, duration: 0.5 })
      ?.fromTo("#app-header-h1", { opacity: 0, y: 16 }, { opacity: 1, delay: 0.5, duration: 0.75, ease: "power4.out" });
  }, [timeline]);

  return (
    <header className={styles.wrapper}>
      <h2 className={styles.h2} id="app-header-h2">
        Rezervace k události
      </h2>
      <h1 className={styles.h1} id="app-header-h1">
        Colliery Made Games 2024 Invitation, aneb slavíme 10 let
      </h1>
    </header>
  );
};

export default Header;
