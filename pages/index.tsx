import PricingCard from "../components/pricing-card";
import Layout from "../components/layout";
import styled from "styled-components";
import Link from "next/link";
import { Container, HeadingH2, Typography } from "../styles/main";
import api from "../services";
import { device } from "../styles/main";

export async function getServerSideProps() {
  const { data } = await api.auth.products();

  return {
    props: {
      products: data
    }
  }
};

interface IHomePage {
  products: [];
}

export default function HomePage({ products }: IHomePage) {

  return (
    <Layout title="Home">
      <Container>
        <HeadingH2>Get started with Gscore today!</HeadingH2>
        <Wrapper>
          <Cards>
            {products.map((product: any, index: number) => <PricingCard key={product.id} isProfit={index === 1} {...product} />)}
          </Cards>
          <HomeTextInfo>
            <Typography color="var(--color_100)">Have more than 10 sites?</Typography>
            <Link href="/contact-us"><CardLink>Contact us</CardLink></Link>
          </HomeTextInfo>
        </Wrapper>
      </Container>
    </Layout >
  )
};

const Cards = styled.div`
  display: flex;
  gap: 28px;

  @media ${device.tablet} {
    flex-direction: column;
    max-width: 560px;
  };
  @media ${device.mobile} {
  };
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    align-items: center;
  };
`;

const HomeTextInfo = styled.div`
  margin-top: 33px;
  text-align: center;
`;

const CardLink = styled.a`
  text-align: center;
  cursor: pointer;
  font-family: 'Thicccboi';
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  color: var(--primary_1);
  padding-bottom: 2px;
  border-bottom: 1px solid var(--primary_1);
`;