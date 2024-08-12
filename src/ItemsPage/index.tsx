import { styles } from "./style";

interface ListKeys {
  name: string;
  quantidade: number;
}
interface Items {
  items: ListKeys[];
  backToHome: () =>void;
}
export const ListedItems = ({ items, backToHome }: Items) => {
  return (
    <div style={styles.backGround}>
        <>
          <div style={styles.tableBox}>
            <table style={styles.table} >
              <th style={styles.th}>Item</th>
              <th style={styles.thQuantidae}>Quantidade</th>
              {items.map((item) => (   
              <tr style={styles.tableRow}>
                <td style={styles.td}>{item.name }</td>
                <td style={styles.td}>{item.quantidade}</td>
                <td style={styles.trash}>Trash</td>
              </tr>
              ))}
            </table>
          </div>
          <button onClick={backToHome}>
                Back to Home
          </button>
        </>
    </div>
  );
};
