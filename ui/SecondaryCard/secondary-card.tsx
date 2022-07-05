import styled from "styled-components";
import Checkbox from "../Checkbox";
import useCopyToClipboard from "../../hooks/copy-to-clipboard";
import Button from "../Button";
import { StatusTheme } from "./util/theme";
import { useState } from "react";
import { device } from "../../styles/main";

interface ISecondaryCard {
  id: number;
  status: string;
  code: string;
  origin: string;
  handleActive: (code: string) => Promise<void>;
  handleChecked: (id: number) => Promise<void>;
  handleFilter: (id: number) => Promise<void>;
};

const SecondaryCard: React.FC<ISecondaryCard> = ({ id, status, code, handleActive, handleChecked, handleFilter, origin }) => {
  const { copyTextToClipboard } = useCopyToClipboard();
  const [isChecked, setIsChecked] = useState(false);

  const onChecked = (id: number) => {
    handleChecked(id);
    setIsChecked(!isChecked);
  };

  const onFilter = (id: number) => {
    handleFilter(id);
    setIsChecked(!isChecked);
  };

  return (
    <Root $status={status}>

      <FirstColWrapper>
        <Col>
          <CheckboxWrapper>
            <Checkbox disabled={status !== 'HOLD'} onClick={() => (isChecked ? (onFilter(id)) : (onChecked(id)))} />
          </CheckboxWrapper>
        </Col>
      </FirstColWrapper>

      <LicenseCodeWrapper>
        <Col>
          <CardText>License code</CardText>
          <ButtonWrapper>
            <LicenseCodeInput defaultValue={code} />
            <LicenseCodeButton onClick={() => copyTextToClipboard(code)} />
          </ButtonWrapper>
        </Col>
      </LicenseCodeWrapper>

      <DomainWrapper>
        <DomainCol>
          <CardText>Domain</CardText>
          <DomainInput defaultValue={origin} />
        </DomainCol>
        {status === 'INACTIVE' &&
          <NewButtonWrapper>
            <NewButton theme='secondary' onClick={() => handleActive(code)}>Activate</NewButton>
          </NewButtonWrapper>
        }
      </DomainWrapper>

      <StatusCol>
        <CardStatus>Status</CardStatus>
        <StatusWrapper>
          <Status $status={status}>{status}</Status>
        </StatusWrapper>
      </StatusCol>
    </Root>
  )
};

interface IRoot {
  $status: string;
};


const Col = styled.div`
  display: flex;
  flex-direction: column;
  height: 98px;
`;

const DomainCol = styled(Col)`
  width: 100%;
`;

const DomainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 98px;
  width: 100%;
  max-width: 620px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DomainInput = styled.input`
  display: flex;
  height: 68px;
  width: 100%;
  padding: 25px 24px;
  background-color: #393939;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  border: none;
  outline: none;
  font-family: 'Thicccboi';
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #969696;
`;

const CardText = styled.p`
  font-family: 'Thicccboi';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #969696;
  margin-bottom: 12px;
`;

const LicenseCodeInput = styled.input`
  display: flex;
  height: 68px;
  width: 296px;
  padding: 25px 24px;
  background-color: #393939;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px 0 0 6px;
  border: none;
  outline: none;
  font-family: 'Thicccboi';
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #969696;
`;

const LicenseCodeButton = styled.button`
  cursor: pointer;
  border-radius: 0 6px 6px 0;
  background-color: #393939;
  border: none;
  display: inline-block;
  height: 68px;
  width: 68px;
  background-image: url('/icons/copy.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100%;
  height: 68px;
  @media ${device.tablet} {
    height: auto;
    margin-top: 0;
  }
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
  @media ${device.tablet} {
    grid-area: b;
    height: auto;
  }
`;

interface IStatus {
  $status?: string;
}

const Status = styled.p<IStatus>`
  font-family: 'Thicccboi';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  ${({ $status }) => $status && StatusTheme[$status]};
  `;

const NewButton = styled(Button)`
  min-width: 111px;
  height: 58px;
  margin-left: 30px;
`;

const NewButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  align-items: bottom;
`;

const CardStatus = styled(CardText)`
`;

const LicenseCodeWrapper = styled.div`
  @media ${device.tablet} {
    grid-area: c;
  }`;
const FirstColWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.tablet} {
    grid-area: a;
  }
`;

const StatusCol = styled(Col)`
  display: flex;
`;

const Root = styled.div<IRoot>`
  background-color: #272727;
  border-radius: 12px;
  width: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: row;
  gap: 28px;
  @media ${device.tablet} {
    display: grid;
    grid-template-areas: "a b" "c c" "d d";
    grid-template-columns: min-content;
    padding: 34px 20px;
    ${LicenseCodeInput} {
      width: 100%;
    }
    ${DomainWrapper} {
      grid-area: d;
      max-width: 100%;
    }
    ${CardStatus} {
      display: none;
    }
    ${Col} {
      height: auto;
    }
  }
`;

export default SecondaryCard;