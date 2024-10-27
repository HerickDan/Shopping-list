import { styles } from "./style";
import christian from "../../imgs/christian-levi.png";
import justin from "../../imgs/justinKale.png";
import linda from "../../imgs/linda-Lehua.png";
import { useState } from "react";

export const UserCard = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  const user = [
    { urlImage: christian, name: "Christian Levi", text: "Eu sempre tive dificuldade em manter minha lista de compras organizada. Com o Easy List, posso adicionar e remover itens com facilidade. A interface é super intuitiva e me ajuda a planejar as compras antes de ir ao mercado. O melhor é que posso editar a lista rapidamente, o que torna o processo muito mais eficiente!" },
    { urlImage: justin, name: "Justin Kale", text: "Antes de usar o Easy List, eu perdia muito tempo anotando os itens que precisava comprar. Agora, com apenas alguns cliques, posso criar uma lista completa e personalizada. O recurso de exclusão é incrível e me ajuda a manter apenas o que realmente preciso. Isso me faz economizar tempo e dinheiro nas compras!" },
    {
      urlImage: linda,
      name: "Linda Lehua",
      text: "Como mãe de duas crianças, minha rotina é bem corrida. O Easy List se tornou meu aliado nas compras. A possibilidade de adicionar itens rapidamente no celular enquanto estou na loja facilita muito a minha vida. Eu consigo fazer tudo de forma prática, sem esquecer nada. Adoro a sensação de ter tudo sob controle!",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent:'center' }}>
      {user.map((item, index) => (
        <div  key={index}
        style={hoverIndex === index ? styles.majorSize : styles.cardBox}
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}>
          <img src={item.urlImage} alt="userImage" width="55%" />
          <h2>{item.name}</h2>
          <p>
            "{item.text}"
          </p>
        </div>
      ))}
    </div>
  );
};
