import shoppingImage from "../imgs/shopping.jpg";

export const styles: { [keys: string]: React.CSSProperties } = {
  backGround: {
    margin: "0",
    padding: "0",
    backgroundColor: `#045f9d `,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  instrucionHome: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width:'100%',
    height:'100%'
  },
  title: {
    color: "#f3d683",
    fontSize: "3em",
    fontFamily: "Roboto",
    fontWeight: "700",
    marginBottom: "0",
  },
  subTitle: {
    color: "#f3d683",
    fontSize: "2em",
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  list: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  alignedButtons: {
    width: "80%",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
