import React from "react";

const DX: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 2xl:gap-8 lg:w-3/5">
      <div className="text-2xl lg:text-3xl font-bold text-center">Experience</div>
      <div className="text-base lg:text-xl text-center">
        <p>
        2024 - Now: Web (HTTPS, HTML, CSS, Js, Ts, React, MongoDB, SQL, Docker). 
        </p>
        <br />
        <p>
        2014 - 2024: Embedded software (C, ATmega, ESP32, MQTT, P2P), 3D (OpenGL, Blender), git.
        </p>
        <br />
        <p>
        2000 - 2014: Applied math (Matlab, Scilab, Python).
        </p>
      </div>
    </div>
  );
};
export default DX;
