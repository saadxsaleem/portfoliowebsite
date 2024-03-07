import NavigationDots from "../Components/Navigationdots/NavigationDots";
import "./AppWrapper.css";

const AppWrapper = (Component, idName) =>
  function HOC() {
    return (
      <div id={idName}>
        <div>
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
