import { useState } from "react";
import reactLogo from "./assets/react.svg";

function PokemonRow(props) {
  console.log(props);
  return (
    <div>
      {props.name} <button> X</button>
    </div>
  );
}

function PokemonList(props) {
  return (
    <div>
      {props.list.map((pokemon) => (
        <PokemonRow name={pokemon.name} id={pokemon.id} />
      ))}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const API = [
    { name: "pikachu", id: 25 },
    { name: "charmander", id: 4 },
  ];
  return (
    <div className="App">
      <PokemonList list={API} />
    </div>
  );
}

export default App;
