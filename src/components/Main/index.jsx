import styles from "@/components/Main/Main.module.css";
import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
