import styled from "styled-components";
import Checkbox from "../Checkbox";
import useCopyToClipboard from "../../hooks/copy-to-clipboard";

interface ISecondaryCard {
  isActive: boolean;
}

const SecondaryCard: React.FC<ISecondaryCard> = ({ isActive }) => {
  const [value, copy] = useCopyToClipboard()
  const xValue = 'hello world'

  return (
    <Root $isActive={isActive}>
      <Col>
        <CheckboxWrapper>
          <Checkbox />
        </CheckboxWrapper>
      </Col>

      <Col>
        <CardText>License code</CardText>
        <ButtonWrapper>
          <LicenseCodeInput value={xValue} />
          <LicenseCodeButton onClick={() => copy(xValue)} />
        </ButtonWrapper>
      </Col>

      <DomainWrapper>
        <CardText>Domain</CardText>
        <InputWrapper>
          <DomainInput />
        </InputWrapper>
      </DomainWrapper>

      <Col>
        <CardText>Status</CardText>
        <StatusWrapper>
          <Status>Active</Status>
        </StatusWrapper>
      </Col>
    </Root>
  )
};

interface IRoot {
  $isActive: boolean;
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

const DomainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 98px;
  width: 100%;
  max-width: 620px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputWrapper = styled.div`

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

const Status = styled.div`
  font-family: 'Thicccboi';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #05C168;
`;

export default SecondaryCard;