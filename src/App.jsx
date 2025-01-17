import { useState } from "react";
import Lamp from "./assets/images/lamp-magic.png";
import genie from "./assets/images/genie-lamp.png";
import "./styles/global.scss";

export default function App() {
  const [] = useState();

  return (
    <main>
      <h1>&ldquo;Liberte a magia da programação com a lâmpada de Aladim.&rdquo;</h1>
      <img src={Lamp} alt="Image lamp magic" />

      <button>
        Clique aqui
      </button>
    </main>
  )
}