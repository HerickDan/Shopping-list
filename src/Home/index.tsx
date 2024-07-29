import React, { useState } from "react";
import shoppingImage from "../imgs/shopping.jpg";
import { styles } from "./style";
import { ModalWidthForm } from "../Modal";


export const Home = () => {
  const [modalTitle, setModalTitle] = useState(false);

  const showOrHidden = () => {
    modalTitle===true?setModalTitle(false):setModalTitle(true)
  };
  return (
    <>
      <div style={styles.backGround}>
        <div>
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
        <ModalWidthForm titleState={modalTitle} />
      </div>
    </>
  );
};
