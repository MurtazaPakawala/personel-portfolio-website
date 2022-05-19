import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br /> I am Murtaza
      </SectionTitle>
      <SectionText>Dreamer who gets joy out of building 😇</SectionText>
      <Button onClick={() => (window.location = "#about")}>About Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
