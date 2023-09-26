import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <>
        <NavBar />
        <ItemListContainer greetings="Bienvenidos a la pagina oficial de la Black" />
      </>
    </div>
  );
}

export default App;
