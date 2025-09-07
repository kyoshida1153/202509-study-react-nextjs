import "@/styles/globals.css";
import Head from "next/head";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgLightBlue } from "@/hooks/useBgLightBlue";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}
export default MyApp;
