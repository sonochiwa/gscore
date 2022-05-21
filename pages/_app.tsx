import { GlobalStyles } from "../styles/main";

export default function MyApp({ Component, pageProps }: any) {

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      {/* <style jsx global>{`
        body {
          margin-top: 80px;
          font-family: 'Roboto', sans-serif;
        }
      `}</style> */}
    </>
  )
}