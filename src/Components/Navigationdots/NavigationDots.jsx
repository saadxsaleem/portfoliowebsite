import "./Navigation.css";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
        />
      ))}
    </div>
  );
};

export default NavigationDots;

{
  /* <div className="app__navigation">
      {["home", "about", "skills", "work", "contact"].map((item, index) => {
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />;
      })}
    </div> */
}
