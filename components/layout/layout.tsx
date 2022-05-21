import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Footer from "./footer";
import Header from "./header";

interface ILayout {
  children: any;
  title?: string;
}

export default function ({ children, title }: ILayout) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} | Gscore</title>2
      </Head>

      <Header />

      {/* <nav>
        <Link href="/"><a>Index</a></Link>
        <Link href="/about"><a>About us</a></Link>
        <Link href="/posts"><a>Posts</a></Link>
      </nav> */}

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
};