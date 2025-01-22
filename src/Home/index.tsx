import { useContext, useEffect, useState } from "react";
import { styles } from "./style";
import { ModalWithForm } from "../components/ModalWithForm";
import { ListedItems } from "../ItemsPage";
import { Button } from "../components/Button";
import { Header } from "../Header";
import imagemLista from "../imgs/lista-de-compras.jpg";
import { Necessity } from "../Necessidade";
import { Reports } from "../Reports";
import { UserContext } from "../context";

export const Home = () => {
  const {modal, setModal, nome, setNome, quantidade, setQuantidade, homeState, setHomeState} = useContext(UserContext)

  const [items, setItems] = useState<
    { name: string; quantidade: number | undefined; id: number }[]
  >([]);
  const [mode, setMode] = useState<"create" | "edit">("create"); 
  const [specificItemId, setSpecificItemId] = useState<number | undefined>(undefined);

  const showOrHidden = () => {
    setModal(!modal);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItems = [
      ...items,
      {
        name: nome,
        quantidade,
        id: Math.floor(Math.random() * 50),
      },
    ];
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
    setModal(false);
    setNome("");
    setQuantidade(undefined); 
  };

  const cancelar = () => {
    setModal(false);
    setNome("");
    setQuantidade(undefined); 
  };

  const seeList = () => {
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
    setHomeState(updatedItems.length === 0);
  };

  const clearAll = () => {
    localStorage.removeItem("items");
    setItems([]);
    setHomeState(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "nome") {
      setNome(value);
    } else if (name === "quantidade") {
      setQuantidade(value === "" ? undefined : Number(value)); 
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

  const itemSubstitute = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedItems = items.map((item) =>
      item.id === specificItemId
        ? { ...item, name: nome, quantidade }
        : item
    );
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setModal(false);
    setNome("");
    setQuantidade(undefined); 
  };

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(savedItems);
    setHomeState(savedItems.length === 0);
  }, []);

  const modalTitle = mode === "create" ? "Adicione um item" : "Editar os dados";

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
            <section style={styles.instrucionHome}>
              <article style={{ width: "40%" }}>
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
              </article>
              <aside style={{ width: "40%", marginLeft: "2%" }}>
                <img
                  src={imagemLista}
                  alt="Imagem de lista de compras"
                  style={{ borderRadius: "20px", height: "60vh", width: "80%" }}
                />
              </aside>
            </section>
            <ModalWithForm
              modal={modal}
              mode={mode}
              onSubmit={onSubmit}
              onSubmitEdit={itemSubstitute}
              nome={nome}
              quantidade={quantidade}
              handleChange={handleChange}
              cancelar={cancelar}
              modalTitle={modalTitle} // Passando o título
            />
          </>
        ) : (
          <>
            <section style={styles.list}>
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
              {mode !== "create" && (
                <ModalWithForm
                  modal={modal}
                  mode={mode}
                  onSubmit={onSubmit}
                  onSubmitEdit={itemSubstitute}
                  nome={nome}
                  quantidade={quantidade}
                  handleChange={handleChange}
                  cancelar={cancelar}
                  modalTitle={modalTitle} // Passando o título
                />
              )}
            </section>
          </>
        )}
      </div>
      <Necessity />
      <Reports />
    </>
  );
};
