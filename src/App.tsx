import { useState } from "react";
import "./App.css";
import { UserContext } from "./context";
import { Home } from "./Home";
function App() {
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState<number | undefined>(undefined);
  const [homeState, setHomeState] = useState(true);
  const [specificItemId, setSpecificItemId] = useState<number | undefined>(undefined);
  const [items, setItems] = useState<
    { name: string; quantidade: number | undefined; id: number }[]
  >([]);
  const [mode, setMode] = useState<"create" | "edit">("create");
  return (
    <UserContext.Provider
      value={{
        modal,
        setModal,
        nome,
        setNome,
        quantidade,
        setQuantidade,
        homeState,
        setHomeState,
        items,
        setItems,
        specificItemId,
        setSpecificItemId,
        mode, 
        setMode
      }}
    >
      <div className="App">
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default App;
