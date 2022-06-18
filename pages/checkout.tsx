import styled from "styled-components";
import Layout from "../components/layout";
import { HeadingH2, TextInput, PrimaryButton, Typography } from "../styles/main";
import LoginNavigation from '../components/login-navigation'
import { useAppDispatch, useAppSelector } from "../hooks/app-dispatch";
import { removeProductFromcart } from "../store/root-slice";

export default function CheckoutPage() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(({ root }: any) => ({ products: root.cartProducts, total: root.cartProducts.reduce((acc: number, { prices }: any) => acc + Number(prices[0].price), 0) }))

  const onClearBasket = (index: number) => {
    dispatch(removeProductFromcart({ index }))
  };

  return (
    <Layout title="Checkout">
      <Wrapper>
        <LoginNavigation currentTab={3} />
        <HeadingH2>Checkout</HeadingH2>
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
        <PrimaryButton>Purchase</PrimaryButton>
      </Wrapper>
    </Layout >
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
    width: 200px;
  }
  ${TextInput} + ${TextInput} {
    margin-top: 24px;
  }
  ${TextInput} + ${PrimaryButton} {
    margin: 48px 0;
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
    font-family: 'Thicccboi';
    font-size: 24px;
    line-height: 34px;
    color: var(--color_100)
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
  margin-top: 24px;
  margin-bottom: 48px;
  ${Typography} {
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    font-family: 'Thicccboi';
    color: var(--color_100)
  }
`;

const ClearBasket = styled.div`
  cursor: pointer;
  display: flex;
  width: 24px;
  height: 100%;
  background-image: url('/icons/shopping-basket.svg');
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 10px;
`;