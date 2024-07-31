
import { styles } from "./style";

interface Types {
  titleState: boolean;
  cancelar: () => void;
  onSubmit: (e:any) =>void,
  name?:string,
  handleChange: (e:any) => void
}

export const ModalWidthForm = ({ titleState, cancelar, onSubmit, name, handleChange }: Types) => {
 
  
  return (
    <>
      {titleState === true ? (
        <div style={styles.generalDiv}>
          <div style={styles.insideBox}>
            <form style={styles.form} onSubmit={onSubmit}>
              <input  value={name} onChange={handleChange} name="name"/>
              <input />
              <input />
              <button type="submit">Submeter</button>
              <button onClick={cancelar}>Cancelar</button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};
