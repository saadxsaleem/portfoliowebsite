import React, { useState } from "react";
import { motion } from "framer-motion";

import "./about.css";
import AppWrapper from "../../Wrapper/AppWrapper";
import { Grid, Paper } from "@mui/material";
import { Padding } from "@mui/icons-material";
import TimelineSection from "../../Components/TimelineSection/TimelineSection";

const Aboutme = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2rem",
        width: "100%",
        padding: "4rem 1rem 4rem",
      }}
    >
      <motion.div
        whileInView={{ y: [-80, -30, 0], opacity: [0, 0.5, 1] }}
        transition={{ duration: "0.7", delay: "0.1", ease: "easeOut" }}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "2rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            letterSpacing: "5px",
            wordSpacing: "4px",
            marginTop: "0",
            color: "white",
            fontSize: "3rem",
            marginBottom: "0",
            textTransform: "uppercase",
          }}
        >
          Distinctive Abilities
        </h1>
        <motion.div
          whileInView={{ width: [0, 1150], opacity: [0, 1] }}
          transition={{ duration: "0.8", delay: "0.8", ease: "linear" }}
          className="muibsah"
          style={{ paddingTop: "3px" }}
        ></motion.div>
      </motion.div>
      <div className="title__detail__div">
        <motion.p
          className="title_detail"
          whileInView={{ x: [-50, -10, 0], opacity: [0, 0.5, 1] }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          The rumors are true. I design and develop innovative websites that wow
          your ideal clients. <br /> Whatever your needs are, I can pretty much
          take on any challenge.
        </motion.p>
      </div>
      <TimelineSection />
    </motion.div>
  );
};

/* export default AppWrap(
  MotionWrap(Aboutme, "app__about"),
  "about",
  "app__whitebg"
); */

export default Aboutme;

{
  /* <h2 className="head-text">
        I Know that a <span className="head__text__span">Good Design</span>{" "}
        <br />
        means <span className="head__text__span">Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img
              className="About__img"
              srcSet={about.imgurl}
              alt={about.title}
            />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div> */
}
