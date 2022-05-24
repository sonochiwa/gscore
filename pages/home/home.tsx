import styled from "styled-components";
import Layout from "../../components/layout";
import { Container, HeadingH2, SecondaryButton } from "../../styles/main";

export default function HomeComponent() {
  return (
    <Layout title="Home">
      <Container>
        <HeadingH2>Get started with Gscore today!</HeadingH2>
        <Wrapper>
          <PricingCard>
            <CardTop>
              <Price>$77</Price>
              <Title>Single site license</Title>
              <Text>Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price</Text>
            </CardTop>
            <CardBottom>
              <CardUl>
                <CardLi>Single site license</CardLi>
                <CardLi>Special introductory pricing</CardLi>
                <CardLi>Unlimited Pages and Keywords</CardLi>
                <CardLi>Billed annually</CardLi>
              </CardUl>
              <CardButton>Get Gscore</CardButton>
            </CardBottom>
          </PricingCard>

          <PricingCardV2>
            <CardTop>
              <Price>$117</Price>
              <Title>3 Site license</Title>
              <Text>Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price</Text>
            </CardTop>
            <CardBottom>
              <CardUl>
                <CardLi>All features for 3 sites</CardLi>
                <CardLi>Special introductory pricing</CardLi>
                <CardLi>Unlimited Pages and Keywords</CardLi>
                <CardLi>Billed annually</CardLi>
              </CardUl>
              <CardButton>Get Gscore</CardButton>
            </CardBottom>
          </PricingCardV2>

          <PricingCard>
            <CardTop>
              <Price>$167</Price>
              <Title>10 Site license</Title>
              <Text>Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price</Text>
            </CardTop>
            <CardBottom>
              <CardUl>
                <CardLi>All features for 10 sites</CardLi>
                <CardLi>Special introductory pricing</CardLi>
                <CardLi>Unlimited Pages and Keywords</CardLi>
                <CardLi>Billed annually</CardLi>
              </CardUl>
              <CardButton>Get Gscore</CardButton>
            </CardBottom>
          </PricingCard>
        </Wrapper>
      </Container>
    </Layout>
  )
};

const Wrapper = styled.div`
  display: flex;
  gap: 28px;
`;

const PricingCard = styled.div`
  margin-top: 100px;
  padding: 42px 48px;
  background-color: #272727;
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;

const CardTop = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid var(--color_500);
`;

const Price = styled.div`
  font-family: 'DM Sans';
  font-size: 54px;
  line-height: 66px;
  font-weight: 700;
  text-align: center;
`;

const Title = styled.div`
  font-family: 'Thicccboi';
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  margin-top: 4px;
`;

const Text = styled.div`
  font-family: 'Thicccboi';
  font-size: 18px;
  line-height: 30px;
  color: var(--color_400);
  font-weight: 500;
  text-align: center;
  margin-top: 8px;
`;

const CardBottom = styled.div`
  padding-top: 38px;

`;

const CardUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardLi = styled.li`
  font-family: 'Thicccboi';
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  list-style-type: none;
  height: 26px;
  ::before {
    content: 'x';
    margin-right: 14px;
    line-height: 26px;
}
`;

const CardButton = styled(SecondaryButton)`
  margin-top: 32px;
  color: var(--color_800);
  box-shadow: none;
  width: 100%;
  :hover {
    color: var(--color_800);
  }
`;

const PricingCardV2 = styled(PricingCard)`
  margin-top: 50px;
  background-color: var(--primary_1);
  color: var(--color_100);

  ${CardTop} {
    border-bottom: 1px solid var(--color_100);
  }

  ${Text} {
    color: var(--color_100);
  }

  ${CardButton} {
    color: var(--primary_1);
    :hover {
      color: var(--primary_1);
    }
  }
`;