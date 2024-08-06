import { useEffect, useState } from "react";
import { styles } from "./style";
import { ModalWidthForm } from "../Modal";

export const Home = () => {
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const [items, setItems] = useState<{ name: string; quantidade: string }[]>(
    []
  );
  const showOrHidden = () => {
    modal === false ? setModal(true) : setModal(false);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setModal(false);
    setItems([...items, { name: nome, quantidade: quantidade }]);
    console.log(items);
  };
  const cancelar = () => {
    setModal(false);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

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
        <div style={styles.instrucionHome}>
          <h1 style={styles.title}>Lista de compras</h1>
          <h2 style={styles.subTitle}>
            Organize suas compras com facilidade e eficiência
          </h2>
          <div>
            <button style={styles.addItemButton} onClick={showOrHidden}>
              Adicionar Item
            </button>
            <button style={styles.viewListButton}>Visualizar Item</button>
          </div>
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
    </>
  );
};
