    import { styles } from "./style";

   interface ListKeys{
    name:string,
    quantidade:number
   }
   interface Items{
    items:ListKeys[]
   }
    export const ListedItems = ({items}:Items) =>{
       
        return(
            <div style={styles.backGround}>
                {items.map((item)=>(
                    <h1>{item.name}</h1>
                ))}
            </div>
        )
    }