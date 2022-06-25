import styled from "styled-components";
import Checkbox from "../Checkbox";
import useCopyToClipboard from "../../hooks/copy-to-clipboard";
import Button from "../Button";
import { StatusTheme } from "./util/theme";
import { useState } from "react";

type Status = 'ACTIVE' | 'INACTIVE' | 'HOLD';

interface ISecondaryCard {
  status: Status;
  code: string;
  handleActive: (code: string) => Promise<void>;
  origin: string;
};

const SecondaryCard: React.FC<ISecondaryCard> = ({ status, code, handleActive, origin }) => {
  const [_, copy] = useCopyToClipboard();

  return (
    <Root $status={status}>
      <Col>
        <CheckboxWrapper>
          <Checkbox disabled={status !== 'HOLD'} />
        </CheckboxWrapper>
      </Col>

      <Col>
        <CardText>License code</CardText>
        <ButtonWrapper>
          <LicenseCodeInput defaultValue={code} />
          <LicenseCodeButton onClick={() => copy(code)} />
        </ButtonWrapper>
      </Col>

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
        <CardText>Status</CardText>
        <StatusWrapper>
          <Status $status={status}>{status}</Status>
        </StatusWrapper>
      </StatusCol>
    </Root>
  )
};

interface IRoot {
  $status: Status;
};

const Root = styled.div<IRoot>`
  background-color: #272727;
  border-radius: 12px;
  width: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: row;
  gap: 28px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  height: 98px;
`;

const DomainCol = styled(Col)`
  width: 100%;
`;

const StatusCol = styled(Col)`
  flex-direction: column;
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
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
`;

interface IStatus {
  $status?: Status;
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

export default SecondaryCard;