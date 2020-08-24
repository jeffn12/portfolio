import React from "react";
import { withRouter } from "react-router-dom";
// Components
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import SectionHeader from "./SectionHeader";
// Material UI
import { Box } from "@material-ui/core";
// Icons
import { gmail, github, linkedin } from "../images";

function ContactPage(props) {
  const { pathname } = props.location;
  return (
    <>
      <SectionHeader title="Contact Me" />
      {(pathname === "/" || pathname === "/contact") && <ContactForm />}
      <Box style={{ display: "flex", flexWrap: "wrap", minWidth: "5rem" }}>
        {CONTACTS.map((contact) => (
          <Contact key={contact.contactType} contact={contact} />
        ))}
      </Box>
    </>
  );
}

export default withRouter(ContactPage);

const CONTACTS = [
  {
    contactType: "gmail",
    link: "mailto:jeffreyneuberger@gmail.com",
    icon: gmail,
    message: "email me"
  },
  {
    contactType: "GitHub",
    link: "https://github.com/jeffn12",
    icon: github,
    message: "my GitHub profile"
  },
  {
    contactType: "LinkedIn",
    link: "https://www.linkedin.com/in/jeffrey-neuberger/",
    icon: linkedin,
    message: "my LinkedIn profile"
  }
];
