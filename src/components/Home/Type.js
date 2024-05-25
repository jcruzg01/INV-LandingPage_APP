import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ingenieros de Software",
          "Inovadores",
          "Constructores de soluciones",
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
       deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
