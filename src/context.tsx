import { createContext } from "react";
interface UserContextType {
  modal: boolean;
  setModal: (value: boolean) => void;
  setNome: (value: string) => void;
  nome: string;
  quantidade:number | undefined;
  setQuantidade: (value: number | undefined) =>void,
  homeState:boolean,
  setHomeState: (value:boolean) => void
}

export const UserContext = createContext<UserContextType>({
  modal: false,
  setModal: () => {},
  nome: '', 
  setNome: () => {},
  quantidade: 0, 
  setQuantidade: ()=>{},
  homeState:true,
  setHomeState: ()=>{}
});
