import Head from "next/head";
import styled from "styled-components";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

interface ILayout {
  children: any;
  title?: string;
}

export default function LayoutComponent({ children, title }: ILayout) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} | Gscore</title>
      </Head>

      <Header />

      <Wrapper>
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 122px);
`;