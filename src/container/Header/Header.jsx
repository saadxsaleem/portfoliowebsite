import { Box, Button, IconButton, Stack } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import "./header.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import TwitterIcon from "@mui/icons-material/Twitter";
import SvgDeveloper from "../../Components/svgDeveloper/svgDeveloper";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Web-Developer", "Freelancer"],
    loop: {},
    typeSpeed: 120,
  });

  return (
    /*  <Box
      className="home"
      sx={{
        background: "url(../../Assets/Images/bgWhite.png)",
        backgroundColor: "black",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge ">
          <div className="badge-cmp">
            <p className="p__text">Hello, I am</p>
            <h1 className="h1__name">Saad Saleem</h1>
          </div>

          <div className="tag-cmp">
            <p className="p__text">And I am a Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="div__profile__img"
      >
        <img
          className="profile__img"
          srcSet="/Assets/Images/profile.png"
          alt="Profile-pic"
        />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          srcSet="/Assets/Images/circle.svg"
          alt="circle"
          className="profile__circle"
        />
      </motion.div>

      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="Image__div"
      >
        <div className="img__circle__div div__js">
          <img className="img__app" srcSet="/Assets/Images/node.png" alt="" />
        </div>
        <div className="img__circle__div div__react">
          <img className="img__app" srcSet="/Assets/Images/react.png" alt="" />
        </div>
        <div className="img__circle__div div__redux">
          <img className="img__app" srcSet="/Assets/Images/redux.png" alt="" />
        </div>
      </motion.div>
    </Box> */
    <Box>
      <div className="header__div">
        <motion.div
          whileInView={{ x: [-300, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.6, ease: "linear" }}
          className="badge__div"
        >
          <div className="app__badge ">
            <div className="name__tag">
              <p className="p__text">Hello, I'm</p>
              <h1 className="h1__name">Saad Saleem</h1>
            </div>

            <div className="label__div">
              <h3 className="tag__label">
                A {""} {""}
                <span
                  style={{
                    color: "#66b2ff",
                    transform: " matrix(1, 0, 0, 1, 0, 0)",
                    marginLeft: "5px",
                  }}
                >
                  {text}
                  <Cursor cursorStyle="|" />
                </span>
                <br />
                <p
                  style={{
                    fontSize: "1.5rem",
                    margin: "1.2rem 0 0px",
                    width: "80%",
                  }}
                >
                  If you have a great project that needs some amazing skills,
                  I’m your guy...
                </p>
              </h3>
            </div>

            <div style={{ margin: "1rem 0 1rem" }}>
              <IconButton
                size="large"
                color="primary"
                sx={{ marginLeft: "-2%" }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton size="large" color="primary">
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton size="large" color="primary">
                <TwitterIcon fontSize="large" />
              </IconButton>
            </div>
            <div>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: "#66b2ff",
                  color: "black",
                  "&:hover": {
                    background: "#7C0A02",
                    color: "black",
                  },

                  borderRadius: "15px",
                }}
              >
                Hire Me
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [+300, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: "0.6", ease: "linear" }}
          className="svg__div"
        >
          <div className="svg">
            <SvgDeveloper />
            <div className="circle__div">
              <img
                className="svg__circle"
                src="/Assets/Images/svgcircle-2.png"
                alt=""
              />
            </div>
          </div>
          <div className="Image__div">
            <div className="img__circle__div div__js">
              <img
                className="img__app"
                srcSet="/Assets/Images/node.png"
                alt=""
              />
            </div>
            <div className="img__circle__div div__react">
              <img
                className="img__app"
                srcSet="/Assets/Images/react.png"
                alt=""
              />
            </div>
            <div className="img__circle__div div__redux">
              <img
                className="img__app"
                srcSet="/Assets/Images/redux.png"
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Box>
  );
};

/* const Wrapper = () => {
  return (
    <div>
      <Background>
        <Header />
      </Background>
    </div>
  );
}; */

export default Header;
