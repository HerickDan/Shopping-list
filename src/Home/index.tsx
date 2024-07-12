import shoppingImage from '../imgs/shopping.jpg'
import { styles } from './style'

export const Home = () =>{
 return(
    <>
    <div style={styles.backGround}>
        <div>
        <h1 style={styles.title}>Lista de compras</h1>
        <h2 style={styles.subTitle}>Organize suas compras com facilidade e eficiência</h2>
        <div>
        <button style={styles.addItemButton}>Adicionar Item</button>
        <button style={styles.viewListButton}>Vizualizar Item</button>
        </div>
        </div>
    </div>
</>
 )
}