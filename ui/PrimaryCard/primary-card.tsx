import styled from "styled-components";
import Button from "../Button";
import dateFormat from "dateformat";
import { IProducts } from "../../store/types";
import { device } from "../../styles/main";

interface IPrimaryCard {
  status: string;
  isActive: boolean;
  currentPeriodEnd: string;
  product: IProducts;
  handleView: () => {};
};

const PrimaryCard: React.FC<IPrimaryCard> = ({ status, product, currentPeriodEnd, handleView, isActive }) => {
  return (
    <Root $disabled={!isActive}>
      <Row>
        <Logo>Gscore</Logo>
        <Status>{status.toLowerCase()}</Status>
      </Row>
      <Hr />
      <Row>
        <LicenseInfo>{product.name} license</LicenseInfo>
        <LicenseInfo>${product.prices[0]?.price}</LicenseInfo>
      </Row>
      <DateInfo>valid until {dateFormat(Number(currentPeriodEnd) * 1000, "d.mm.yyyy")}</DateInfo>

      <NewButton theme="secondary" onClick={handleView}>View</NewButton>
    </Root>
  );
};

interface IRoot {
  $disabled?: boolean;
};

const Root = styled.div<IRoot>`
  transition: .2s;
  position: relative;
  padding: 48px 32px;
  background-color: #393939;
  border-radius: 12px;
  min-width: 620px;
  ${props => props.$disabled && 'opacity: 0.6; user-select: none;'}

  @media ${device.tablet} {
    min-width: 500px;
    padding: 40px 20px;
  }

  @media ${device.mobile} {
    min-width: 318px;
    padding: 32px 16px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-family: 'Thicccboi';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: var(--color_100);
`;

const Status = styled.p`
  font-family: 'Thicccboi';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #05C168;
  text-transform: capitalize;
`;

const Hr = styled.div`
  position: relative;
  width: calc(100% + 64px);
  height: 1px;
  left: -32px;
  bottom: 0;
  background-color: #969696;
  margin: 32px 0;
  @media ${device.tablet} {
    width: calc(100% + 40px);
    left: -20px;
  }
  @media ${device.mobile} {
    width: calc(100% + 32px);
    left: -16px;
  }
`;

const LicenseInfo = styled.p`
  font-family: 'Thicccboi';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
`;

const DateInfo = styled.p`
  font-family: 'Thicccboi';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #969696;
  margin-top: 12px;
`;

const NewButton = styled(Button)`
  min-width: 120px;
`;

export default PrimaryCard;