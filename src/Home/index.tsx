import { useEffect, useState } from "react";
import { styles } from "./style";
import { ModalWidthForm } from "../Modal";
import { ListedItems } from "../ItemsPage";
import { Button } from "../Button";
import { Header } from "../Header";
import imagemLista from "../imgs/lista-de-compras.jpg";
import { Necessity } from "../Necessidade";

export const Home = () => {
  const [modal, setModal] = useState(false);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState<string | number>("");
  const [homeState, setHomeState] = useState(true);
  const [items, setItems] = useState<
    { name: string; quantidade: number | string; id: number }[]
  >([]);
  const [mode, setMode] = useState("create");
  const [specificItemId, setSpecificItemId] = useState<number | null>(null);

  const showOrHidden = () => {
    setModal(!modal);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const newItems = [
      ...items,
      {
        name: nome,
        quantidade: quantidade,
        id: Math.floor(Math.random() * 50),
      },
    ];
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
    debugger
    if (items.length > 0) {
      setHomeState(false);
    } else {
      alert("Nenhuma lista foi criada ainda");
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
      setSpecificItemId(itemId);
      setMode("edit");
      setModal(true);
    }
  };

  const itemSubstitute = (e: any) => {
    e.preventDefault();
    const updatedItems = items.map((item) =>
      item.id === specificItemId
        ? { ...item, name: nome, quantidade: quantidade }
        : item
    );
    setItems(updatedItems);
    localStorage.setItem("item", JSON.stringify(updatedItems));
    setModal(false);
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
      <Header
          openModal={() => {
            showOrHidden();
            setMode("create");
          }}
        />
        {homeState ? (
          <>
            <div style={styles.instrucionHome}>
              <div style={{ width: "40%" }}>
                <h1 style={styles.title}>Simplifique suas compras</h1>
                <h2 style={styles.subTitle}>
                  Experimente a praticidade da EasyList para listas de compras
                  eficientes e sem o uso de papel e caneta.
                </h2>
                <div style={{ display: "flex" }}>
                  <Button
                    theme="dark"
                    onClick={() => {
                      showOrHidden();
                      setMode("create");
                    }}
                  >
                    Crie sua primeira lista
                  </Button>
                  <Button theme="light" onClick={seeList}>
                    Visualizar lista já criada
                  </Button>
                </div>
              </div>
              <div style={{ width: "40%", marginLeft: "2%" }}>
                <img
                  src={imagemLista}
                  alt=""
                  style={{ borderRadius: "20px", height:'60vh', width:'80%' }}
                />
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
                showModal={() => {
                  showOrHidden();
                  setMode("edit");
                }}
                mode={mode}
                edit={false}
              />
              <div style={styles.alignedButtons}>
                <Button
                  theme="light"
                  onClick={() => {
                    showOrHidden();
                    setMode("create");
                  }}
                >
                  Adicionar um novo item
                </Button>
                <Button theme="light" onClick={clearAll}>
                  Limpar lista
                </Button>
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
        <Necessity/>
    </>
  );
};
