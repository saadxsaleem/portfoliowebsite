import React from "react";
import AppWrapper from "../../Wrapper/AppWrapper";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import "./work.css";
import Project from "../../Components/Projects/Project";
import { Grid } from "@mui/material";
import ConstructionProject from "../../Components/ConstructionProject/ConstructionProject";
import WindowComponent from "../../Components/Window/Window";
const Work = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayContent, setdisplayContent] = useState(false);
  const controls = useAnimation();
  var LoadScreen = async function () {};

  const AllProjects = [
    {
      title: "TUGVAN",
      framework: "MERN",
      description: "Web Application",
      imgsrc: "Assets/Images/tugvan.png",
    },
    {
      title: "Servemax",
      framework: "React",
      description: "Single Page Website",
      imgsrc: "Assets/Images/Servemax.png",
    },
    {
      title: "Fleetily",
      framework: "HTML/CSS/JS",
      description: "Complete Website 5+ Pages",
      imgsrc: "Assets/Images/Fleetily.png",
    },
    {
      title: "Royal Tag",
      framework: "Mern",
      description: "Cloned E-Commerce Website",
      imgsrc: "Assets/Images/royaltag.png",
    },
  ];

  /*  useEffect(() => {
    LoadScreen = async () => {
      await controls.start({ scale: [0, 1], opacity: [0, 1] });
      setIsLoaded(true);
      setTimeout(() => {
        controls.start({ y: [0, -250] });
        setdisplayContent(true);
      }, 2000);
    };
    LoadScreen();
  }, [controls]); */

  return (
    <div
      style={{
        marginTop: "2rem",
        background:
          "radial-gradient(circle, rgba(8,12,37,1) 22%, rgba(1,0,29,1) 100%)",
        padding: "5rem 2rem 5rem",
        minHeight: "100vh",
        position: "relative",
        width: "100%",
        boxShadow: "0px 1px 4rem  #0C0C0C",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginBottom: "1.5rem",
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
            Featured Website Projects
          </h1>
          <motion.div
            whileInView={{ width: [0, 1150], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.6, ease: "linear" }}
            className="muibsah"
            style={{ paddingTop: "3px" }}
          ></motion.div>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: "0.8", delay: "0.7", ease: "linear" }}
        style={{ color: "white", width: "100%", padding: "3rem 2rem 1rem" }}
      >
        <Grid container spacing={0} sx={{ rowGap: "2rem" }}>
          {AllProjects.map((project, index) => (
            <Grid item md={4} key={index}>
              <Project project={project} />
            </Grid>
          ))}

          <Grid item md={4}>
            <ConstructionProject />
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
};

export default Work;
