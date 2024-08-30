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
    justifyContent: "center",
    padding: "10px 0px",
    borderRadius: "10px",
    marginBottom:'0px'
  },
  table: {
    width: "90%",
    height: "15vh",
    borderCollapse: "collapse",
    marginBottom:'0px'
  },
  th: {
    width: "30%",
  },
  td: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
    margin: 0,
    transition:'0.2ms'
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
