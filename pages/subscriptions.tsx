import Layout from "../components/layout";
import { Container, HeadingH2, HeadingH3, Typography } from "../styles/main";
import Image from "next/image";
import Button from "../ui/Button";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function SubscriptionsPage() {
  const router = useRouter();
  const subs = false;

  return (
    <Layout title="Subscriptions">
      <Container>
        <HeadingH2 left>My subscriptions</HeadingH2>
        {subs ? (
          <>
            sub list
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
        <Container>
        </Container>
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