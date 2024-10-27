import { Form } from "../Form";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { styles } from "./styles";

interface ListKeys {
  name: string;
  quantidade: number | string;
  id: number;
}

interface Types {
  modal: boolean;
  mode: "create" | "edit"; 
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void; 
  nome: string;
  quantidade: number | undefined; 
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitEdit?: (event: React.FormEvent<HTMLFormElement>) => void; 
  cancelar?: () => void;
  modalTitle: string;
}

export const ModalWithForm = ({
  modal,
  onSubmit,
  nome,
  quantidade,
  handleChange,
  onSubmitEdit,
  mode,
  modalTitle,
  cancelar,
}: Types) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        if (mode === "create") {
          onSubmit(event); 
        } else if (onSubmitEdit) {
          onSubmitEdit(event); 
        }
      };

  return (
    <Modal modal={modal}>
      <Form style={styles.form} onSubmit={handleSubmit}>
        <h1>{modalTitle}</h1>
        <div style={styles.formGroup}>
          <label htmlFor="nome" style={styles.label}>Item:</label>
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
    </Modal>
  );
};
