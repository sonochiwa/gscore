import styled from "styled-components";
import Layout from "../components/layout";
import { Container, device, HeadingH2, Typography } from "../styles/main";
import LoginTab from "../ui/LoginTab";
import { useAppDispatch, useAppSelector } from "../hooks/app-dispatch";
import { removeProductFromСart } from "../store/root-slice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../ui/Button";
import api from "../services";

export default function CheckoutPage() {
  const token = useAppSelector(state => state.root.token);
  const productId = useAppSelector(state => state.root.products[0]?.prices[0]?.productId);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const cart = useAppSelector(({ root }) => ({
    product: root.products[0],
  }));

  const onClearBasket = () => {
    dispatch(removeProductFromСart());
  };

  const onSubmit = () => {
    router.push("/start-your-subscription");
    api.auth.buySubscribe({ priceId: productId });
  };

  useEffect(() => {
    if (!token) {
      router.push("/sign-in");
    }
  });

  return (
    <Layout title="Checkout">
      <Container>
        <Wrapper>
          <LoginTab currentTab={3} />
          <HeadingH2 left>Checkout</HeadingH2>
          <Package>
            <Row>
              <Typography>Package name</Typography>
              <Typography>Price</Typography>
            </Row>
            <Hr />
            {cart.product &&
              <Row>
                <NewTypography>{cart.product?.name} license</NewTypography>
                <Row>
                  <Typography>${cart.product?.prices[0]?.price}</Typography>
                  <ClearBasket onClick={() => onClearBasket()} />
                </Row>
              </Row>
            }
          </Package>
          {cart.product &&
            <Total>
              <Typography>Total:</Typography>
              <Typography>
                ${cart.product?.prices[0]?.price}
              </Typography>
            </Total>
          }
          {cart.product &&
            <NewButton
              theme="primary"
              onClick={onSubmit}
            >
              Purchase
            </NewButton>
          }
        </Wrapper>
      </Container>
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

const NewButton = styled(Button)`
  @media ${device.mobile} {
    width: 100%;
  }
`;

const NewTypography = styled(Typography)`
  font-size: 10px;
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