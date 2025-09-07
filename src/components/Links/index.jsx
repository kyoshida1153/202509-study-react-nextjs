import styles from "@/components/Links/Links.module.css";

const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Vercel Deploy now →",
    className: "primary",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Read our docs &rarr; \u2192",
    className: "secondary",
  },
];

export function Links() {
  return (
    <div className={styles.links}>
      <div className={styles.ctas}>
        {ITEMS.map((item) => {
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
      {/* <div className={styles.ctas}>
        <a
          className={styles.primary}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondary}
        >
          Read our docs
        </a>
      </div> */}
    </div>
  );
}
