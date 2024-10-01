import { useEffect, useState } from "react";
import { styles } from "./style";
import { ModalWidthForm } from "../Modal";
import { ListedItems } from "../ItemsPage";
import { Button } from "../Button";

export const Home = () => {
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState<string | number>("")
  const [homeState, setHomeState] = useState(true);
  const [items, setItems] = useState<{ name: string; quantidade: number | string; id: number }[]>([]);
  const [mode, setMode] = useState("create");
  const [specificItemId, setSpecificItemId] = useState<number | null>(null)

  const showOrHidden = () => {
    setModal(!modal);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const newItems = [...items, { name: nome, quantidade: quantidade, id: Math.floor(Math.random() * 50) }];
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
    setModal(false);
    setNome("");
    setQuantidade(0);
  };

  const cancelar = () => {
    setModal(false);
    setNome("");
    setQuantidade(0);
  };

  const seeList = () => {
    if (items.length > 0) {
      setHomeState(false);
    } else {
      alert("Nenhum item foi inserido");
      setHomeState(true);
    }
  };

  const trash = (itemId: number) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setItems(updatedItems);
    if (updatedItems.length === 0) {
      setHomeState(true);
    }
  };

  const clearAll = () => {
    localStorage.removeItem("items");
    setItems([]);
    setHomeState(true);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "nome") {
      setNome(value);
    } else if (name === "quantidade") {
      setQuantidade(Number(value));
    }
  };

  const editItem = (itemId: number) => {
    const itemToEdit = items.find((item) => item.id === itemId);
    if (itemToEdit) {
      setNome(itemToEdit.name);
      setQuantidade(itemToEdit.quantidade);
      setSpecificItemId(itemId)
      setMode("edit");
      setModal(true);
    }
  };

  const itemSubstitute = (e: any) => {
    e.preventDefault()
    const updatedItems = items.map((item)=>
      item.id === specificItemId ? {...item, name:nome, quantidade: quantidade} : item
    );
    setItems(updatedItems)
    localStorage.setItem('item', JSON.stringify(updatedItems));
    setModal(false)
  };

  useEffect(() => {
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
              <h2 style={styles.subTitle}>Organize suas compras com facilidade e eficiência</h2>
              <div style={{ width: "40%", display: "flex" }}>
                <Button onClick={() => { showOrHidden(); setMode('create'); }}>Adicionar Item</Button>
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
              onSubmitEdit={itemSubstitute}
              mode={mode}
            />
          </>
        ) : (
          <>
            <div style={styles.list}>
              <ListedItems
                  items={items}
                  trash={trash}
                  editItem={editItem}
                  showModal={() => { showOrHidden(); setMode('edit'); } }
                  mode={mode} 
                  edit={false}             
                   />
              <div style={styles.alignedButtons}>
                <Button onClick={() => { showOrHidden(); setMode('create'); }}>Adicionar um novo item</Button>
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
                onSubmitEdit={itemSubstitute}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
