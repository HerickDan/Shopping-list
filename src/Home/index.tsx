import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { ModalWidthForm } from "../Modal";

export const Home = () => {
  const [modalTitle, setModalTitle] = useState(false);

  const showOrHidden = () => {
    modalTitle === false ? setModalTitle(true) : setModalTitle(false);
  };
  
  const [list, setList] = useState({ 
    name: '', 
    item: '', 
    quantidade: '' });
    
    const [itemList, setItemList] = useState([{name:list.name}])
    
    const onSubmit = (e:any) =>{
      e.preventDefault()
      setItemList({name:list.name})
      console.log(itemList)
    }
  const cancelar = () => {
    setModalTitle(false);
  };
  const handleChange = (e:any) =>{
    const {name, value} = e.target
    setList(prevList => ({ ...prevList, [name]: value }));
  }



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
        titleState={modalTitle} 
        cancelar={cancelar} 
        onSubmit={onSubmit}
        name={list.name}
        handleChange = {handleChange}
        />
      </div>
    </>
  );
};
