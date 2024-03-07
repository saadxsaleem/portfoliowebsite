import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles_config from "../../Assets/particles/particles";
import "./background.css";

const Background = ({ children }) => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div className="container">
        <div className="tsparticle">
          <Particles
            className="particles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particles_config}
          ></Particles>
        </div>
        <div className="children__Div">{children}</div>
      </div>
    </>
  );
};

export default Background;
