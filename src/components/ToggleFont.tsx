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
      className="text-lg 2xl:text-2xl btn btn-outline btn-accent"
      onClick={toggleFont}
    >
      Change Font
    </button>
  );
};

export default ToggleFont;
