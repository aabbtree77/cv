import React, { useState, useEffect } from "react";

const ToggleFont: React.FC = () => {
  const [font, setFont] = useState("font-caveat");

  const toggleFont = () => {
    setFont((prevFont) =>
      prevFont === "font-caveat" ? "font-scp" : "font-caveat"
    );
  };

  useEffect(() => {
    document.body.setAttribute("data-font", font);
  }, [font]);

  return (
    <button
      className="w-3/4 lg:w-1/3 mx-auto text-xl lg:text-2xl btn btn-outline btn-accent"
      onClick={toggleFont}
    >
      Change Font
    </button>
  );
};

export default ToggleFont;
