import { useEffect, useState } from "react";
import { styles } from "./style";
import { ModalWidthForm } from "../Modal";
import { ListedItems } from "../ItemsPage";
import { Button } from "../Button";

export const Home = () => {
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [homeState, setHomeState] = useState(true);
  const [items, setItems] = useState<{ name: string; quantidade: number, id:number }[]>(
    []
  );
  const [edit, setEdit] = useState(false)
  const [mode, setMode] = useState('')
  
  const showOrHidden = () => {
    setModal(!modal);
  };
  
  const randomNumber = Math.floor(Math.random()*50)
  const onSubmit = (e: any) => {
    const newItems = [...items,{ name: nome, quantidade: quantidade, id:Math.floor(Math.random()*50) }];
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
    setModal(false);
    setNome("");
    setQuantidade(0);
  };

  const cancelar = () => {
    setModal(false);
  };

  const seeList = () => {
    if (items.length > 0) {
      setHomeState(false);
    } else {
      alert("Nenhum item foi inserido");
      setHomeState(true);
    }
  };



  const trash = (itemName: string) => {
    const updatedItems = items.filter(
      (item: { name: string }) => item.name !== itemName
    );
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setItems(updatedItems);
    if (updatedItems.length === 0) {
      setHomeState(true);
    }
  };

  const clearAll = () => {
    while (items.length > 0) {
      items.pop();
    }
    localStorage.setItem("items", JSON.stringify(items));
    setHomeState(true);
    setItems(items.splice(0, items.length - 1));
  };


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "nome") {
      setNome(value);
    } else if (name === "quantidade") {
      setQuantidade(Number(value));
    }
  };

  const findObject = (name: string) => {
    return items.find(item => item.name === name) || null;
  };

  useEffect(() => {
    setItems([...items,{name: nome, quantidade: quantidade, id:randomNumber}])
    const savedItems = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(savedItems);
    if (savedItems.length > 0) {
      setHomeState(false);
    } else {
      setHomeState(true);
    }
  }, []);

  return (
    <>
      <div style={styles.backGround}>
        {homeState ? (
          <>
            <div style={styles.instrucionHome}>
              <h1 style={styles.title}>Lista de compras</h1>
              <h2 style={styles.subTitle}>
                Organize suas compras com facilidade e eficiência
              </h2>
              <div style={{ width: "40%", display: "flex" }}>
                <Button onClick={()=>{showOrHidden(); setMode('create')}}>Adicionar Item</Button>
                <Button onClick={seeList}>Visualizar Item</Button>
              </div>
            </div>
            <ModalWidthForm
              modal={modal}
              nome={nome}
              quantidade={quantidade}
              handleChange={handleChange}
              cancelar={cancelar}
              onSubmit={onSubmit}
              mode={mode}
              findObject ={findObject}
            />
          </>
        ) : (
          <>
            <div style={styles.list}>
              <ListedItems 
              items={items} 
              trash={trash} 
              edit={edit} 
              showModal={()=>{showOrHidden(); setMode('edit')}} 
              mode={mode}
              findObject={findObject}/>
              <div style={styles.alignedButtons}>
                <Button onClick={()=>{showOrHidden(); setMode('create')}}>Adicionar um novo item</Button>
                <Button onClick={clearAll}>Limpar lista</Button>
              </div>
              <ModalWidthForm
                mode={mode}         
                modal={modal}
                nome={nome}
                quantidade={quantidade}
                handleChange={handleChange}
                cancelar={cancelar}
                onSubmit={onSubmit}
                item={items}
                findObject ={findObject}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
