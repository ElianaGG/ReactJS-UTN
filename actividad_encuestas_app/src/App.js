import "./App.css";
import Encuestas from "./Components/Encuestas";

function App() {
  const encuestas = [
    {
      id: 1,
      pregunta: "¿Cuál es tu color favorito?",
      opciones: ["Rojo", "Azul", "Verde"],
    },
    {
      id: 2,
      pregunta: "¿Cuál es tu comida favorita?",
      opciones: ["Pizza", "Hamburguesa", "Sushi"],
    },
  ];

  return (
    <div className="App">
      <h1>Aplicación de Encuestas</h1>
      <Encuestas encuestas={encuestas} />
    </div>
  );
}

export default App;