import styles from "./Button.module.css";
interface props{
    children:string;
    color: string;
    onClick: () => void;
}

const Button = ({children, onClick,color }: props) => {
  return (
    <>
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
    </>
    )
}

export default Button