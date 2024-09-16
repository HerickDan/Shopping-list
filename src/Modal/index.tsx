import { styles } from "./style";

interface ListKeys {
  name: string;
  quantidade: number;
}

interface Types {
  modal: boolean;
  cancelar: () => void;
  onSubmit: (e: any) => void;
  handleChange: (e: any) => void;
  nome?: string;
  quantidade?: number;
  mode?:string,
  item?: ListKeys[];
}

export const ModalWidthForm = ({
  modal,
  cancelar,
  onSubmit,
  nome,
  quantidade,
  handleChange,
  mode,
  item = []
}: Types) => {

  const title = mode == 'create' ? 'Adicione um item' : 'Editar os dados'
  const local = JSON.stringify(localStorage.getItem('items'))
  const [items] = item;
  console.log(mode)
  return (
    <>
      {modal===true ? 
      <div style={styles.generalDiv}>
           <div style={styles.insideBox}>
             <form style={styles.form} onSubmit={onSubmit}>
               <h1>{title}</h1>
               <div style={styles.formGroup}>
                 <label htmlFor="" style={styles.label}>
                   Item:
                 </label>
                 <input
                  value={mode == 'edit' ? 'nome' : nome}
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
           </div>
      </div>
    :null}
    </>
  );
};
