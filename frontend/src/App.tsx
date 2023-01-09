import { useState } from "react";
import reactLogo from "./assets/react.svg";

function PokemonRow(props) {
  return (
    <div>
      {props.name}
      <button onClick={() => props.handleDelete(props.id)}> X</button>
    </div>
  );
}

function PokemonList(props) {
  console.log(props);
  return (
    <div>
      {props.list.map((pokemon) => (
        <PokemonRow
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
}

function App() {
  const [list, setList] = useState([
    { name: "pikachu", id: 25 },
    { name: "charmander", id: 4 },
  ]);
  console.log(list);
  function handleDelete(id) {
    const newList = list.filter((pokemon) => pokemon.id != id);
    setList(newList);
  }
  return (
    <div className="App">
      {/* <PokemonList list={list} handleDelete={handleDelete} /> */}
      {PokemonList({ list, handleDelete })}
    </div>
  );
}

export default App;
