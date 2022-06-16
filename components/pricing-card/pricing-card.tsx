import { useRouter } from "next/router";
import styled from "styled-components"
import { useAppSelector } from "../../hooks/app-dispatch";
import { SecondaryButton } from "../../styles/main";

export default function PricingCardComponent({ prices, name, isProfit }: any) {
  const router = useRouter();
  const token = useAppSelector(state => state.root.token);

  const onGet = () => {
    if (token === undefined) {
      router.push('/sign-up')
    } else {
      router.push('/checkout')
    }
  };

  return (
    <Root isProfit={isProfit}>
      <CardTop isProfit={isProfit}>
        {prices.map(({ price, index }: any) => <Price key={index}>{price}</Price>)}
        <Title>{name} license</Title>
        <Text isProfit={isProfit}>Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price</Text>
      </CardTop>
      <CardBottom>
        <CardUl>
          <CardLi isProfit={isProfit}>All features for {name}</CardLi>
          <CardLi isProfit={isProfit}>Special introductory pricing</CardLi>
          <CardLi isProfit={isProfit}>Unlimited Pages and Keywords</CardLi>
          <CardLi isProfit={isProfit}>Billed annually</CardLi>
        </CardUl>
        <CardButton isProfit={isProfit} onClick={onGet}>Get Gscore</CardButton>
      </CardBottom>
    </Root >
  )
};

interface isProfitProps {
  isProfit?: any;
}

const Root = styled.div<isProfitProps>`
  margin-top: ${props => props.isProfit ? '50px' : '100px'};
  padding: 42px 48px;
  background-color:  ${props => props.isProfit ? 'var(--primary_1)' : '#272727'};
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;

const CardTop = styled.div<isProfitProps>`
  padding-bottom: 40px;
  border-bottom: ${props => props.isProfit ? '1px solid var(--color_100)' : '1px solid var(--color_500)'};
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

const Text = styled.p<isProfitProps>`
  font-family: 'Thicccboi';
  font-size: 18px;
  line-height: 30px;
  color: ${props => props.isProfit ? 'var(--color_100)' : 'var(--color_400)'};
  font-weight: 400;
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

const CardLi = styled.li<isProfitProps>`
  display: flex;
  font-family: 'Thicccboi';
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  list-style-type: none;
  ::before {
    content: ${props => props.isProfit ? 'url(/icons/OrangeMark.svg)' : 'url(/icons/BlackMark.svg)'};
    height: 26px;
    width: 26px;
    margin-right: 14px;
  }
`;

const CardButton = styled(SecondaryButton)<isProfitProps>`
  margin-top: 32px;
  color: ${props => props.isProfit ? ('var(--primary_1)') : ('var(--color_800)')};
  box-shadow: none;
  width: 100%;
  :hover {
    color: ${props => props.isProfit ? ('var(--primary_1)') : ('var(--color_800)')};
  }
`;
