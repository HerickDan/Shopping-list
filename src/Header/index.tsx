import { styles } from "./style";
import img from "../imgs/carrinho-de-compras.png";
import addToList from "../imgs/cirar_lista.png";

interface Props {
  openModal: () => void;
}

export const Header = ({ openModal }: Props) => {
  return (
    <div className="headerComponent" style={styles.headerComponent}>
      <div style={styles.logoBox}>
        <img src={img} style={styles.img} alt="carrinho de compras" />
        <h1 className="title" style={styles.title}>
          Easy List
        </h1>
      </div>
      <div style={styles.divBotoes}>
        <button style={styles.botaoContato} >
          Entre em contato
        </button>
        <button style={styles.crateListButton} onClick={openModal}>Criar lista</button>
      </div>
    </div>
  );
};
