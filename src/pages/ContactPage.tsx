import React, { FC } from "react";
import { IContactPage } from "../interfaces/IContactPage";
import { ContactPageContainer } from "../styles/pages/ContactPage";

const ContactPage: FC<IContactPage> = ({ id }) => {
  return <ContactPageContainer id={id}>ContactPage</ContactPageContainer>;
};

export default ContactPage;
