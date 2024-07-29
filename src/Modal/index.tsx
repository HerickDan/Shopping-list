import { styles } from "./style";

interface Types {
  titleState: boolean;
}

export const ModalWidthForm = ({ titleState }: Types) => {
  return (
    <div>
      {titleState === true ? (
        <div style={styles.insideBox}>
          <form>
            <input />
            <input />
            <input />
            <button></button>
          </form>
        </div>
      ) : null}
    </div>
  );
};
