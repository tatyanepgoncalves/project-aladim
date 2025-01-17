import { useState } from "react";
import lamp from "./assets/images/lamp-magic.png";
import genie from "./assets/images/genie-lamp.png";
import "./styles/global.scss";

export default function App() {
  const [aladdin, setAladdin] = useState(lamp);

  const changeImage = () => {
    setAladdin(genie);
  };

  return (
    <main>
      <h1>
        &ldquo;Liberte a magia da programação com a lâmpada de Aladdin.&rdquo;
      </h1>
      <img src={aladdin} alt="Image lamp magic" />

      <button onClick={changeImage}>Clique aqui</button>
    </main>
  );
}
