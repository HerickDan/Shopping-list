import { CSSProperties, ReactHTMLElement } from "react"
import { styles } from "../../Home/style";

interface Props{
    children?: JSX.Element | JSX.Element|JSX.Element[];
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    style: CSSProperties
}

export const Form = ({children, onSubmit, style}:Props) =>{
    return(
            <form style={style} onSubmit={onSubmit}>
                {children}
            </form>
    )
}