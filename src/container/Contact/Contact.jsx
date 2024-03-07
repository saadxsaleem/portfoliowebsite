import { Box, Button, Grid, TextField } from "@mui/material";
import "./contact.css";
import AppWrapper from "../../Wrapper/AppWrapper";
import CircleIcon from "@mui/icons-material/Circle";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import WindowComponent from "../../Components/Window/Window";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const Contact = () => {
  const [EmailContent, setEmailContent] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [validEmailError, setvalidEmailError] = useState(false);

  const ref = useRef();

  const [success, setsuccess] = useState(false);

  const sendEmail = (e) => {
    setEmailError(false);
    setMessageError(false);
    setNameError(false);
    setvalidEmailError(false);
    e.preventDefault();

    const { name, email, message } = EmailContent;

    if (
      name == "" ||
      email == "" ||
      message == "" ||
      !email.match(emailRegex)
    ) {
      if (name == "") setNameError(true);

      if (email == "") setEmailError(true);

      if (!email.match(emailRegex)) setvalidEmailError(true);

      if (message == "") setMessageError(true);

      return;
    } else {
      emailjs
        .sendForm(
          "service_d3ht6p8",
          "template_4bm9bdy",
          ref.current,
          "OX3_rNmRje02XxHB1"
        )
        .then(
          (result) => {
            console.log(result.text);
            setsuccess(true);
            setEmailContent({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log(error.text);
            setsuccess(false);
          }
        );
    }
  };

  return (
    <div
      className="Contact"
      style={{ marginTop: "3rem", padding: "2rem 6rem 5rem" }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginBottom: "2.5rem",
          alignItems: "center",
        }}
      >
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.2, ease: "linear" }}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "1.5rem",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              letterSpacing: "5px",
              marginTop: "0",
              color: "white",
              fontSize: "3rem",
              marginBottom: "0",
              textTransform: "uppercase",
            }}
          >
            So about your new website...
          </h1>
          <motion.div
            whileInView={{ width: [0, 1150], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.6, ease: "linear" }}
            className="muibsah"
            style={{ paddingTop: "3px" }}
          ></motion.div>
        </motion.div>
        <div className="title__detail__div">
          <p className="title_detail">
            I hope that's not too presumptive of me. But initial consultations
            are free, so you really don't have much to lose. And everything to
            gain.
          </p>
        </div>
      </div>

      <Grid container>
        <Grid
          item
          sm={5}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            className="svg__contact"
            srcSet="/Assets/Images/contact-img.svg"
            alt="Contactsvg"
          />
        </Grid>
        <Grid item sm={1}>
          <div></div>
        </Grid>
        <Grid item sm={6}>
          <WindowComponent>
            <Box
              component="form"
              ref={ref}
              noValidate
              autoComplete="off"
              onSubmit={sendEmail}
            >
              <TextField
                label="Name"
                required
                variant="filled"
                fullWidth
                margin="dense"
                error={nameError}
                helperText={nameError ? "PLease Enter Your Name" : ""}
                sx={{
                  borderRadius: "10px",
                }}
                InputProps={{
                  style: {
                    background: "rgb(237, 242, 248, 0.6)",
                  },
                }}
                name="name"
                value={EmailContent.name}
                onChange={(e) => {
                  setEmailContent({ ...EmailContent, name: e.target.value });
                }}
              />

              <TextField
                label="Email"
                required
                variant="filled"
                fullWidth
                type="email"
                margin="dense"
                error={emailError || validEmailError}
                helperText={
                  emailError
                    ? "PLease Enter Your Email"
                    : validEmailError
                    ? "Please Enter A Valid Email"
                    : ""
                }
                sx={{
                  borderRadius: "10px",
                }}
                InputProps={{
                  style: {
                    background: "rgb(237, 242, 248, 0.6)",
                  },
                }}
                name="email"
                value={EmailContent.email}
                onChange={(e) => {
                  setEmailContent({ ...EmailContent, email: e.target.value });
                }}
              />
              <TextField
                label="Message"
                variant="filled"
                required
                fullWidth
                margin="dense"
                multiline
                error={messageError}
                helperText={messageError ? "Message Cannot Be Empty" : ""}
                rows={4}
                sx={{
                  borderRadius: "10px",
                }}
                InputProps={{
                  style: {
                    background: "rgb(237, 242, 248, 0.6)",
                  },
                }}
                name="message"
                value={EmailContent.message}
                onChange={(e) => {
                  setEmailContent({ ...EmailContent, message: e.target.value });
                }}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: "1.5rem" }}
              >
                Submit
              </Button>

              {success && (
                <div style={{ color: "white" }}>Your message is sent</div>
              )}
            </Box>
          </WindowComponent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
