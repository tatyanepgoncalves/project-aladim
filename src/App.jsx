import { useState } from "react";
import lamp from "./assets/images/lamp-magic.png";
import genie from "./assets/images/genie-lamp.png";
import "./styles/global.scss";

export default function App() {
  const [aladdin, setAladdin] = useState(lamp);
  const [clickCount, setClickCount] = useState(0);

  const changeImage = () => {
    

    const imgElement = document.querySelector("img");
    imgElement.classList.add("fade");
    setTimeout(() => {
      imgElement.classList.remove("fade");
      if (clickCount < 6) {
        setAladdin((prev) => (prev === lamp ? genie : lamp));
        setClickCount((prev) => prev + 1);
      };
    }, 1000)
  };

  return (
    <main>
      <h1>Liberte a magia da programação com lâmpada de Aladdin.</h1>
      <img src={aladdin} alt="Image lamp magic" />

      <button onClick={changeImage}>{clickCount >= 6 ? "Limite atingido" : "Clique aqui"}</button>
    </main>
  );
}
