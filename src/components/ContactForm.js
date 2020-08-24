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
import {
  Box,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import DialogContextText from "@material-ui/core/DialogContentText";
import { makeStyles } from "@material-ui/styles";

function ContactForm() {
  const Styles = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    isValidEmail() ? sendMessage() : setOpen(true);
  };

  const isValidEmail = () => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const sendMessage = () => {
    clearForm();
  };

  const clearForm = () => {
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <Box className={Styles.root}>
      <AlertDialog open={open} setOpen={setOpen} />
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
        value={email}
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
        onClick={handleSubmit}
      >
        SEND
      </Button>
    </Box>
  );
}

export default ContactForm;

function AlertDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Invalid Email"}</DialogTitle>
      <DialogContent>
        <DialogContextText id="alert-dialog-description">
          Please enter a valid email address and try again.
        </DialogContextText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const useStyles = makeStyles({
  root: {
    width: "95%",
    minWidth: "400px",
    display: "flex",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(120,120,120,0.5)",
    borderRadius: "8px",
    margin: "2rem",
    marginTop: "0"
  },
  header: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: "2rem",
    alignSelf: "flex-start",
    marginLeft: ".8rem"
  },
  textbox: {
    width: "95%",
    "& label.Mui-focused": {
      color: "black",
      fontFamily: "Lora"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black"
      },
      "&:hover fieldset": {
        borderColor: "black"
      },
      "&.Mui-focused fieldset": {
        borderColor: "black"
      }
    }
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
