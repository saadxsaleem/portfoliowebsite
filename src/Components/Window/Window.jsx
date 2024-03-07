import CircleIcon from "@mui/icons-material/Circle";

const WindowComponent = ({ children }) => {
  return (
    <div style={{ border: "1px solid grey", borderRadius: "25px" }}>
      <div
        style={{
          padding: "1rem 1rem 0.4rem",
          background: "#0C0C0C",
          borderRadius: "28px 28px 0 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <CircleIcon
          sx={{ color: "#ff8096", marginRight: "0.3rem" }}
          fontSize="small"
        />
        <CircleIcon
          sx={{ color: "#ff9c7e", marginRight: "0.3rem" }}
          fontSize="small"
        />
        <CircleIcon
          sx={{ color: "#ffba7f", marginRight: "0.3rem" }}
          fontSize="small"
        />
        <CircleIcon sx={{ color: "#42d5b6" }} fontSize="small" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "rgb(8, 8, 29)",
          padding: "2rem 1.5rem 1.5rem",
          borderRadius: "0 0 28px 28px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default WindowComponent;
