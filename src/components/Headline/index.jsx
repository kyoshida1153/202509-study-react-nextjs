import styles from "@/components/Headline/Headline.module.css";
import { Links } from "@/components/Links";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>
      <ol>
        <li>Get started by editing {props.children}.</li>
        <li>Save and see your changes instantly.</li>
      </ol>
      <p>アイテムの数は {props.children} 個です</p>

      <button onClick={props.handleReduce}>減らす</button>
    </div>
  );
}
