import Layout from "../components/layout";
import { Container, HeadingH2, HeadingH3, Typography } from "../styles/main";
import Image from "next/image";
import Button from "../ui/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import PrimaryCard from "../ui/PrimaryCard";
import api from "../services";
import { useState } from "react";
import axiosInstance from "../services/axios-instance";
import SecondaryCard from "../ui/SecondaryCard";

axiosInstance('https://gscore-back.herokuapp.com/api/subscribe/self').then(response => console.log(response))

export async function getServerSideProps() {
  // const { data }: any = await api.auth.subscribeSelf();

  // const { data } = await axiosInstance('https://gscore-back.herokuapp.com/api/subscribe/self');

  return {
    props: {
      subscriptions: [{}]
    }
  }
};


interface ISubscriptionsPage {
  subscriptions: any;
};

const SubscriptionsPage: React.FC<ISubscriptionsPage> = ({ subscriptions }) => {
  // console.log(subscriptions);

  const router = useRouter();
  const subs = true;
  const [position, setPosition] = useState<any>(0);
  const [currentCard, setCurrentCard] = useState<any>(1);
  const maxCards = 4;

  const onSubmit = async (data: any) => { };

  const handlePrev = () => {
    if (position < 0) {
      setPosition(position + 648);
      setCurrentCard(currentCard - 1);
    }
  };

  const handleNext = () => {
    if (position <= 0 && currentCard <= maxCards - 1) {
      setPosition(position - 648);
      setCurrentCard(currentCard + 1);
    }
  };

  return (
    <Layout title="Subscriptions">
      <Container>
        {/* {subscriptions.map((sub: any, index: number) => <p key={index}>{index}</p>)} */}
        <Row>
          <HeadingH2 left>My subscriptions</HeadingH2>
          <NewButton theme="primary">Upgrade</NewButton>
        </Row>
        {subs ? (
          <>
            <CarouselWrapper>
              <Carousel $position={position}>
                <PrimaryCard disabled={false} />
                <PrimaryCard disabled={true} />
                <PrimaryCard disabled={true} />
                <PrimaryCard disabled={true} />
              </Carousel>
            </CarouselWrapper>
            <ControlWrapper>
              <Arrow onClick={handlePrev} />
              <Position>{currentCard}<span>/4</span></Position>
              <Arrow onClick={handleNext} />
            </ControlWrapper>

            <Cards>
              <SecondaryCard isActive='Active' />
              <SecondaryCard isActive='Hold' />
              <SecondaryCard isActive='Inactive' />
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