import styles from "./describeBlock.module.scss";

export default function DescribeBlock({ description }: { description: string }) {
  return (
    <div className={styles["describe__block"]}>
      <h2 className={styles["describe__title"]}>Описание</h2>
      <div className={styles["describe__content"]}>
        <p>{description}
        </p>
      </div>
      <button className={styles["describe__button"]}>Подробнее</button>
    </div>
  )
}
