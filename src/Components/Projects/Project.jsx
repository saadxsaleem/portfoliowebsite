import { Paper } from "@mui/material";
import "./project.css";

const Project = ({ project }) => {
  const { title, description, framework, imgsrc } = project;

  return (
    <div
      style={{
        padding: "1rem 0rem 1rem",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        className="project"
        sx={{
          background: "transparent",
          transition: "all 0.5s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
          className="project__card"
        >
          <img className="project__img" srcSet={imgsrc} alt={title} />

          <div className="project__description">
            <h4 className="project__detail"> {framework}</h4>
            <h4 className="project__detail__2"> ~ {description}</h4>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Project;
