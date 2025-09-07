import styles from "@/components/Main/Main.module.css";
import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";
import { useCallback, useState } from "react";

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

export function Main(props) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className={styles.main}>
      <Headline page={props.page} handleReduce={handleReduce}>
        {/* <code>pages/{props.page}.js</code> */}
        <code>{items.length}</code>
      </Headline>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
}
