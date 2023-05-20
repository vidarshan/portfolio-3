import React, { FC } from "react";
import { IWorkPage } from "../interfaces/IWorkPage";
import { WorkPageContainer } from "../styles/pages/WorkPage";

const WorkPage: FC<IWorkPage> = ({ id }) => {
  return <WorkPageContainer id={id}>WorkPage</WorkPageContainer>;
};

export default WorkPage;
