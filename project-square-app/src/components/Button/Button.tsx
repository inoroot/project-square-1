import {FunctionComponent, ReactNode} from "react";

interface Props {
    classNames?: string
    onClick?: () => void
    children: ReactNode
    type?: "button" | "submit" | "reset" | undefined
}

export const Button: FunctionComponent<Props> = ({ onClick, children, classNames = '', type = 'button' }) => {
    return (
        <button type={type} onClick={onClick} className={`text-black bg-white cursor-pointer border-0 font-medium rounded-2xl text-sm px-4 py-2 text-center mr-3 md:mr-0 ${classNames}`}>{children}</button>
    )
}
