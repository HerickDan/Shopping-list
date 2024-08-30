import { styles } from "./style";
import trashIcon from "../icons/icons8-lixeira-50.png";
interface ListKeys {
  name: string;
  quantidade: number;
}

interface Items {
  items?: ListKeys[] ;
  trash: (itemName:string)=>void
}

export const ListedItems = ({ items, trash }: Items) => {
  return (
        <div style={styles.listBox}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Item</th>
                <th style={styles.thQuantidae}>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => {
                const color = index % 2 !== 0 ? "#53b730" : "#88e763";
                return (
                  <tr key={index} style={{ backgroundColor: color}}>
                    <td style={styles.td}>{item.name}</td>
                    <td style={styles.td}>{item.quantidade}</td>
                    <td style={styles.trash}>
                      <button onClick={()=>trash(item.name)} style={styles.trashButton}>
                      <img src={trashIcon} alt="Trash Icon" style={{width:'25px', height:'25px'}}/>
                      </button>
                      </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
  );
};
