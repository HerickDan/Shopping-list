import shoppingImage from "../imgs/shopping.jpg";

export const styles: { [keys: string]: React.CSSProperties } = {
  backGround: {
    margin: "0",
    padding: "0",
    backgroundColor: "rgb(35, 156, 80)",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  instrucionHome: {
    display: "flex",
    alignItems: "center",
    margin:"auto",
    justifyContent: "center",
  },
  title: {
    color: "rgb(225, 221, 217)",
    fontSize: "3em",
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: "700",
    marginBottom: "0",
  },
  subTitle: {
    color: "rgb(225, 221, 217)",
    fontSize: "2em",
    fontWeight: "500",
    fontFamily: "Ubuntu, sans-serif",
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
