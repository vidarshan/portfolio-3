import React, { FC } from "react";
import { IHomePage } from "../interfaces/IHomePage";
import { HomePageContainer } from "../styles/pages/HomePage";

const HomePage: FC<IHomePage> = ({ id }) => {
  return <HomePageContainer id={id}>HomePage</HomePageContainer>;
};

export default HomePage;
