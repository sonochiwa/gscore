import Layout from "../components/layout";
import { Container, device, HeadingH2, HeadingH3, Typography } from "../styles/main";
import Image from "next/image";
import Button from "../ui/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import PrimaryCard from "../ui/PrimaryCard";
import api from "../services";
import { useEffect, useState } from "react";
import SecondaryCard from "../ui/SecondaryCard";
import { ISubscribe } from "../store/types";

const SubscriptionsPage: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [currentCard, setCurrentCard] = useState(1);
  const [subscriptionList, setSubscriptionList] = useState<Array<any>>([]);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [checked, setChecked] = useState<any>([]);
  const productId = subscriptionList[selectedProduct]?.productId;
  const subscribeId = subscriptionList[selectedProduct]?.id;
  const router = useRouter();

  const handleConfirm = async () => {
    await api.auth.codeManage({
      codesIds: checked,
      subscribeId: subscribeId
    });
    setChecked([]);
    const { data } = await api.auth.productself();
    setSubscriptionList(data);
  };

  const handleDowngrade = async () => {
    await api.auth.changeSubscribe({
      productId: productId - 1,
      subscribeId: subscribeId
    });
    const { data } = await api.auth.productself();
    setSubscriptionList(data);
  };

  const handleUpgrade = async () => {
    await api.auth.changeSubscribe({
      productId: productId + 1,
      subscribeId: subscribeId
    });
    const { data } = await api.auth.productself();
    setSubscriptionList(data);
  };

  const getSubscriptionList = async () => {
    try {
      const { data } = await api.auth.productself();
      setSubscriptionList(data);
      setSelectedProduct(0);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSubscriptionList();
  }, []);

  const handlePrev = () => {
    if (position < 0) {
      setPosition(position + 648);
      setCurrentCard(currentCard - 1);
    }
  };

  const handleNext = () => {
    if (position <= 0 && currentCard < subscriptionList.length) {
      setPosition(position - 648);
      setCurrentCard(currentCard + 1);
    }
  };

  const handleActive = async (code: string) => {
    const { data } = await api.auth.activateCode(code);
    setSubscriptionList(subscriptionList.map(subscription => ({
      ...subscription,
      codes: subscription.codes.map(
        (codeData: any) => codeData.code === code ? data : codeData
      )
    })))
  };

  const handleChecked = async (id: number) => {
    setChecked([...checked, id]);
  };

  const handleFilter = async (id: number) => {
    const filtered = checked.filter((item: any) => item !== id);
    setChecked(filtered);
  };

  return (
    <Layout title="Subscriptions">
      <Container>
        <Row>
          <HeadingH2 left>My subscriptions</HeadingH2>
          {subscriptionList.length > 0 && (
            <ButtonWrapper>
              <NewButton theme="primary" onClick={handleDowngrade}>Downgrade</NewButton>
              <NewButton theme="primary" onClick={handleUpgrade}>Upgrade</NewButton>
            </ButtonWrapper>
          )}
        </Row>
        {subscriptionList.length > 0 ? (
          <>
            <CarouselWrapper>
              <Carousel $position={position}>

                {subscriptionList.map((subscription: any, index: number) => (
                  <PrimaryCard
                    key={index}
                    isActive={index === selectedProduct}
                    handleView={() => setSelectedProduct(index)}
                    {...subscription}
                  />
                ))}

              </Carousel>
            </CarouselWrapper>

            <ControlWrapper>
              <Arrow onClick={handlePrev} />
              <Position>{selectedProduct + 1}<span>/{subscriptionList.length}</span></Position>
              <Arrow onClick={handleNext} />
            </ControlWrapper>

            <Cards>
              {subscriptionList[selectedProduct]?.codes.map(({ id, code, status, origin }: ISubscribe) => (
                <SecondaryCard
                  key={id}
                  code={code}
                  status={status}
                  handleActive={handleActive}
                  handleChecked={handleChecked}
                  handleFilter={handleFilter}
                  origin={origin}
                  id={id}
                />
              ))}
            </Cards>

            <Wrapper>
              <Text>Select the domains you want to keep</Text>
              <ConfirmButton theme="primary" onClick={handleConfirm}>Confirm</ConfirmButton>
            </Wrapper>
          </>
        ) : (
          <NoSubsWrapper>
            <NoSubs>
              <Image src="/icons/close.svg" width="95" height="96" alt="" />
              <HeadingH3 style={{ margin: '24px 0 0 0' }}>No active subscriptions</HeadingH3>
              <Typography color="var(--color_100)">You can subscribe right now by <br />
                clicking on the button below</Typography>
              <StyledButton theme="primary" onClick={() => router.push('/')}>Get Gscore</StyledButton>
            </NoSubs>
          </NoSubsWrapper>
        )}
      </Container>
    </Layout >
  )
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: end;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: right;
    gap: 8px;    
  }
`;

const NoSubsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 50px 0 100px;
`;

const NoSubs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: -26px;
`;

const StyledButton = styled(Button)`
  margin-top: 32px;
  width: 164px;
  min-width: 164px;
  height: 70px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 44px;
`;

const NewButton = styled(Button)`
  min-width: 152px;
  margin-top: 0;
  margin-left: 24px;
  
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: .6;
    &:hover {
      background-color: var(--primary_1);
    }
  }
  @media ${device.tablet} {
    min-width: 30px;
    margin-left: 14px;
  }
  @media ${device.mobile} {
    background-color: transparent;
    box-shadow: none;
    height: 18px;
    padding: 0;
    color: var(--primary_1);
    :hover {
      background-color: inherit;
    }
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: calc(100vw - (100vw - 100%) / 2);
  height: 327px;
  overflow-x: hidden;
  @media ${device.tablet} {
    height: 321px;
    overflow-x: scroll;
    margin-bottom: 10px;
  }
  @media ${device.mobile} {
    height: 304px;
    margin-bottom: 5px;
  }
`;

interface ICarousel {
  $position: number;
};

const Carousel = styled.div<ICarousel>`
  transition: .3s ease-in-out;
  display: flex;
  top: 0;
  position: absolute;
  gap: 28px;
  margin-left: ${props => props.$position + "px"};
  @media ${device.tablet} {
    gap: 20px;
    padding-right: 15px;
  }
  @media ${device.mobile} {
    gap: 12px;
    padding-right: 15px;
  }
`;

const Arrow = styled.button`
  cursor: pointer;
  background-image: url('/icons/arrow.svg');
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: none;
`;

const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  margin-top: 24px;
  & :last-child {
    transform: rotate(180deg);
  }
  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    ${Arrow} {
      display: none;
    }
  }
`;

const Position = styled.p`
  font-family: 'Thicccboi';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #FFFFFF;
  & span {
    opacity: .3;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
`;

const Text = styled.p`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #FFFFFF;
  @media ${device.mobile} {
    display: none;
  }
`;

const ConfirmButton = styled(Button)`
  min-width: 148px;
  margin-top: 0;
  @media ${device.mobile} {
    width: 100%;
  }
`;

export default SubscriptionsPage;