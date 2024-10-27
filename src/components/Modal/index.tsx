import { Form } from "../Form";
import { Input } from "../Input";
import { styles } from "./style"

interface ListKeys {
  name: string
  quantidade: number
  id: number
}

interface Types {
  modal: boolean;
  children:JSX.Element |JSX.Element[];
}

export const Modal = ({
  modal,
  //onSubmit,
  //nome,
  //quantidade,
  //handleChange,s
  children
  //onSubmitEdit,
}: Types) => {

  if (!modal) return null;

  return (
    <div style={styles.generalDiv}>
    <div style={styles.insideBox}>
      {children}
    </div>
  </div>
  )
}
