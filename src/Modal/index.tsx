import { styles } from "./style";

interface Types {
  titleState: boolean,
  cancelar: ()=>void,
}

export const ModalWidthForm = ({ titleState, cancelar }: Types) => {
  return (
    <>
     {titleState === true ? (
    <div style={styles.generalDiv}>
     
        <div style={styles.insideBox}>
          <form >
            <input />
            <input />
            <input />
            <button type="submit">
              Submeter
            </button>
            <button onClick={cancelar}>
              Cancelar
            </button>
          </form>
        </div>
     
    </div>
     ) : null}
    </>
  );
};
