import React from "react";
// Components
import Contact from "./Contact";
// Material UI
import { Box } from "@material-ui/core";
import SectionHeader from "./SectionHeader";

function ContactPage() {
  return (
    <>
      <SectionHeader title="Contact Me" />
      <Box style={{ display: "flex", flexWrap: "wrap", minWidth: "5rem" }}>
        {CONTACTS.map((contact) => (
          <Contact contact={contact} />
        ))}
      </Box>
    </>
  );
}

export default ContactPage;

const CONTACTS = [
  {
    contactType: "gmail",
    link: "mailto:jeffreyneuberger@gmail.com",
    icon: "gmail.svg",
    message: "email me"
  },
  {
    contactType: "GitHub",
    link: "https://github.com/jeffn12",
    icon: "github.svg",
    message: "my GitHub profile"
  },
  {
    contactType: "LinkedIn",
    link: "https://www.linkedin.com/in/jeffrey-neuberger/",
    icon: "linkedin.svg",
    message: "my LinkedIn profile"
  }
];
