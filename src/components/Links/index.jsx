import styles from "@/components/Links/Links.module.css";

export function Links({ items, handleReduce }) {
  return (
    <div className={styles.links}>
      <button onClick={handleReduce}>減らす</button>
      <div className={styles.ctas}>
        {items.map((item) => {
          return (
            <a
              key={item.href}
              className={styles[item["className"]]}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
