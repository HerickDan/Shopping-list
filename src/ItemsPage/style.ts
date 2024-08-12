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
    backgroundColor: "#cff2ac",
    color: "black",
    display:'flex',
    justifyContent:'center',
    padding:'10px 0px',
    borderRadius:'10px'
  },
  table: {
    width:'90%',
    height:'20%',
    borderCollapse: 'collapse'
  },
  th:{
    width:'30%'
  },
  thQuantidae:{
    width:'30%',
  },
  td: {
    textAlign:'center',
    fontSize:'20px',
    fontWeight:'600',
    margin:0,
    backgroundColor:'#51c83e'
  },
  trash:{
    textAlign:'center',
    fontSize:'20px',
    fontWeight:'600',
    backgroundColor:'#51c83e',
    width:'30%',
  }
};
