import Layout from "../components/layout";
import { Container, HeadingH2, HeadingH3, Typography } from "../styles/main";
import Image from "next/image";
import Button from "../ui/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import PrimaryCard from "../ui/PrimaryCard";
import api from "../services";
import { useEffect, useState } from "react";
import SecondaryCard from "../ui/SecondaryCard";

const SubscriptionsPage: React.FC = () => {
  const router = useRouter();
  const subs = true;
  const [position, setPosition] = useState<any>(0);
  const [currentCard, setCurrentCard] = useState<any>(1);
  const [subscriptionList, setSubscriptionList] = useState<Array<any>>([]);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const productId = subscriptionList[selectedProduct]?.productId;
  const subscribeId = subscriptionList[selectedProduct]?.id;

  const handleDowngrade = async () => {
    await api.auth.upgradeProduct({
      productId: productId - 1,
      subscribeId: subscribeId
    });
    const { data } = await api.auth.subscribeSelf();
    setSubscriptionList(data);
  };

  const handleUpgrade = async () => {
    await api.auth.upgradeProduct({
      productId: productId + 1,
      subscribeId: subscribeId
    });
    const { data } = await api.auth.subscribeSelf();
    setSubscriptionList(data);
  };

  const getSubscriptionList = async () => {
    try {
      const { data } = await api.auth.subscribeSelf();
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

  return (
    <Layout title="Subscriptions">
      <Container>
        <Row>
          <HeadingH2 left>My subscriptions</HeadingH2>
          <div>
            <NewButton theme="primary" onClick={handleDowngrade}>Downgrade</NewButton>
            <NewButton theme="primary" onClick={handleUpgrade}>Upgrade</NewButton>
          </div>
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
              <Position>{currentCard}<span>/{subscriptionList.length}</span></Position>
              <Arrow onClick={handleNext} />
            </ControlWrapper>

            <Cards>
              {subscriptionList[selectedProduct]?.codes.map(({ id, code, status, origin }: any) => (
                <SecondaryCard key={id} code={code} status={status} handleActive={handleActive} origin={origin} />
              ))}
            </Cards>

            <Wrapper>
              <Text>Select the domains you want to keep</Text>
              <ConfirmButton theme="primary">Confirm</ConfirmButton>
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
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: calc(100vw - (100vw - 100%) / 2);
  height: 327px;
  overflow-x: hidden;
`;

interface ICarousel {
  $position: any;
};

const Carousel = styled.div<ICarousel>`
  transition: .3s ease-in-out;
  display: flex;
  top: 0;
  position: absolute;
  gap: 28px;
  margin-left: ${props => props.$position + "px"};
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
`;

const Arrow = styled.button`
  cursor: pointer;
  background-image: url('/icons/arrow.svg');
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: none;
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
`;

const ConfirmButton = styled(Button)`
  min-width: 148px;
  margin-top: 0;
`;

export default SubscriptionsPage;