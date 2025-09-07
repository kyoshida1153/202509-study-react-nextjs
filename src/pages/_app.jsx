import "@/styles/globals.css";
import Head from "next/head";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
