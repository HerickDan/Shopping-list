import { useState } from 'react';
import './App.css';
import { UserContext } from './context';
import { Home } from './Home';
function App() {
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState<number | undefined>(undefined); 
  const [homeState, setHomeState] = useState(true);
  return (
   <UserContext.Provider value={{modal, setModal, nome, setNome, quantidade, setQuantidade, homeState, setHomeState}}>
    <div className="App">
      <Home/>
    </div>
   </UserContext.Provider>
  );
}

export default App;
