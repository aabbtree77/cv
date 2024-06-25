import React from "react";

const DX: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 lg:gap-8 lg:w-1/2">
      <div className="text-2xl lg:text-3xl font-bold text-center">Skills</div>
      <div className="text-base lg:text-xl text-justify">
        <p>
          Recently: Frontend/Full-Stack Indie Web Development. HTML, CSS,
          JavaScript, TypeScript, React, Tailwind. A bit of: Git, Docker, SQL,
          MongoDB.
        </p>
        <br />
        <p>
          In the past: C (ATmega, avr-gcc), MicroPython (ESP32, MQTT, routers,
          Linux), Go (golibp2p), C++ (OpenGL).
        </p>
        <br />
        <p>
        More distant past: Python (Matplotlib, PyTorch), Matlab, Scilab, LaTeX, linear algebra, calculus.
        </p>
      </div>
    </div>
  );
};
export default DX;
