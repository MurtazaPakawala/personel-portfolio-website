import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Murtaza</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/MurtazaPakawala">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/murtaza-pakawala-463760100/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
