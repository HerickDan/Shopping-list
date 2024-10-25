import { useEffect, useState } from "react";
import { styles } from "./style";
import { Modal } from "../Modal";
import { ListedItems } from "../ItemsPage";
import { Button } from "../components/Button";
import { Header } from "../Header";
import imagemLista from "../imgs/lista-de-compras.jpg";
import { Necessity } from "../Necessidade";
import { Reports } from "../Reports";
import { Form } from "../components/Form";
import { Input } from "../components/Input";

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
    localStorage.setItem("items", JSON.stringify(updatedItems));
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

  const modalTitle = mode === "create" ? "Adicione um item" : "Editar os dados";
  console.log('mode', mode)
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
            <Modal
              modal={modal}
            >
             <>
             { mode === 'create' ? ( 
              <Form style={styles.form} onSubmit={mode === "create" ? onSubmit : itemSubstitute}>
                <h1>{modalTitle}</h1>
                <div style={styles.formGroup}>
                  <label htmlFor="" style={styles.label}>Item:</label>
                  <Input
                    value={nome}
                    onChange={handleChange}
                    name="nome"
                    id="nome"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="quantidade" style={styles.label}>Quantidade:</label>
                  <Input
                    value={quantidade}
                    type="number"
                    name="quantidade"
                    id="quantidade"
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <button type="submit" style={styles.buttonSubmit}>
                  {mode === "create" ? "Adicionar" : "Salvar Alterações"}
                </button>
                <button type="button" onClick={cancelar} style={styles.buttonCancel}>
                  Cancelar
                </button>
             
              </Form> 
              ): null}
              </>
            </Modal>
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
              {mode !== 'create'?(

              <Modal
              modal={modal}
              >
                 <form style={styles.form} onSubmit={(e) => itemSubstitute(e)}>
                <h1>{modalTitle}</h1>
                <div style={styles.formGroup}>
                  <label htmlFor="" style={styles.label}>Item:</label>
                  <input
                    value={nome}
                    id="name"
                    onChange={handleChange}
                    name="nome"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="quantidade" style={styles.label}>Quantidade:</label>
                  <input
                    value={quantidade}
                    type="number"
                    id="quantidade"
                    name="quantidade"
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <button type="submit" style={styles.buttonSubmit}>Salvar Alterações</button>
                <button type="button" onClick={cancelar} style={styles.buttonCancel}>Cancelar</button>
              </form>
              </Modal>
              ): null}
            </section>
          </>
        )}
      </div>
      <Necessity />
      <Reports />
    </>
  );
};
