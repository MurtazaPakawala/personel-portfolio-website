import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="projects" nopadding>
    <SectionDivider />
    <SectionTitle main> Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source }) => (
        <BlogCard>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag>{tag}</Tag>
                ))}
              </TagList>
            </TitleContent>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>github repo</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
