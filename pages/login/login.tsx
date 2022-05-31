import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { Container, HeadingH2, Input, PrimaryButton, SecondaryButton, Typography } from "../../styles/main";

export default function HomeComponent() {
  const [tab, setTab] = useState(1);

  return (
    <Layout title="Login">
      <Container>
        <TabWrapper>
          <Tab tab={tab}>
            <TabItem>
              <Typography color='var(--color_100)'>Create account</Typography>
              <TabButton type='button' onClick={() => setTab(1)} />
            </TabItem>

            <TabItem>
              <Typography color='var(--color_100)'>Log in</Typography>
              <TabButton type='button' onClick={() => setTab(2)} />
            </TabItem>

            <TabItem>
              <Typography color='var(--color_100)'>Checkout</Typography>
              <TabButton type='button' onClick={() => setTab(3)} />
            </TabItem>
          </Tab>
        </TabWrapper>

        <Wrapper>
          {
            tab === 1 ? (
              <>
                <HeadingH2>Create account</HeadingH2>
                <InputsDescription>You need to enter your name and email. We will send you a temporary password by email</InputsDescription>
                <Input placeholder='Username' />
                <Input placeholder='Email' />
                <Input placeholder='Password' type='password' />
                <PrimaryButton>Send password</PrimaryButton>
                <NextStep>
                  <Typography color='var(--color_100)'>Have an account?</Typography>
                  <Typography onClick={() => setTab(2)}>Go to the next step</Typography>
                </NextStep>
              </>
            ) :
              tab === 2 ? (
                <>
                  <HeadingH2>Log in</HeadingH2>
                  <Input placeholder='Email' />
                  <Input placeholder='Password' type='password' />
                  <PrimaryButton>Log in</PrimaryButton>
                </>
              ) :
                (
                  <>
                    <HeadingH2>Checkout</HeadingH2>
                    {/* <InputsDescription>We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.</InputsDescription> */}
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
                  </>
                )
          }
        </Wrapper>

      </Container>
    </Layout>
  )
};

const TabWrapper = styled.div`
  margin: 0 auto;
  max-width: 620px;
  width: 100%;
  padding-bottom: 64px;
`;

const TabButton = styled.input`
  cursor: pointer;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: var(--color_600);
  padding: 0;
  margin: 0;
`;

const TabItem = styled.label`
  cursor: pointer;
  user-select: none;
  width: 100%;
  & :checked {
    ${TabButton} {
      background-color: red;
    }
  }
`;

interface ITab {
  tab: number;
}

const Tab = styled.div<ITab>`
  display: flex;
  gap: 16px;
   ${TabItem}:nth-child(-n + ${props => props.tab}) ${TabButton}  {
    background-color: var(--primary_1);
  }
`;

const InputsDescription = styled.div`
  width: 640px;
  font-size: 14px;
  font-family: 'Thicccboi';
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
`;

const NextStep = styled.div`
  display: flex;
  gap: 8px;
  ${Typography} {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
  }
  & :last-child {
      cursor: pointer;
      color: var(--primary_1);
    }
`;

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
  ${Input} + ${Input} {
    margin-top: 24px;
  }
  ${Input} + ${PrimaryButton} {
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