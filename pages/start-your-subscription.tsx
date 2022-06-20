import Layout from "../components/layout";
import styled from "styled-components";
import { HeadingH2, PrimaryButton, Typography } from "../styles/main";
import { useAppSelector } from "../hooks/app-dispatch";
import { useRouter } from "next/router";

export default function SubscribePage() {
  const cart = useAppSelector(({ root }: any) => ({ products: root.cartProducts, total: root.cartProducts.reduce((acc: number, { prices }: any) => acc + Number(prices[0].price), 0) }))
  const router = useRouter();

  return (
    <Layout title="Purchase">
      <Wrapper>
        <HeadingH2 left>Start your subscription</HeadingH2>
        <Subtitle>
          We have sent you a payment receipt by e-mail and a
          link to download the plugin with a license key.
        </Subtitle>
        <Package>
          <Row>
            <Typography>Package name</Typography>
            <Typography>Price</Typography>
          </Row>
          <Hr />
          {cart.products.map((product: any, index: number) => (
            <Row key={index}>
              <Typography>{product.name} license</Typography>
              <Row>
                <Typography>${product.prices[0].price}</Typography>
              </Row>
            </Row>
          ))}
        </Package>
        <PrimaryButton type="submit" onClick={()=> router.push("/subscriptions")}>Go to my subscriptions</PrimaryButton>
      </Wrapper>
    </Layout>
  )
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 620px;
  width: 100%;
  ${HeadingH2} {
    text-align: left;
    margin-bottom: 16px;
  }
  ${PrimaryButton} {
    margin-top: 48px;
    width: 100%;
  }
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-family: 'Thicccboi';
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Package = styled.div`
  position: relative;
  background-color: #272727;
  border-radius: 12px;
  padding: 48px 32px;
  ${Row}:first-child ${Typography} {
    font-weight: 700;
  }
  ${Typography}:last-child {
    font-weight: 400;
  }
  ${Typography} {
    font-family: 'Thicccboi';
    font-size: 24px;
    line-height: 34px;
    color: var(--color_100)
  }
  ${Row} + ${Row} {
    margin-top: 15px;
  }
`;

const Hr = styled.div`
  position: relative;
  left: -32px;
  margin: 32px 0;
  width: calc(100% + 64px);
  height: 1px;
  background-color: #969696;
`;