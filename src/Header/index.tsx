import { styles } from "./style"
import img from "../imgs/carrinho-de-compras.png"
import addToList from "../imgs/icons8-adicionar-a-lista-32.png"

interface Props{
    openModal : () => void
}

export const Header = ({openModal}: Props) =>{
    return(
       <div className="headerComponent" style={styles.headerComponent}>
        <div style={styles.logoBox}>
        <img src={img} style={styles.img}/>
        <h1 className="title" style={styles.title}>
            Easy List
        </h1>
        </div>
        <button style={styles.crateListButton} onClick={openModal}>
            <img src={addToList}/>
            Criar nova lista
        </button>
       </div>
    )
}