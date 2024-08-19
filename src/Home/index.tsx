import { useState } from "react";
import { styles } from "./style";
import { ModalWidthForm } from "../Modal";
import { ListedItems } from "../ItemsPage";

export const Home = () => {
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [homeState, setHomeState] = useState(true);
  const [items, setItems] = useState<{ name: string; quantidade: number }[]>(
    []
  );

  const showOrHidden = () => {
    modal === false ? setModal(true) : setModal(false);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setModal(false);
    setItems([...items, { name: nome, quantidade: quantidade }]);
  };

  const cancelar = () => {
    setModal(false);
  };

  const seeList = () => {
    if (items.length > 0) {
      setHomeState(false);
    } else {
      window.alert("Nenhum item foi inserido na lista");
    }
  };

  const backToHome = () => {
    setHomeState(true);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "nome") {
      setNome(value);
    } else if (name === "quantidade") {
      setQuantidade(value);
    }
  };

  return (
    <>
      <div style={styles.backGround}>
        {homeState === true ? (
          <div style={styles.instrucionHome}>
            <h1 style={styles.title}>Lista de compras</h1>
            <h2 style={styles.subTitle}>
              Organize suas compras com facilidade e eficiência
            </h2>
            <div>
              <button style={styles.addItemButton} onClick={showOrHidden}>
                Adicionar Item
              </button>
              <button style={styles.viewListButton} onClick={seeList}>
                Visualizar Item
              </button>
            </div>
            <ModalWidthForm
              modal={modal}
              nome={nome}
              quantidade={quantidade}
              handleChange={handleChange}
              cancelar={cancelar}
              onSubmit={onSubmit}
            />
          </div>
        ) : (
          <>
           <div style={styles.list}>
              <ListedItems items={items} openModal={showOrHidden} />
              <button style={styles.addMoreItemButton} onClick={showOrHidden}>Adicionar um novo item</button>
              <ModalWidthForm
              modal={modal}
              nome={nome}
              quantidade={quantidade}
              handleChange={handleChange}
              cancelar={cancelar}
              onSubmit={onSubmit}
            />  
           </div>
          </>
        )}
        
      </div>
    </>
  );
};
