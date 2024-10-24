import { CSSProperties } from "react";
import { CSS } from "styled-components/dist/types";

interface Props {
    type?:string;
    name?:string;
    placeholder?:string;
    style:CSSProperties;
    value:string | number,
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}
 
export const Input = ({name, type, placeholder, style, value, onChange}:Props) =>{
   return (
        <input
        name={name}
        placeholder={placeholder}
        style={style}
        type={type}
        value={value}
        onChange={onChange}
        />
   ) 
}