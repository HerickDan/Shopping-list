import { styles } from "./style"

export const Header = () =>{
    return(
        <div style={styles.header}>
            <h1 style={{color:'white'}}>HerickDan</h1>
            <ul style={{color:'white', display:'flex', flexDirection:'row'}} >
                <li>Linked'in</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
            </ul>
        </div>
    )
}