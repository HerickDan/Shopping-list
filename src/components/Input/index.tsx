import { CSSProperties } from "react";
import { CSS } from "styled-components/dist/types";

interface Props {
    type?:string,
    name?:string,
    placeholder?:string,
    style:CSSProperties,
    value:string | number,
    id:string
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
}
 
export const Input = ({name, type, placeholder, style, value, id, onChange}:Props) =>{
   return (
        <input
        id={id}
        name={name}
        placeholder={placeholder}
        style={style}
        type={type}
        value={value}
        onChange={onChange}
        />
   ) 
}