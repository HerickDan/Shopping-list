export const styles: { [key: string]: React.CSSProperties } = {
  generalDiv: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.500)",
    position: "fixed",
    animation: 'fadeIn 0.15s ease-in-out', // Adicionando a animação aqui
  },
  insideBox: {
    width: "400px",
    height: "500px",
    backgroundColor: "#005bc5",
    borderRadius: "10px",
  },
  form: {
    height: "100%",
    width: '100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    height: "20%",
    width: '80%',
  },
  label: {
    fontWeight: "700",
    fontSize: "18px",
  },
  input: {
    marginBottom: "10%",
    height: "50%",
    border: "solid 1px black",
    borderRadius: "5px",
    padding: "10px",
  },
  buttonSubmit: {
    marginTop: "2%",
    width: "40%",
    height: "10%",
    border: "solid 1px black",
    borderRadius: "5px",
    backgroundColor: "#008000",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },
  buttonCancel: {
    marginTop: "5%",
    width: "40%",
    height: "10%",
    border: "solid 1px black",
    borderRadius: "5px",
    backgroundColor: "#FF0000",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },
};


