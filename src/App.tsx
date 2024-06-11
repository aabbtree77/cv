import Header from "./components/Header";
import DX from "./components/DX";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-neutral">
      <div className="mx-auto flex w-11/12 flex-col items-center gap-8 text-gray-400 lg:w-3/5 lg:gap-24">
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
