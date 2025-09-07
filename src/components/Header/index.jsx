import styles from "@/components/Header/Header.module.css";

import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
