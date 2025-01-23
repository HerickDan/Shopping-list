import { createContext } from "react";
interface UserContextType {
  modal: boolean;
  setModal: (value: boolean) => void;
  setNome: (value: string) => void;
  nome: string;
  quantidade: number | undefined;
  setQuantidade: (value: number | undefined) => void;
  homeState: boolean;
  setHomeState: (value: boolean) => void;
  items: { name: string; quantidade: number | undefined; id: number }[];
  setItems: (
    value: { name: string; quantidade: number | undefined; id: number }[]
  ) => void;
  specificItemId: number | undefined;
  setSpecificItemId: (value: number | undefined) => void;
  mode: "create" | "edit",
  setMode:(value: "create" | "edit") => void
}

export const UserContext = createContext<UserContextType>({
  modal: false,
  setModal: () => {},
  nome: "",
  setNome: () => {},
  quantidade: 0,
  setQuantidade: () => {},
  homeState: true,
  setHomeState: () => {},
  items: [],
  setItems: () => {},
  specificItemId: undefined,
  setSpecificItemId: () => {},
  mode:'create',
  setMode: ()=>{}
});
