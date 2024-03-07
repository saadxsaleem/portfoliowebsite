import { Paper, Skeleton } from "@mui/material";
import "./constructionproject.css";

import LinearProgress from "@mui/material/LinearProgress";
import ConstructionSVG from "../ConstructionSVG/ConstructionSVG";

const ConstructionProject = () => {
  return (
    <div style={{ padding: "1rem 1rem 1rem", height: "100%" }}>
      <Paper
        className="svgproject"
        sx={{
          background: "transparent",
          transition: "all 0.5s ease",
          boxShadow: "1.5px 1.5px 4px  grey",
        }}
      >
        <div className="svg__card">
          <ConstructionSVG />
        </div>
        <LinearProgress
          sx={{ width: "80%", borderRadius: "15px", marginTop: "1rem" }}
          value={80}
          variant="determinate"
        />
        <h3 style={{ color: "white", margin: "3px 0 0" }}>UNDER DEVELOPMENT</h3>
      </Paper>
    </div>
  );
};

export default ConstructionProject;
