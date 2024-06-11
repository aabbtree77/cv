import React from "react";

const DX: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 lg:gap-8 lg:w-1/2">
      <div className="text-4xl font-bold text-center">Skills</div>
      <div className="text-2xl text-justify">
      HTML, CSS, JavaScript, TypeScript, React, Tailwind. A bit of git, Docker, SQL, MongoDB. In the past: C
        (ATmega, avr-gcc), MicroPython (ESP32, MQTT, routers, Linux), Go (golibp2p), C++ (OpenGL),
        Python (Matplotlib, PyTorch), Matlab, Scilab, LaTeX.
      </div>
    </div>
  );
};
export default DX;
