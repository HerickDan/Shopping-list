import { styles } from "./style";
import trashIcon from "../icons/icons8-lixeira-50.png";
interface ListKeys {
  name: string;
  quantidade: number | string;
  id:number
}

interface Items {
  items?: ListKeys[];
  trash: (itemName: number) => void;
  edit: boolean,
  showModal:()=>void,
  mode:string,
  editItem:(itemId:number)=>void 
}



export const ListedItems = ({ items, trash, showModal, editItem }: Items) => {

  return (
    <div style={styles.listBox}>
      {items?.map((item, index) => {
        const color = index % 2 !== 0 ? "#53b730" : "#88e763";
        return (
          <div style={{...styles.item, backgroundColor:color}} key={item.id}>
            <h2 onClick={()=>{showModal(); editItem(item.id) }}>{item.name}</h2>
            <h2>{item.quantidade}</h2>
            <button onClick={() => {trash(item.id)}} style={styles.trashButton}>
              <img
                src={trashIcon}
                alt="Trash Icon"
                style={{ width: "25px", height: "25px" }}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};
