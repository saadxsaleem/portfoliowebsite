import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import "../../App.css";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion } from "framer-motion";
import { Grid, Paper } from "@mui/material";
import WindowComponent from "../Window/Window";

const PropCircular = (value, imgsrc) => {
  const data = {
    percent: value, // is require
    colorSlice: "#00a1ff",
    colorCircle: "none",
    fontColor: "grey",
    fontSize: "1.6rem",
    fontWeight: 400,
    size: 75,
    stroke: 6,
    strokeBottom: 7,
    speed: 60,
    cut: 0,
    fill: "none",
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    styles: {
      background: "url(" + imgsrc + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "35px",
      backgroundPosition: "center",
    },
    round: true,
    number: false,
  };

  return data;
};

const PropCircularNumder = (value) => {
  const data = {
    percent: value, // is require
    colorSlice: "#00a1ff",
    colorCircle: "none",
    fontColor: "grey",
    fontSize: "1.4rem",
    fontWeight: 400,
    size: 75,
    stroke: 6,
    strokeBottom: 7,
    speed: 60,
    cut: 0,
    fill: "none",
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,

    round: true,
    number: true,
  };

  return data;
};

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />

          <TimelineDot sx={{ background: "transparent" }}>
            <motion.img
              whileInView={{ scale: [0, 1.4, 1], opacity: [0, 1, 1] }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              style={{
                width: "70px",
                aspectRatio: "3/3",
                objectFit: "cover",
              }}
              srcSet="/Assets/Images/mernstack.png"
              alt="MernStack"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingTop: "5rem" }}>
          <motion.div
            whileInView={{ x: [-550, -50, 0], opacity: [0, 0.7, 1] }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            <div style={{ width: "80%" }}>
              <WindowComponent>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    backdropFilter: "blur(10px)",

                    background: "transparent",
                    color: "white",
                  }}
                >
                  <h1
                    style={{
                      marginTop: "0",
                      textAlign: "center",
                      marginBottom: "0px",
                      letterSpacing: "2px",
                    }}
                  >
                    Mern Stack
                  </h1>
                  <div className="muibsah" style={{ paddingTop: "3px" }}></div>
                  <div style={{ padding: "0rem 1.5rem 0 ", marginBottom: "0" }}>
                    <p style={{ marginBottom: "5px", textAlign: "left" }}>
                      {"<Detail list={list}>"}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      <hr
                        style={{
                          marginTop: "0px",
                          marginBottom: "0px",
                          marginLeft: "20px",
                          marginRight: "20px",
                        }}
                      />
                      <div>
                        <ul
                          style={{ padding: "0px 5px 0px", lineHeight: "25px" }}
                        >
                          <li>
                            <b>Front-End Development</b>
                          </li>
                          <li>
                            <b>Back-End Development</b>
                          </li>
                          <li>
                            <b>Database Management</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p style={{ marginTop: "5px", textAlign: "left" }}>
                      {"</Detail>"}
                    </p>

                    <Grid container spacing={0} sx={{ marginTop: "18px" }}>
                      <Grid
                        item
                        sm={3}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                          transition={{
                            duration: "0.7",
                            delay: "0.2",
                            ease: "linear",
                          }}
                        >
                          <CircularProgressBar
                            {...PropCircular(95, "/Assets/Images/mongodb3.png")}
                          />
                          <p
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                            }}
                          >
                            95%
                          </p>
                        </motion.div>
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                          transition={{
                            duration: "0.7",
                            delay: "0.2",
                            ease: "linear",
                          }}
                        >
                          <CircularProgressBar
                            {...PropCircular(
                              85,
                              "/Assets/Images/express.js.png"
                            )}
                          />
                          <p
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                            }}
                          >
                            85%
                          </p>
                        </motion.div>
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                          transition={{
                            duration: "0.7",
                            delay: "0.2",
                            ease: "linear",
                          }}
                        >
                          <CircularProgressBar
                            {...PropCircular(90, "/Assets/Images/react.png")}
                          />
                          <p
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                            }}
                          >
                            90%
                          </p>
                        </motion.div>
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                          transition={{
                            duration: "0.7",
                            delay: "0.2",
                            ease: "linear",
                          }}
                        >
                          <CircularProgressBar
                            {...PropCircular(80, "/Assets/Images/node.png")}
                          />
                          <p
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                            }}
                          >
                            80%
                          </p>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
              </WindowComponent>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>

      {/* paper 2 */}

      {/* wordpress */}

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ background: "transparent" }}>
            <motion.img
              whileInView={{ scale: [0, 1.4, 1], opacity: [0, 1, 1] }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              style={{
                width: "70px",
                aspectRatio: "3/3",
                objectFit: "contain",

                background: "white",
                borderRadius: "50%",
              }}
              srcSet="/Assets/Images/Wordpress-Shopify.png"
              alt="API"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingTop: "8rem" }}>
          <motion.div
            whileInView={{ x: [+550, 50, 0], opacity: [0, 0.7, 1] }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            style={{
              display: "flex",
              justifyContent: "center",

              textAlign: "left",
            }}
          >
            <div style={{ width: "80%" }}>
              <WindowComponent>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    backdropFilter: "blur(10px)",
                    background: "transparent",
                    color: "white",
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      marginBottom: "0px",
                      letterSpacing: "2px",
                      marginTop: "0",
                    }}
                  >
                    WordPress & Shopify
                  </h1>
                  <div className="muibsah" style={{ paddingTop: "3px" }}></div>
                  <div style={{ padding: "0rem 1.5rem 0rem " }}>
                    <p style={{ marginBottom: "5px", textAlign: "left" }}>
                      {"<"}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      <hr
                        style={{
                          marginTop: "0px",
                          marginBottom: "0px",
                          marginLeft: "10px",
                          marginRight: "15px",
                        }}
                      />
                      <div>
                        <ul
                          style={{ padding: "0px 5px 0px", lineHeight: "25px" }}
                        >
                          <li>
                            <b>Website Development</b>
                          </li>
                          <li>
                            <b>E-commerce Website</b>
                          </li>
                          <li>
                            <b>Website Redesign</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p style={{ marginTop: "5px", textAlign: "left" }}>{"<"}</p>

                    <Grid container spacing={0} sx={{ marginTop: "18px" }}>
                      <Grid
                        item
                        sm={6}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                          transition={{
                            duration: "0.7",
                            delay: "0.2",
                            ease: "linear",
                          }}
                        >
                          <CircularProgressBar
                            {...PropCircular(
                              94,
                              "/Assets/Images/wordpress.png"
                            )}
                          />
                          <p
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                            }}
                          >
                            94%
                          </p>
                        </motion.div>
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                          transition={{
                            duration: "0.7",
                            delay: "0.2",
                            ease: "linear",
                          }}
                        >
                          <CircularProgressBar
                            {...PropCircular(86, "/Assets/Images/shopify3.png")}
                          />
                          <p
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                            }}
                          >
                            86%
                          </p>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
              </WindowComponent>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ background: "transparent" }}>
            <motion.img
              whileInView={{ scale: [0, 1.4, 1], opacity: [0, 1, 1] }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              style={{
                width: "80px",
                aspectRatio: "3/3",
                objectFit: "contain",
              }}
              srcSet="/Assets/Images/html-css-js-icon2.png"
              alt="API"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ paddingTop: "8rem", paddingBottom: "5rem" }}>
          <motion.div
            whileInView={{ x: [-550, -50, 0], opacity: [0, 0.7, 1] }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            style={{
              display: "flex",
              textAlign: "left",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "80%" }}>
              <WindowComponent>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backdropFilter: "blur(10px)",
                    background: "transparent",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      marginBottom: "0px",
                      letterSpacing: "2px",
                      marginTop: "0",
                    }}
                  >
                    HTML - CSS - JS
                  </h1>
                  <div className="muibsah" style={{ paddingTop: "3px" }}></div>
                  <div
                    style={{ padding: "0rem 1.5rem 0rem ", marginBottom: "0" }}
                  >
                    <p style={{ marginBottom: "5px" }}>{"<ul>"}</p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      <hr
                        style={{
                          marginTop: "0px",
                          marginBottom: "0px",
                          marginLeft: "10px",
                          marginRight: "15px",
                        }}
                      />
                      <div>
                        <ul
                          style={{ padding: "0px 5px 0px", lineHeight: "25px" }}
                        >
                          <li>
                            <b>Website Development</b>
                          </li>
                          <li>
                            <b>Custom Styling</b>
                          </li>
                          <li>
                            <b>User Interface (UI) Enhancement</b>
                          </li>
                          <li>
                            <b>AJAX Integration</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p style={{ marginTop: "5px" }}>{"</ul>"}</p>

                    <Grid container spacing={0} sx={{ marginTop: "18px" }}>
                      <Grid
                        item
                        sm={4}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                          transition={{
                            duration: "0.7",
                            delay: "0.2",
                            ease: "linear",
                          }}
                        >
                          <CircularProgressBar
                            {...PropCircular(91, "/Assets/Images/html.png")}
                          />
                          <p
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                            }}
                          >
                            91%
                          </p>
                        </motion.div>
                      </Grid>
                      <Grid
                        item
                        sm={4}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                          transition={{
                            duration: "0.7",
                            delay: "0.2",
                            ease: "linear",
                          }}
                        >
                          <CircularProgressBar
                            {...PropCircular(85, "/Assets/Images/css.png")}
                          />
                          <p
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                            }}
                          >
                            85%
                          </p>
                        </motion.div>
                      </Grid>
                      <Grid
                        item
                        sm={4}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                          transition={{
                            duration: "0.7",
                            delay: "0.2",
                            ease: "linear",
                          }}
                        >
                          <CircularProgressBar
                            {...PropCircular(90, "/Assets/Images/js.png")}
                          />
                          <p
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                            }}
                          >
                            90%
                          </p>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
              </WindowComponent>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
