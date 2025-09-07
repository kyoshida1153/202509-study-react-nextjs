import styles from "@/components/Main/Main.module.css";
import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";
import { useEffect } from "react";

export function Main(props) {
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
