/**
 * Lambda Endpoint: https://ruwmvgzn17.execute-api.us-east-2.amazonaws.com/default/Contact-Me-Form
 * Body Structure: {
 *                    "sender": String, required,
 *                    "message": String, required,
 *                    "email": Email, required,
 *                 }
 */

import React, { useState } from "react";
// Material UI
import { Box, Button, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function ContactForm() {
  const Styles = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box className={Styles.root}>
      <Typography className={Styles.header}>Send Me A Message</Typography>
      <TextField
        id="name"
        label="Name"
        placeholder="Enter your name"
        className={Styles.textbox}
        InputProps={{
          classes: { root: Styles.textboxFont }
        }}
        InputLabelProps={{
          classes: { root: Styles.textboxFont }
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        required
        margin="dense"
      />
      <TextField
        id="email"
        label="Email"
        placeholder="Enter your email"
        className={Styles.textbox}
        InputProps={{
          classes: { root: Styles.textboxFont }
        }}
        InputLabelProps={{
          classes: { root: Styles.textboxFont }
        }}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        required
        margin="dense"
      />
      <TextField
        id="message"
        label="Message"
        placeholder="Enter your message"
        className={Styles.textbox}
        InputProps={{
          classes: { root: Styles.textboxFont }
        }}
        InputLabelProps={{
          classes: { root: Styles.textboxFont }
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        variant="outlined"
        required
        multiline
        margin="dense"
        rows={9}
      />
      <Button
        className={Styles.submitBtn}
        disabled={name === "" || email === "" || message === ""}
      >
        SEND
      </Button>
    </Box>
  );
}

export default ContactForm;

const useStyles = makeStyles({
  root: {
    width: "95%",
    minWidth: "420px",
    display: "flex",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(120,120,120,0.5)",
    borderRadius: "8px",
    margin: "2rem"
  },
  header: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: "2rem",
    alignSelf: "flex-start",
    marginLeft: ".8rem"
  },
  textbox: {
    width: "95%"
  },
  textboxFont: {
    fontFamily: "Lora"
  },
  submitBtn: {
    alignSelf: "flex-end",
    width: "8rem",
    margin: ".8rem 1rem",
    backgroundColor: "#aaa",
    fontFamily: "Montserrat"
  }
});
