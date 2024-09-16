import { table } from "console";

export const styles: { [keys: string]: React.CSSProperties } = {
 
  listBox: {
    marginTop:'2%',
    width: "80%",
    height: "70%",
    overflowY:'auto',
    backgroundColor: "#cff2ac",
    color: "black",
    display: "flex",
    alignItems:'center',
    flexDirection:'column',
    padding: "10px 0px",
    borderRadius: "10px",
    marginBottom:'0px'
  },
  item:{
    display:'flex',
    padding:'0px 40px',
    justifyContent:'space-between',
    height:'18%',
    width:'80%'
  },  
  trash: {
    textAlign: "center",
    width: "30%",
  },
  trashButton:{
    background:'none',
    cursor:'pointer',
    border:'none',
  }
};
