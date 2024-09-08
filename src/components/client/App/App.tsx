import { useGSAP } from "@gsap/react";
import { CalendarDays, CircleCheck, LandPlot, Mail, Phone, User, Users } from "lucide-react";

import Button from "@/components/client/Button";
import Field from "@/components/client/Field";
import Navbar from "@/components/client/Navbar";
import Tag from "@/components/client/Tag";
import Textarea from "@/components/client/Textarea";

import useTimeline from "@/hooks/use-timeline";
import { TimelineContext } from "@/hooks/use-timeline-context";

import * as styles from "./App.styles";
import Header from "./Header";

const App = () => {
  const timeline = useTimeline();

  useGSAP(() => {
    timeline
      ?.fromTo("#app-tags", { opacity: 0, x: -64 }, { opacity: 1, x: 0, duration: 0.5 })
      ?.fromTo("#app-paragraph", { opacity: 0, x: 64 }, { opacity: 1, x: 0, duration: 0.5 })
      ?.fromTo("#app-form", { opacity: 0, y: 64 }, { opacity: 1, y: 0, duration: 0.5 });
  }, [timeline]);

  return (
    <TimelineContext.Provider value={timeline}>
      <div className={styles.wrapper}>
        <Navbar />
        <section className={styles.content}>
          <Header />
          <div className={styles.tags} id="app-tags">
            <Tag icon={<CalendarDays />} label="14. 9. 2024" />
            <Tag icon={<Users />} label="34" />
            <Tag icon={<LandPlot />} label="Colliery CrossFit Ostrava" />
            <Tag icon={<CircleCheck />} label="Neomezená kapacita" />
          </div>
          <p className={styles.paragraph} id="app-paragraph">
            Pro vytvoření rezervace na událost vyplňte následující formulář. Odesláním formuláře souhlasíte se zpracováním vašich osobních údajů v souladu s GDPR.
          </p>
          <form className={styles.form} id="app-form">
            <Field icon={<User />} type="text" placeholder="Vaše jméno a příjmení" required />
            <Field icon={<Mail />} type="email" placeholder="Váš e-mail" required />
            <Field icon={<Phone />} type="tel" placeholder="(+420) XXX-XXX-XXX" />
            <Textarea placeholder="Poznámka k registraci" rows={4} />
            <Button>Vytvořit rezervaci</Button>
          </form>
        </section>
      </div>
    </TimelineContext.Provider>
  );
};

export default App;
