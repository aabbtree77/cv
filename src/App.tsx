import Header from "./components/Header";
import DX from "./components/DX";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-neutral">
      <div className="mx-auto w-11/12 lg:w-3/5 gap-4 lg:gap-24 flex flex-col items-center text-base-content">
        <Header />
        <DX />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
