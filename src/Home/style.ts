import shoppingImage from "../imgs/shopping.jpg";

export const styles: { [keys: string]: React.CSSProperties } = {
  backGround: {
    margin: "0",
    padding: "0",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${shoppingImage}) `,
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
  },
  title: {
    color: "#f3d683",
    fontSize: "70px",
    fontFamily: "Roboto",
    fontWeight: "700",
    marginBottom: "0",
  },
  subTitle: {
    color: "#f3d683",
    fontSize: "30px",
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
