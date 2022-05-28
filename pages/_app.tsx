import {GlobalStyles} from "../styles/main";

export default function MyApp({Component, pageProps}: any) {

    return (
        <>
            <GlobalStyles/>
            <Component {...pageProps} />
        </>
    )
}