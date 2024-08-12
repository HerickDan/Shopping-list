import shoppingImage from "../imgs/shopping.jpg";

export const styles: { [keys: string]: React.CSSProperties } = {
  backGround: {
    margin: "0",
    padding: "0",
    backgroundSize: "cover",
    color: "white",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'column'
  },
  tableBox: {
    width: "80%",
    height: "70%",
    backgroundColor: "white",
    color: "black",
    display:'flex',
    justifyContent:'center',
    padding:'10px 0px',
    borderRadius:'10px'
  },
  table: {
    border: "solid 1px black",
    width:'90%',
    height:'20%'
  },
  th: {
    border: "solid 1px black",
  },
  thQuantidae:{
    width:'50%'
  },
  td: {
    textAlign:'center',
    border: "solid 1px black",
  },
};
