import styled from "styled-components";
import Layout from "../components/layout";
import { HeadingH2, Typography } from "../styles/main";
import LoginTab from "../ui/LoginTab";
import { useAppDispatch, useAppSelector } from "../hooks/app-dispatch";
import { removeProductFromСart } from "../store/root-slice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../ui/Button";

export default function CheckoutPage() {
  const token = useAppSelector(state => state.root.token);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cart = useAppSelector(({ root }: any) => ({
    products: root.cartProducts,
    total: root.cartProducts.reduce((acc: number, { prices }: any) => acc + Number(prices[0].price), 0)
  }));

  const onClearBasket = (index: number) => {
    dispatch(removeProductFromСart({ index }))
  };

  useEffect(() => {
    if (!token) {
      router.push("/sign-in");
    }
  });

  return (
    <Layout title="Checkout">
      <Wrapper>
        <LoginTab currentTab={3} />
        <HeadingH2 left>Checkout</HeadingH2>
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
                <ClearBasket onClick={() => onClearBasket(index)} />
              </Row>
            </Row>
          ))}
        </Package>
        <Total>
          <Typography>Total:</Typography>
          <Typography>
            ${cart.total}
          </Typography>
        </Total>
        <Button
          theme="primary"
          onClick={() => router.push("/start-your-subscription")}
        >Purchase</Button>
      </Wrapper>
    </Layout >
  )
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 620px;
  width: 100%;
  ${HeadingH2} {
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
  ${Row}:first-child ${Typography} {
    font-weight: 700;
  }
  ${Typography}:last-child {
    font-weight: 400;
  }
  ${Typography} {
    font-family: "Thicccboi";
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

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  ${Typography} {
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    font-family: "Thicccboi";
    color: var(--color_100)
  }
`;

const ClearBasket = styled.div`
  cursor: pointer;
  display: flex;
  width: 24px;
  height: 100%;
  background-image: url("/icons/shopping-basket.svg");
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 10px;
`;