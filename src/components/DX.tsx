import React from "react";

const DX: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 2xl:gap-8 2xl:w-3/5">
      <div className="text-2xl lg:text-3xl font-bold text-center">Experience</div>
      <div className="text-base lg:text-xl text-justify">
        <p>
          Recently: indie frontend/full-stack web. HTML, CSS,
          JavaScript, TypeScript, React, Tailwind, Astro. A bit of: Git, Docker, SQL,
          MongoDB.
        </p>
        <br />
        <p>
          In the past: hobby embedded software. C (ATmega, avr-gcc), MicroPython (ESP32, MQTT, routers,
          Linux), Go (golibp2p), C++ (OpenGL).
        </p>
        <br />
        <p>
        More distant past: academic research in machine learning. Python, Matplotlib, PyTorch, Matlab, Scilab, LaTeX, linear algebra, calculus.
        </p>
      </div>
    </div>
  );
};
export default DX;
