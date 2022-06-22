import Layout from "../components/layout";
import styled from "styled-components";
import { HeadingH2, Subtitle, Typography } from "../styles/main";
import { useAppSelector } from "../hooks/app-dispatch";
import { useRouter } from "next/router";
import Button from "../ui/Button";

export default function SubscribePage() {
  const router = useRouter();
  const cart = useAppSelector(({ root }: any) => ({
    products: root.cartProducts,
    total: root.cartProducts.reduce((acc: number, { prices }: any) => acc + Number(prices[0].price), 0)
  }));

  return (
    <Layout title="Start your subscription">
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
        <Button
          theme="primary"
          onClick={() => router.push("/subscriptions")}
          style={{ width: "100%" }}
        >Go to my subscriptions</Button>
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
  margin-bottom: 24px;
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