import styles from "./button.module.scss";

export default function Button({ onClick }: { onClick: any | undefined }) {
  const onClickButton = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    onClick();
  }
  return <button onClick={onClickButton} className={styles["button"]}>В корзину</button>
}
