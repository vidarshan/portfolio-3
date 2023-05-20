import React, { FC } from "react";
import { ITestimonialage } from "../interfaces/ITestimonialPage";
import { TestimonialPageContainer } from "../styles/pages/TestimonialPage";

const TestimonialPage: FC<ITestimonialage> = ({ id }) => {
  return <TestimonialPageContainer id={id}>TestimonialPage</TestimonialPageContainer>;
};

export default TestimonialPage;
