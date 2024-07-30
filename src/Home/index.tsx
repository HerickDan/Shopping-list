import React, { useState } from "react";
import { styles } from "./style";
import { ModalWidthForm } from "../Modal";


export const Home = () => {
  const [modalTitle, setModalTitle] = useState(false);

  const showOrHidden = () => {
    modalTitle===false?setModalTitle(true):setModalTitle(false)
  };
  const cancelar = () =>{
    setModalTitle(false)
  } 
  return (
    <>
      <div style={styles.backGround} >
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
     
      <ModalWidthForm titleState={modalTitle} cancelar={cancelar}/>

      </div>
    </>
  );
};
