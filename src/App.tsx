import Header from "./components/Header";
import DX from "./components/DX";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

import "./App.css";

function App() {
  return (
    <div className="bg-neutral">
      <div className="mx-auto flex w-11/12 flex-col items-center gap-8 text-gray-400 2xl:w-3/5 2xl:gap-24">
        <Header />
        <DX />
        <Portfolio />
        <Contact />
        <Details />
        <Footer />
        <Popup
     imageSrc="assets/IronMike.png"
     link="https://www.youtube.com/watch?v=Y183gJQ9yCY&t=20s&ab_channel=MMAMindset"
     message="How can I help you?"
   />
      </div>
    </div>
  );
}

export default App;
