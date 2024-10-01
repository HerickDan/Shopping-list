import { useEffect, useState } from 'react'
import { styles } from "./style"

interface ListKeys {
  name: string
  quantidade: number
  id: number
}

interface Types {
  modal: boolean;
  cancelar: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nome: string;
  onSubmitEdit: (e: React.FormEvent<HTMLFormElement>) => void;
  quantidade: number | string;
  mode?: string;
  item?: ListKeys[];
  findObject?: string;
}

export const ModalWidthForm = ({
  modal,
  cancelar,
  onSubmit,
  nome,
  quantidade,
  handleChange,
  mode,
  onSubmitEdit,
}: Types) => {
  const [fadeOut, setFadeOut] = useState(false)
  const [isVisible, setIsVisible] = useState(modal)
  const title = mode === "create" ? "Adicione um item" : "Editar os dados"

  const handleCancel = () => {
    setFadeOut(true)
    setTimeout(() => {
      setIsVisible(false)
      cancelar()
    }, 150)
  }

  useEffect(() => {
    if (modal) {
      setFadeOut(false)
      setIsVisible(true)
    }
  }, [modal])

  return (
    <>
      {isVisible ? (
        <div style={{ ...styles.generalDiv, animation: fadeOut ? 'fadeOut 0.200s forwards' : 'fadeIn 0.200s forwards' }}>
          <div style={styles.insideBox}>
            {mode === "create" ? (
              <form style={styles.form} onSubmit={onSubmit}>
                <h1>{title}</h1>
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
                <button type="submit" style={styles.buttonSubmit}>Adicionar</button>
                <button type="button" onClick={handleCancel} style={styles.buttonCancel}>Cancelar</button>
              </form>
            ) : (
              <form style={styles.form} onSubmit={(e) => onSubmitEdit(e)}>
                <h1>{title}</h1>
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
                <button type="button" onClick={handleCancel} style={styles.buttonCancel}>Cancelar</button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}
