import styled from "styled-components";
import Layout from "../../components/layout";
import { HeadingH2, TextInput, PrimaryButton, Typography } from "../../styles/main";
import LoginNavigation from '../../components/login-navigation'

export default function CheckoutComponent() {
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
          <Row>
            <Typography>Single site license</Typography>
            <Typography>$77</Typography>
          </Row>
        </Package>
        <Total>
          <Typography>Total:</Typography>
          <Typography>$77</Typography>
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