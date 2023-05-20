import React, { FC } from "react";
import { IAboutPage } from "../interfaces/IAboutPage";
import { AboutPageContainer } from "../styles/pages/AboutPage";

const AboutPage: FC<IAboutPage> = ({ id }) => {
  return <AboutPageContainer id={id}>AboutPage</AboutPageContainer>;
};

export default AboutPage;
