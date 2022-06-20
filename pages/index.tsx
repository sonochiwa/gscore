import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/layout";
import { Container, HeadingH2, SecondaryButton, Typography } from "../styles/main";
import axios from "axios";
import PricingCard from '../components/pricing-card'
import axiosInstance from "../services/axios-instance";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/app-dispatch";

export async function getServerSideProps() {
  const { data } = await axios.get('https://gscore-back.herokuapp.com/api/products');

  return {
    props: {
      products: data
    }
  }
};

function HomePage({ products }: any) {
  const token = useAppSelector(state => state.root.token);

  return (
    <Layout title="Home">
      <Container>
        <HeadingH2>Get started with Gscore today!</HeadingH2>
        <Wrapper>
          <Cards>
            {products.map((product: any, index: number) => <PricingCard key={product.id} isProfit={index === 1} {...product} />)}
          </Cards>
          <HomeTextInfo>
            <Typography color='var(--color_100)'>Have more than 10 sites?</Typography>
            <Link href='/contact-us'><CardLink>Contact us</CardLink></Link>
          </HomeTextInfo>
        </Wrapper>
      </Container>
    </Layout >
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const Cards = styled.div`
  display: flex;
  gap: 28px;
`;

export default HomePage;