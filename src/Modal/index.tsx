import { useState } from "react";
import { styles } from "./style";

interface ListKeys {
  name: string;
  quantidade: number;
  id: number;
}

interface Types {
  modal: boolean;
  cancelar: () => void;
  onSubmit: (e: any) => void;
  handleChange: (e: any) => void;
  nome: string;
  onSubmitEdit:(e:any,quantidade:number,  nome: string, )=>void;
  quantidade: number;
  mode?: string;
  item?: ListKeys[];
  findObject?:string;
}

export const ModalWidthForm = ({
  modal,
  cancelar,
  onSubmit,
  nome,
  quantidade,
  handleChange,
  mode,
  findObject,
  onSubmitEdit,
  item = [],
}: Types) => {
  const[nomeEdit, setNomeEdit] = useState('')
  const[quantidadeEdit, setQuantidadeEdit] = useState('')
  const title = mode == "create" ? "Adicione um item" : "Editar os dados";
  return (
    <>
      {modal === true ? (
        <div style={styles.generalDiv}>
          <div style={styles.insideBox}>
            {mode === "create" ? (
              <form style={styles.form} onSubmit={onSubmit}>
                <h1>{title}</h1>
                <div style={styles.formGroup}>
                  <label htmlFor="" style={styles.label}>
                    Item:
                  </label>
                  <input
                    value={nome}
                    id="name"
                    onChange={handleChange}
                    name="nome"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="qunatidade" style={styles.label}>
                    Quantidade:
                  </label>
                  <input
                    value={quantidade}
                    type="number"
                    id="qunatidade"
                    name="quantidade"
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <button type="submit" style={styles.buttonSubmit}>
                  Adicionar
                </button>
                <button onClick={cancelar} style={styles.buttonCancel}>
                  Cancelar
                </button>
              </form>
            ) : (
                <form style={styles.form} onSubmit={((e)=>onSubmitEdit(e, quantidade, nome))} >
                  <h1>{title}</h1>
                  <div style={styles.formGroup}>
                    <label htmlFor="" style={styles.label}>
                      Item:
                    </label>
                    <input
                      value={findObject}
                      id="name"
                      onChange={handleChange}
                      name="nome"
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label htmlFor="qunatidade" style={styles.label}>
                      Quantidade:
                    </label>
                    <input
                      value={0}
                      type="number"
                      id="qunatidade"
                      name="quantidade"
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                  <button type="submit" style={styles.buttonSubmit}>
                    Adicionar
                  </button>
                  <button onClick={cancelar} style={styles.buttonCancel}>
                    Cancelar
                  </button>
                </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};
