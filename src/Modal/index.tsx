import { styles } from "./style";

interface Types {
  modal: boolean;
  cancelar: () => void;
  onSubmit: (e: any) => void;
  handleChange: (e: any) => void;
  nome?: string;
  quantidade?: string;
}

export const ModalWidthForm = ({
  modal,
  cancelar,
  onSubmit,
  nome,
  quantidade,
  handleChange,
}: Types) => {
  return (
    <>
      {modal === true ? (
        <div style={styles.generalDiv}>
          <div style={styles.insideBox}>
            <form style={styles.form} onSubmit={onSubmit}>
              <h1>Adicione um item</h1>
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
          </div>
        </div>
      ) : null}
    </>
  );
};
