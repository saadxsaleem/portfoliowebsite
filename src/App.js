import "./App.css";

import Skills from "./container/Skills/Skills";
import Work from "./container/Work/Work";
import Footer from "./container/Footer/Footer";
import Aboutme from "./container/Aboutme/Aboutme";
import Header from "./container/Header/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/background/Background";
import Contact from "./container/Contact/Contact";

function App() {
  return (
    <div
      className="App "
      style={{
        /*  background: "#100e17", */ // 0C0C0C 151718 151515
        overflowX: "hidden",
      }}
    >
      <div>
        <Navbar />
      </div>

      <Background>
        <Header />
      </Background>

      <div className="muibsah"></div>

      <Aboutme />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
